import React from "react"
import Title from "./Title"
import config from "../config"
import SongsProvider from "../containers/SongsProvider";
import SongFormProvider from "../containers/SongFormProvider";
import DownloadSongsButtonProvider from "../containers/DownloadSongsButtonProvider";

export const App = () => (
    <div>
        <Title content={config.titleContent}/>
        <SongFormProvider/>
        <DownloadSongsButtonProvider/>
        <SongsProvider headers={config.songsTableHeaders}/>
    </div>
);

export default App;