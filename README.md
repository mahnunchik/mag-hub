# mag-hub [![Build Status](https://travis-ci.org/mahnunchik/mag-hub.svg)](https://travis-ci.org/mahnunchik/mag-hub)

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


## License

MIT
