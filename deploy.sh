#!/bin/bash
cp index.html dist/index.html

# Build the project
npm run build

# Deploy to GitHub Pages
gh-pages -d 