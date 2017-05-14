# mag-hub [![Build Status](https://travis-ci.org/mahnunchik/mag-hub.svg)](https://travis-ci.org/mahnunchik/mag-hub)

[![Greenkeeper badge](https://badges.greenkeeper.io/mahnunchik/mag-hub.svg)](https://greenkeeper.io/)

[Mag](https://github.com/mahnunchik/mag) is the streaming logger for NodeJS

`mag-hub` is a hub for all streams of mag logger.

If you're thinking about formatting the output messages of your application - that module is for you!

## Installation

```
$ npm install mag-hub --save
```

## Usage

If you require `mag-hub` in your application, all the logs will go through this stream.

You can make a pipe to it and format logs as you want!

```
var hub = require('mag-hub');

// Formatters
var info = require('mag-process-info');
var format = require('mag-format-message');
var colored = require('mag-colored-output');

hub.pipe(info())
  .pipe(format())
  .pipe(colored())
  .pipe(process.stdout);
```

## Plugins

Plugin is the stream that transforms log object. It can change the content, add or remove fields in the log object.

Known plugins:

* [mag-process-info](https://github.com/mahnunchik/mag-process-info) - Transform stream that adds information about process
* [mag-format-message](https://github.com/mahnunchik/mag-format-message) - Transform stream that formats message from arguments

## Output plugins

Output plugins is the stream that makes string from log object. This string can be written to a stream like `process.stdout`

Known output plugins:

* [mag-colored-output](https://github.com/mahnunchik/mag-colored-output) - Transform stream that makes collored message from log object

## License

MIT
