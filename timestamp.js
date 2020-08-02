"use strict";
exports.__esModule = true;
var replace = require("replace-in-file");
var moment = require("moment-timezone");
var timeStamp = moment(new Date()).tz('America/New_York').format('MM/DD/YYYY');
var options = {
    files: [
        'src/environments/environment.ts',
        'src/environments/environment.prod.ts',
    ],
    from: /buildTimestamp: '(.*)'/g,
    to: 'buildTimestamp: \'' + timeStamp + '\'',
    allowEmptyPaths: false
};
try {
    var changedFiles = replace.sync(options);
    if (changedFiles.length === 0) {
        throw new Error('Unable to update file');
    }
    console.log('Build timestamp is set to: ' + timeStamp);
}
catch (error) {
    console.error('Error occurred:', error);
    throw error;
}
