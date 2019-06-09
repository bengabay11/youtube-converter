const archiver = require('archiver');

module.exports = (filePaths) => {
    let zip = archiver('zip', {});
    for(let filePath of filePaths){
        let data = fs.readFileSync(filePath);
        let fileName = path.basename(filePath);
        zip.append(data, { name: fileName });
    }

    return zip;
};