@app
remix-architect

@aws
# profile default
region ap-northeast-2
architecture arm64
runtime nodejs18.x

@http
/*
  method any
  src server

@plugins
plugin-remix
  src plugin-remix.js

@static
