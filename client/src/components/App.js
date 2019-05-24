import React from "react"
import Title from "./Title"
import config from "../config"
import AddSong from "../containers/AddSong"
import SongsProvider from "../containers/SongsProvider";

export const App = () => (
    <div>
        <Title content={config.titleContent}/>
        <AddSong/>
        <SongsProvider headers={config.songsTableHeaders}/>
    </div>
);

export default App;