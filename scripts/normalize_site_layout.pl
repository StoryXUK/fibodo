#!/usr/bin/env perl

use strict;
use warnings;
use File::Basename qw(dirname);
use File::Spec;
use Cwd qw(abs_path);

# Apply the shared fibodo site shell to every standalone HTML page. HTML
# fragments without a <body> are intentionally left untouched.

my $root = abs_path(File::Spec->catdir(dirname(__FILE__), '..'));

my $header = <<'HEADER';
<header id="navbar">
    <!-- Navigation will be loaded here -->
</header>
HEADER
chomp $header;

my $footer = <<'FOOTER';
<!--=================================
footer-->
<footer id="footer">
    <!-- Footer will be loaded here -->
</footer>
<!--=================================
footer-->
FOOTER
chomp $footer;

my @base_styles = (
    ['css/font-awesome/all.min.css', 'font-awesome/all.min.css'],
    ['css/bootstrap/bootstrap.min.css', 'bootstrap/bootstrap.min.css'],
    ['css/bootstrap/bootstrap-icons.min.css', 'bootstrap/bootstrap-icons.min.css'],
    ['css/style.css', 'css/style.css'],
);

my @changed;

for my $path (sort glob(File::Spec->catfile($root, '*.html'))) {
    open my $input, '<:raw', $path or die "Cannot read $path: $!";
    local $/;
    my $original = <$input>;
    close $input;

    next unless $original =~ /<body\b/i;

    my $content = $original;
    # New generated lines use LF so git's whitespace checks remain clean even
    # when a legacy source file still contains CRLF line endings.
    my $newline = "\n";
    (my $page_header = $header) =~ s/\n/$newline/g;
    (my $page_footer = $footer) =~ s/\n/$newline/g;

    # Several legacy templates kept secondary menu panels outside <header>.
    # The shared nav fragment already provides its own responsive off-canvas.
    $content =~ s{<!--=+\s*Main Menu OffCanvas\s*-->.*?<!--=+\s*Main Menu OffCanvas\s*-->}{}gis;
    $content =~ s{<!--=+\s*Right menu\s*-->.*?<!--=+\s*Right menu\s*-->}{}gis;
    $content =~ s{<!--=+\s*(?:Main Menu OffCanvas|Right menu)\s*-->}{}gi;

    # Match the canonical stylesheet URL used by index.html.
    $content =~ s{href=["']css/professional\.css(?:\?[^"']*)?["']}
                 {href="css/professional.css?v=20260720"}ig;

    my @missing_styles;
    for my $style (@base_styles) {
        my ($href, $marker) = @{$style};
        push @missing_styles, $href if index(lc $content, lc $marker) < 0;
    }

    if (@missing_styles) {
        my $base_block = join $newline,
            map { qq{<link rel="stylesheet" href="$_">} } @missing_styles;

        if ($content =~ /<link\b(?=[^>]*\bstylesheet\b)[^>]*>/i) {
            substr $content, $-[0], 0, $base_block . $newline;
        } else {
            $content =~ s{</head\s*>}{$base_block$newline$&}i;
        }
    }

    if (index(lc $content, 'css/professional.css') < 0) {
        my $professional =
            '<link rel="stylesheet" href="css/professional.css?v=20260720">';
        $content =~ s{</head\s*>}{$professional$newline$&}i;
    }

    unless ($content =~ /<header\b[^>]*\bid=["']navbar["']/i) {
        if ($content =~ /<header\b[^>]*>.*?<\/header>/is) {
            $content =~ s{<header\b[^>]*>.*?</header>}{$page_header}is;
        } else {
            $content =~ s{(<body\b[^>]*>)}{$1$newline$newline$page_header}i;
        }
    }

    unless ($content =~ /<footer\b[^>]*\bid=["']footer["']/i) {
        if ($content =~ m{<footer\b[^>]*\bclass\s*=\s*(["'])[^"']*\b(?:site-footer|footer)\b[^"']*\1[^>]*>.*?</footer>}is) {
            $content =~ s{<footer\b[^>]*\bclass\s*=\s*(["'])[^"']*\b(?:site-footer|footer)\b[^"']*\1[^>]*>.*?</footer>}{$page_footer}is;
        } else {
            $content =~ s{</body\s*>}{$page_footer$newline$&}i;
        }
    }

    if (index($content, 'js/bootstrap/bootstrap.min.js') < 0) {
        my $bootstrap = '<script src="js/bootstrap/bootstrap.min.js"></script>';
        $content =~ s{</body\s*>}{$bootstrap$newline$&}i;
    }

    if (index($content, 'js/loadNav.js') < 0) {
        my $loader = '<script src="js/loadNav.js"></script>';
        $content =~ s{</body\s*>}{$loader$newline$&}i;
    }

    next if $content eq $original;

    open my $output, '>:raw', $path or die "Cannot write $path: $!";
    print {$output} $content;
    close $output;
    push @changed, File::Basename::basename($path);
}

print 'Normalized ' . scalar(@changed) . " standalone pages.\n";
print "$_\n" for @changed;
