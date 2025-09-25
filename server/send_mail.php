<?php
// Basic endpoint to receive JSON POST and send email via PHPMailer
// Copy config.example.php to config.php and fill SMTP settings

header('Content-Type: application/json');
// Allow CORS for local testing – lock this down in production
if (php_sapi_name() !== 'cli') {
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: POST, OPTIONS');
  header('Access-Control-Allow-Headers: Content-Type');
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(204);
  exit;
}

$input = json_decode(file_get_contents('php://input'), true);
if (!$input) {
  http_response_code(400);
  echo json_encode(['status' => 'error', 'message' => 'Invalid JSON']);
  exit;
}

// Basic validation
$required = ['name', 'email', 'subject', 'message'];
foreach ($required as $f) {
  if (empty($input[$f])) {
    http_response_code(422);
    echo json_encode(['status' => 'error', 'message' => "Field $f is required"]);
    exit;
  }
}

$configPath = __DIR__ . '/config.php';
if (!file_exists($configPath)) {
  http_response_code(500);
  echo json_encode(['status' => 'error', 'message' => 'Server not configured. Copy config.example.php to config.php and set SMTP settings.']);
  exit;
}

$config = include $configPath;

require __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);
try {
  // Server settings
  $mail->isSMTP();
  $mail->Host = $config['smtp']['host'];
  $mail->SMTPAuth = true;
  $mail->Username = $config['smtp']['username'];
  $mail->Password = $config['smtp']['password'];
  $mail->SMTPSecure = $config['smtp']['secure'] ?? PHPMailer::ENCRYPTION_STARTTLS;
  $mail->Port = $config['smtp']['port'];

  // Recipients
  $mail->setFrom($config['from']['email'], $config['from']['name']);
  $mail->addAddress($config['to']);
  $mail->addReplyTo($input['email'], $input['name']);

  // Content
  $mail->isHTML(true);
  $mail->Subject = '[Contact Form] ' . $input['subject'];
  $body = "<p><strong>Name:</strong> " . htmlspecialchars($input['name']) . "</p>";
  $body .= "<p><strong>Email:</strong> " . htmlspecialchars($input['email']) . "</p>";
  if (!empty($input['phone'])) {
    $body .= "<p><strong>Phone:</strong> " . htmlspecialchars($input['phone']) . "</p>";
  }
  $body .= "<hr/><p>" . nl2br(htmlspecialchars($input['message'])) . "</p>";

  $mail->Body = $body;

  $mail->send();
  echo json_encode(['status' => 'ok', 'message' => 'Message sent']);
} catch (Exception $e) {
  http_response_code(500);
  echo json_encode(['status' => 'error', 'message' => 'Mailer Error: ' . $mail->ErrorInfo]);
}
