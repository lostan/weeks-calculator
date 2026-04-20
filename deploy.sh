#!/bin/bash
set -euo pipefail

FUNCTION_NAME="weeks-calculator"
REGION="us-central1"
RUNTIME="python312"

# Override with env vars if needed:
# GCP_PROJECT=my-project REGION=europe-west1 ./deploy.sh

PROJECT="${GCP_PROJECT:-$(gcloud config get-value project)}"

echo "Deploying $FUNCTION_NAME to project $PROJECT ($REGION)..."

gcloud functions deploy "$FUNCTION_NAME" \
  --project="$PROJECT" \
  --gen2 \
  --runtime="$RUNTIME" \
  --region="$REGION" \
  --source=. \
  --entry-point=weeks_calculator \
  --trigger-http \
  --allow-unauthenticated \
  --memory=128Mi \
  --timeout=10s

URL=$(gcloud functions describe "$FUNCTION_NAME" \
  --project="$PROJECT" \
  --gen2 \
  --region="$REGION" \
  --format="value(serviceConfig.uri)")

echo ""
echo "Deployed: $URL"
echo ""
echo "Test with:"
echo "  curl \"$URL?end_date=2026-04-20\""
echo "  curl -X POST $URL -H 'Content-Type: application/json' -d '{\"end_date\":\"2026-04-20\"}'"
