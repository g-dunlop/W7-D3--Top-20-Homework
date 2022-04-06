import React from 'react';

const Song = ({song, index}) => {
    
    return (
        <li> 
            <h1>Chart # {index+1}</h1> <h2>Song Title: {song['im:name'].label} </h2> <h3>Artist: {song['im:artist'].label}</h3> 
            <img src={song['im:image'][2].label} />
            <audio controls src={song.link[1].attributes.href} />
        </li>
    )
}

export default Song;