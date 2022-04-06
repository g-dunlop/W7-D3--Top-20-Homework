import React from 'react';
import Song from './Song';

const SongList = ({songs}) => {
    const songNodes = songs.map((song, index) => {
        return <Song song={song} key={index} index={index} />
    })

    return (
        <div>
            <ul>
                {songNodes} 
                
            </ul>
        </div>
    )
}

export default SongList;