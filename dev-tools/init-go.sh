#!/bin/bash

DEFAULTDIR=$(pwd)
WORKDIR=${2:-$DEFAULTDIR}
GODIR="$WORKDIR"/go/"$1"

echo "Creating directory $GODIR"
mkdir -p "$GODIR"

echo "Creating golang files"
touch "$GODIR"/"$1"{.go,_test.go}