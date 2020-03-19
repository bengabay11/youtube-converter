const archiver = require('archiver');

module.exports = (filePaths) => {
    const zip = archiver('zip', {});
    for(let filePath of filePaths){
        const data = fs.readFileSync(filePath);
        const fileName = path.basename(filePath);
        zip.append(data, { name: fileName });
    }

    return zip;
};