
import React from 'react'
import PlaylistItem from '../PlaylistItem'
import StyledPlaylistItem from "../styles/StyledPlaylistItem"

const PlaylistItems = ({ videos, active }) => 
    (
        <StyledPlaylistItem>
            {videos.map(video => (
                <PlaylistItem
                    key={video.id}
                    video={video}
                    active={video.id === active.id ? true : false}
                    played={video.played}
                />
            ))}
        </StyledPlaylistItem>
    )


export default PlaylistItems