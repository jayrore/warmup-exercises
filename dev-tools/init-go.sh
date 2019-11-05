#!/bin/bash
mkdir -p "$(pwd)"/go/"$1"
touch "$(pwd)"/go/"$1"/"$1"{.go,_test.go}