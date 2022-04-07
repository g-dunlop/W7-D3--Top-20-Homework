import React from 'react';

const Song = ({song, index}) => {
    
    return (
        <li className="list-item"> 
            <div className="list-item-left">
                <div className="list-item-left-left">
                    <img src={song['im:image'][2].label} />
                </div>
                <div className="list-item-left-right">
                    <h1>Chart # {index+1}</h1> 
                    <h2>Song Title: {song['im:name'].label} </h2> 
                    <h3>Artist: {song['im:artist'].label}</h3> 
                    <audio className="audio-bar" controls src={song.link[1].attributes.href} />
                </div>
            </div>
            
                
                
            
        </li>
    )
}

export default Song;