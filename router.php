<?php
// router.php — for PHP built-in server
// Serve existing files normally; otherwise return index.html so client-side routing works.
$uri = urldecode(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));
$requested = __DIR__ . $uri;

// If the requested resource exists as a file (including PHP files), let the server handle it.
if ($uri !== '/' && file_exists($requested) && is_file($requested)) {
    return false;
}

// Fallback: serve index.html for SPA routes
$index = __DIR__ . '/index.html';
if (file_exists($index)) {
    // Serve the SPA entry so client-side router can handle the path.
    header('Content-Type: text/html; charset=UTF-8');
    echo file_get_contents($index);
    return true;
}

// Last-resort 404
http_response_code(404);
echo "404 Not Found";
