# loggerix

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

An opinionated logging ecosystem for client and server apps written in TypeScript.

## Packages

#### browser

A logger to be used by the browser - high level goals for this are to be easily usable and to largely handle user actions such as the browser being closed and the network being partially unavailable. We also don't want to hit the network every request and have chosen a batching strategy.

#### server

A server logger to be used by modern node engines 10+

## Roadmap

### 1.0.0

- client/browser logger for modern browsers
- single client transport
- server logger for node 10+
- single client transport

### Architecture

The library will be a monorepo built using lerna.
