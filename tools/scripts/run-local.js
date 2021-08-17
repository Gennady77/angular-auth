const {createProcess} = require('./create-process');

const processServer = createProcess('app server', 'nodemon');
const processAngular = createProcess('Angular', 'npm run start:app')

process.on('SIGINT', () => undefined);
process.on('close', code => {
  processServer.kill('SIGINT');
  processAngular.kill('SIGINT');
  process.exit(code);
});
