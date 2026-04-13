#!/usr/bin/env bash
# Sync PUBLIC docs from lethe-market into Starlight content directories.
# Only docs/public/ is synced — internal docs stay in the repo only.
set -euo pipefail

MARKET="${1:-_market}"

add_frontmatter() {
    local src="$1" dst="$2" title="$3"
    printf -- '---\ntitle: "%s"\n---\n\n' "$title" > "$dst"
    cat "$src" >> "$dst"
}

# Vision & Strategy (from docs/public/)
add_frontmatter "$MARKET/docs/public/VISION.md"            "src/content/docs/vision/vision.md"        "Vision Architecture"
add_frontmatter "$MARKET/docs/public/ROADMAP.md"           "src/content/docs/vision/roadmap.md"       "Roadmap"
add_frontmatter "$MARKET/docs/public/MANIFESTO.md"         "src/content/docs/vision/manifesto.md"     "Manifesto"

# Market Design
add_frontmatter "$MARKET/docs/public/MARKET_PRINCIPLES.md" "src/content/docs/market/principles.md"    "Market Principles"

# Participate
add_frontmatter "$MARKET/docs/public/USER_SCENARIOS.md"    "src/content/docs/participate/user-scenarios.md" "User Scenarios"

echo "Synced public docs from $MARKET/docs/public/"
