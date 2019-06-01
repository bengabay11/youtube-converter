export const organizeVideoUploadDate = date => {
    try{
        let year = date.splice(0,4);
        let month = date.splice(5, 2);
        let day = date.splice(7, 2);
        return `${day}/${month}/${year}`;
    }
    catch (e) {
        return date;
    }
};

export default organizeVideoUploadDate;