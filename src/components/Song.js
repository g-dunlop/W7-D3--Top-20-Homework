import React from 'react';

const Song = ({song, index}) => {
    
    return (
        <li> Chart #: {index+1} Song Title: {song['im:name'].label} Artist: {song['im:artist'].label} </li>
    )
}

export default Song;