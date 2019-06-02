export const organizeVideoUploadDate = date => {
    let dateArr = date.split('', date.length);
    try{
        let year = dateArr.slice(0, 4).join('');
        let month = dateArr.slice(4, 6).join('');
        let day = dateArr.slice(6, 8).join('');
        return `${day}/${month}/${year}`;
    }
    catch (e) {
        return date;
    }
};

export default organizeVideoUploadDate;