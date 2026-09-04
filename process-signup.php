<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $first_name = isset($_POST['first_name']) ? htmlspecialchars(trim($_POST['first_name'])) : '';
    $last_name = isset($_POST['last_name']) ? htmlspecialchars(trim($_POST['last_name'])) : '';
    $email = isset($_POST['email']) ? htmlspecialchars(trim($_POST['email'])) : '';
    $phone = isset($_POST['phone']) ? htmlspecialchars(trim($_POST['phone'])) : '';
    $not_robot = isset($_POST['not_robot']) ? 'Yes' : 'No';
    
    $to = "core@fibodo.com";
    $subject = "New Registration - Launch Offer";
    
    $message = "New Registration Submission\n\n";
    $message .= "First Name: " . $first_name . "\n";
    $message .= "Last Name: " . $last_name . "\n";
    $message .= "Email: " . $email . "\n";
    $message .= "Phone: " . $phone . "\n";
    $message .= "Not a Robot: " . $not_robot . "\n";
    $message .= "\nSubmitted on: " . date('Y-m-d H:i:s') . "\n";
    
    $headers = "From: noreply@fibodo.com\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();
    
    mail($to, $subject, $message, $headers);
    
    // Redirect back with success parameter
    header("Location: sign-up-2.html?success=1");
    exit;
} else {
    header("Location: sign-up-2.html?error=1");
    exit;
}
?>
