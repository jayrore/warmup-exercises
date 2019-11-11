#!/bin/bash

DEFAULTDIR=$(pwd)
WORKDIR=${2:-$DEFAULTDIR}

touch "$WORKDIR"/python/"$1"{.py,_test_.py}