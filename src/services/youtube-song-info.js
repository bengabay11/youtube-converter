export const getSongInfoFromYoutube = async (link, format) => {
    // let fullUrl = `http://www.youtube.com/oembed?url=${link}`;
    // let options = {
    //     headers: {
    //         'Access-Control-Allow-Origin': '*',
    //     }
    // };
    // let response = await axios.get(fullUrl, options);
    return {
        id: "",
        title: "All The stars",
        artist: "Dr. Dre",
        uploadedAt:  Date("2011-02-24T22:31:02.000Z"),
        duration: 23,
        likes: 12348
    }
};