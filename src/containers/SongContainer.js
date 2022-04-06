import React, {useState, useEffect} from 'react';
import SongList from '../components/SongList';
import SelectGenre from '../components/SelectGenre';

const SongContainer = () => {
    const [songs, setSongs] = useState([]);
    const [fetchUrl, setFetchUrl] = useState('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
    // const [selectedSong, ]

    useEffect(() => {
        getSongs();
    },[fetchUrl])

    const getSongs = function() {
        fetch(fetchUrl)
        .then(res => res.json())
        .then(songs => setSongs(songs.feed.entry));
    }

    const selectedGenre = (url) => {
        setFetchUrl(url)
    }



    return (
        <>
            <SelectGenre  selectedGenre = {selectedGenre}/>
            <SongList songs = {songs} />
        </>

    )
}

export default SongContainer;