const path = require('path');
const fs = require('fs');
const { archivedir, resolveArchiveFolder } = require('../utility/directories');
// const socket = require('../utility/socket');
const jsonLinesWriter = require('./jsonLinesWriter');

function archiveWriter({ folderName, fileName }) {
  const dir = resolveArchiveFolder(folderName);
  if (!fs.existsSync(dir)) {
    console.log(`Creating directory ${dir}`);
    fs.mkdirSync(dir);
  }
  const jsonlFile = path.join(dir, `${fileName}.jsonl`);
  const res = jsonLinesWriter({ fileName: jsonlFile });
  // socket.emitChanged(`archive-files-changed-${folderName}`);
  return res;
}

module.exports = archiveWriter;
