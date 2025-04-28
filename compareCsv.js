const fs = require('fs');
function readCsv(filePath) {
    const data = fs.readFileSync(filePath, 'utf8');
    return data.trim().split('\n').map(line => line.split(','));
  }
  const csv1 = readCsv('./data/file1.csv');
  const csv2 = readCsv('./data/file2.csv');
  const csv1String = JSON.stringify(csv1);
const csv2String = JSON.stringify(csv2);
if (csv1String === csv2String) {
    console.log('✅ Os arquivos são iguais.');
  } else {
    console.log('❌ Os arquivos são diferentes.');
  }