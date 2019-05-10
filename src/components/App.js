import React from "react";
import NewSongInputProvider from "../containers/NewSongInputProvider";
import Title from "./Title";
import config from "../config";

export const App = () => (
    <div>
        <Title content={config.titleContent}/>
        <NewSongInputProvider/>
    </div>
);

export default App;