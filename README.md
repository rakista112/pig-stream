# Pig Latin Transform Stream #

## Things he do ##
The PLTS transforms any string input into Pig Latin.

## WHY!? ##
I made PLTS because I really wanted to try implementing streams and Pig Latin came to mind... because *ywhay otnay*?

## Usage ##
To convert any input into pig latin, just pass a stream through the PLTS.

```javascript
var PigStream = require('pig-stream');
var pstream = new PigStream;

process.stdin.pipe(pstream).pipe(process.stdout);
```

## Options ##
The translating is done by [pig-latin](https://github.com/isaachess/pig-latin) so you can use the same options with PLTS. Just pass an object containing the options when creating the stream.

```javascript
var pstream = new PigStream({capitalize: true, vowelEnding: 'er'});
```
