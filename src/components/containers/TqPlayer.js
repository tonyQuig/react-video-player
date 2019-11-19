import React, {useState} from 'react'
import Video from '../Video'
import Playlist from './Playlist'
import {ThemeProvider} from 'styled-components';
import StyledWbnPlayer from "../styles/StyledWbnPlayer";

const TqPlayer = props => {

    const videos = JSON.parse(document.querySelector('[name="videos"]').value);
    
    const [state, setState] = useState({
        videos: videos.playlist,
        activeVideo: videos.playlist[0],
        nightMode: true,
        playlistId: videos.playlistId,
        autoplay: false
    })

    const nightModeCallback = () => {}

    const endCallback = () => {
    }

    const progressCallback = () => {}

    return (
        <ThemeProvider theme={state.nightMode ? theme : themeLight}>
            {state.videos !== null ? (
                <StyledWbnPlayer>
                    <Video 
                        active={state.activeVideo}
                        autoplay={state.autoplay}
                        endCallback={endCallback}
                        progressCallback={progressCallback}
                    />
                    <Playlist
                        videos={state.videos}
                        active={state.activeVideo}
                        nightModeCallback={nightModeCallback}
                    />
                </StyledWbnPlayer>
            ): null}
            
        </ThemeProvider>
    )
}

export default TqPlayer

const theme = {
    bgColor: "#353535",
    bgColorItem: "#414141",
    bgColorActive: "#405c63",
    bgColorPlayed: "#526d4e",
    border: "none",
    borderPlayed: "none",
    color: "#FFFFFF",
}

const themeLight = {
    bgColor: "#FFF",
    bgColorItem: "#FFF",
    bgColorActive: "#80a7b1",
    bgColorPlayed: "#7d9979",
    border: "1px solid #353535",
    borderPlayed: "none",
    color: "#353535",
}