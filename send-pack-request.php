<?php
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
  header("Location: index-edu.html?pack=error#pack");
  exit;
}

$to = "jake.shand@fibodo.com, james.murphy@fibodo.com";
$subject = "CORE Ready Educator Information Pack Request";

$firstName = htmlspecialchars(trim($_POST["first_name"] ?? ""));
$lastName = htmlspecialchars(trim($_POST["last_name"] ?? ""));
$email = filter_var(trim($_POST["email"] ?? ""), FILTER_SANITIZE_EMAIL);
$organisation = htmlspecialchars(trim($_POST["organisation"] ?? ""));
$type = htmlspecialchars(trim($_POST["organisation_type"] ?? ""));
$learners = htmlspecialchars(trim($_POST["learners"] ?? ""));
$message = htmlspecialchars(trim($_POST["message"] ?? ""));

if (!$firstName || !$lastName || !$email || !$organisation || !$type || !$learners || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  header("Location: index-edu.html?pack=error#pack");
  exit;
}

$body = "
New CORE Ready Educator Information Pack Request

Name: $firstName $lastName
Email: $email
Organisation: $organisation
Organisation type: $type
Number of learners per year: $learners

Course / learner cohort:
$message
";

$headers = "From: CORE Ready <no-reply@fibodo.com>\r\n";
$headers .= "Reply-To: $email\r\n";

if (mail($to, $subject, $body, $headers)) {
  header("Location: index-edu.html?pack=success#pack");
  exit;
} else {
  header("Location: index-edu.html?pack=error#pack");
  exit;
}
?>
