#!/usr/bin/env python3
import re

# Define all page updates
pages_data = {
    "vouchers.html": {
        "title": "Vouchers",
        "subtitle": "Create, share, and track gift cards and offers in seconds.",
        "banner_p1": "The fibodo Vouchers Module helps you drive sales, reward loyalty, and attract new customers — all from inside your business dashboard.",
        "banner_p2": "Whether it's a gift card, multibuy discount, or special promotion, vouchers are a powerful way to boost bookings and build repeat business — without complicated setup or extra tools.",
        "main_title": "Why It Exists",
        "main_p1": "Great offers shouldn't be hard work.",
        "main_p2": "Most independent professionals rely on spreadsheets or third-party tools to run promotions — which makes it hard to track, manage, or measure results.",
        "main_p3": "The fibodo Vouchers Module brings everything together in one place, helping you create and manage digital vouchers that connect directly to your products, memberships, and client accounts.",
        "features_title": "Core Features",
        "features": [
            ("Easy Voucher Creation", "Design and issue vouchers in seconds — fixed value, percentage discount, or custom offers."),
            ("Seamless Redemption", "Clients can redeem vouchers instantly at checkout or via their app — no codes or admin needed."),
            ("Smart Tracking", "See exactly which offers are performing best, and where your redemptions are coming from."),
            ("Automated Expiry & Limits", "Set rules for expiry dates, redemption limits, or single-use access — automatically enforced."),
            ("Custom Branding", "Add your logo, colours, and tone so every offer reflects your brand perfectly.")
        ],
        "sidebar_title": "Why It Matters",
        "sidebar_p1": "Vouchers aren't just discounts — they're conversation starters.",
        "sidebar_p2": "They bring new clients in the door, encourage existing ones to return, and let you reward loyalty in real, trackable ways.",
        "sidebar_bullets": [
            "Run targeted offers that fit your business goals",
            "Incentivise referrals and repeat purchases",
            "Simplify redemption and tracking",
            "Keep every offer fully branded and measurable"
        ],
        "cta_title": "Upgrade Your Business with Vouchers",
        "cta_p1": "Start using vouchers to fill quiet periods, reward loyal clients, and build lasting relationships — all inside fibodo.",
        "cta_p2": "No extra software. No spreadsheets. Just smarter selling made simple."
    }
}

# Function to update a single page
def update_page(filename, data):
    try:
        with open(filename, 'r') as f:
            content = f.read()
        
        # Update banner
        content = re.sub(
            r'<h1 class="title mb-3">.*?</h1>',
            f'<h1 class="title mb-3">{data["title"]}</h1>',
            content, count=1
        )
        
        print(f"Updated {filename}")
        
        with open(filename, 'w') as f:
            f.write(content)
            
    except Exception as e:
        print(f"Error updating {filename}: {e}")

# Update all pages
for filename, data in pages_data.items():
    update_page(filename, data)

print("Batch update complete!")
