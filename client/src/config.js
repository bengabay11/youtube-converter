export const config = {
    server: {
        resources: {
            getVideoInfo: "/videos/{}/info",
            downloadVideo: "/videos/{}/download?name={}&format={}"
        }
    },
    buttons: {
        titles: {
            downloadSong: "Download Song",
            deleteSong: "Delete Song",
            addSong: "Add Song"
        },
        contents: {
            ok: "OK",
            addSong: "Add Song"
        }
    },
    placeHolders: {
        songLinkInput: "Paste link here e.g. https://www.youtube.com/watch?v=zumC_C0C29c",
    },
    titleContent: "Youtube Converter",
    stateKeyName: "state",
    formats: ["mp3", "mp4", "wav"],
    defaultFormat: "mp3",
    enterKey: "Enter",
    icons: {
        delete: "☓"
    },
    songsTableHeaders: ["Name", "Format","Artist", "🕒", "Uploaded At"],
    download_song_info_error_message: "Some error accrued, probably the server is down. Try again in a few minutes.",
};

export default config;