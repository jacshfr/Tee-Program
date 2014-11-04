'use strict';

var fs = require('fs');

var input = process.stdin;
var output = process.stdout;
var file = process.argv[2];

output.write(input);
fs.writeFile(file, input);
