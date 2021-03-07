#!/bin/sh

echo "This script fetch from a git repository and rename files. They are not uploaded in this repo to avoid unneeded commits"

ls -l
wget https://github.com/tracking-exposed/experiments-data/raw/master/potests/potest_first/potest1-v3.csv -o potest1-video-v3.csv
ls -l
wget https://github.com/tracking-exposed/experiments-data/raw/master/potests/potest_12-19feb/search_homes_clean.csv -o potest2-phase1-collection1.csv
ls -l
wget https://github.com/tracking-exposed/experiments-data/raw/master/wetest1/home-%CF%89%CF%841-v8.csv -o wetest1-home-v8.csv
ls -l
wget https://github.com/tracking-exposed/experiments-data/raw/master/wetest1/sessions-%CF%89%CF%841-v7.csv -o wetest1-session-v7.csv
ls -l
