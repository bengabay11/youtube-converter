import React from "react"
import Title from "./Title"
import config from "../config"
import AddSong from "../containers/AddSong"

export const App = () => (
    <div>
        <Title content={config.titleContent}/>
        <AddSong/>
    </div>
);

export default App;