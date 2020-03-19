import React from "react"
import Title from "./Title"
import config from "../config"
import SongsProvider from "../containers/SongsProvider";
import SongFormProvider from "../containers/SongFormProvider";

const App = () => (
    <div>
        <Title content={config.titleContent}/>
        <SongFormProvider/>
        <SongsProvider headers={config.songsTableHeaders}/>
    </div>
);

export default App;