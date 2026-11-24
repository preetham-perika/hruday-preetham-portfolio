#!/usr/bin/env bash
# ==============================================================================
# Next.js Dynamic ATS Resume PDF Generator
# Serves static export via HTTP & compiles vector ATS PDF using Chrome Headless
# ==============================================================================

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
OUTPUT_PDF="$SCRIPT_DIR/Sri_Hruday_Preetham_Perika_Java_Full_Stack_2026.pdf"
OUT_DIR="$SCRIPT_DIR/out"

# Check if build output exists, if not build it
if [ ! -f "$OUT_DIR/index.html" ]; then
  echo "📦 Running 'npm run build' to generate static export..."
  cd "$SCRIPT_DIR" && npm run build
fi

# Find available port
PORT=3987
while lsof -Pi :$PORT -sTCP:LISTEN -t >/dev/null ; do
  PORT=$((PORT + 1))
done

echo "🚀 Starting temporary local server on port $PORT..."
python3 -m http.server "$PORT" --directory "$OUT_DIR" > /dev/null 2>&1 &
SERVER_PID=$!

# Ensure cleanup on exit
cleanup() {
  if [ -n "$SERVER_PID" ]; then
    kill "$SERVER_PID" 2>/dev/null || true
  fi
}
trap cleanup EXIT

sleep 1

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

echo "📄 Compiling vector ATS Resume PDF from http://localhost:$PORT..."
"$CHROME_BIN" --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="$OUTPUT_PDF" "http://localhost:$PORT"

echo "✅ PDF successfully generated: $OUTPUT_PDF"
ls -lh "$OUTPUT_PDF"
