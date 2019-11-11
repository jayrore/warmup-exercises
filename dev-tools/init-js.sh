#!/bin/bash
DEFAULTDIR=$(pwd)
WORKDIR=${2:-$DEFAULTDIR}

touch "$WORKDIR"/javascript/"$1"{.js,.test.js}