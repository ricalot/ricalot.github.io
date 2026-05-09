#!/bin/bash

# Ensure we're in the script's directory (the git root)
cd "$(dirname "$0")" || exit

echo "Copying website files..."
cp -r ../Business\ Manager/Website/* .

echo "Copying email signature..."
cp ../Business\ Manager/Branding\ Package/email_signature.html .

echo "Copying offer..."
cp ../Business\ Manager/Branding\ Package/offer.html .

echo "Copying capability statement..."
cp ../Business\ Manager/Business\ Planning/Capability_Statement.html ./capability.html

echo "Copying branding images..."
cp ../Business\ Manager/Branding\ Package/*.png ./assets/images/ 2>/dev/null || :

echo "Copying business planning images..."
cp ../Business\ Manager/Business\ Planning/*.png ./assets/images/ 2>/dev/null || :

echo "Adding changes to git..."
git add .

echo "Committing changes..."
# Use a generic message, or allow an optional argument
COMMIT_MSG=${1:-"Auto-update from Business Manager working directories"}
git commit -m "$COMMIT_MSG"

echo "Pushing to repository..."
git push

echo "Deployment to git repository complete!"
