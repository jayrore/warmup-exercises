#!/bin/bash

NEWALGORITHM=${1:-test-algo}

# shellcheck disable=SC1091
source ./dev-tools/init-go.sh "$NEWALGORITHM"

# shellcheck disable=SC1091
source ./dev-tools/init-js.sh "$NEWALGORITHM"

# shellcheck disable=SC1091
source ./dev-tools/init-python.sh "$NEWALGORITHM"