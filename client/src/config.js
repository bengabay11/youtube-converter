export const config = {
    titleContent: "Youtube2mp3",
    stateKeyName: "state",
    serverAddress: "http://localhost:3000",
    songLinkInputPlaceHolder: "Paste link here e.g. https://www.youtube.com/watch?v=zumC_C0C29c",
    songNameInputPlaceHolder: "Song Name",
    addSongButtonTitle: "Add Song",
    addSongButtonText: "Add Song",
    formats: ["mp3", "mp4", "wav", "avi", "mpg", "wma"],
    defaultFormat: "mp3",
    enterKey: "Enter",
    icons: {
        delete: "☓"
    },
    songsTableHeaders: ["Name", "Format","Artist", "🕒", "Uploaded At", ""],
    download_song_info_error_message: "Some error accrued, probably the server is down. Try again in a few minutes.",
    okButtonContent: "OK",
    downloadSongsButtonTitle: "Download Songs"
};

export default config;