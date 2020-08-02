import * as replace from 'replace-in-file';
import * as moment from 'moment-timezone';

const timeStamp: string = moment(new Date()).tz('America/New_York').format('MM/DD/YYYY');
const options = {
  files: [
    'src/environments/environment.ts',
    'src/environments/environment.prod.ts',
  ],
  from: /buildTimestamp: '(.*)'/g,
  to: 'buildTimestamp: \'' + timeStamp + '\'',
  allowEmptyPaths: false,
};
try {
  const changedFiles = replace.sync(options);
  if (changedFiles.length === 0) {
    throw new Error('Unable to update file');
  }
  console.log('Build timestamp is set to: ' + timeStamp);
} catch (error) {
  console.error('Error occurred:', error);
  throw error;
}
