#!/usr/bin/env bash
# ==============================================================================
# Dynamic PDF Resume Generator
# Uses Google Chrome Headless to compile index.html into a vector ATS PDF
# ==============================================================================

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
OUTPUT_PDF="$SCRIPT_DIR/Sri_Hruday_Preetham_Perika_Java_Full_Stack_2026.pdf"
HTML_FILE="file://$SCRIPT_DIR/index.html"

echo "📄 Compiling dynamic ATS Resume PDF from index.html..."

# Find chrome or chromium executable
CHROME_BIN=""
if command -v google-chrome &> /dev/null; then
  CHROME_BIN="google-chrome"
elif command -v chromium &> /dev/null; then
  CHROME_BIN="chromium"
elif command -v chromium-browser &> /dev/null; then
  CHROME_BIN="chromium-browser"
else
  echo "❌ Error: Google Chrome or Chromium is not installed."
  exit 1
fi

"$CHROME_BIN" --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="$OUTPUT_PDF" "$HTML_FILE"

echo "✅ PDF successfully generated: $OUTPUT_PDF"
ls -lh "$OUTPUT_PDF"
