import React from 'react';

const SelectGenre = ({selectedGenre}) => {

    const handleChange = function(event){
        const url = event.target.value;
        console.log(url);
        selectedGenre(url);
    };

   return (
       <div>
           <select onChange={handleChange}>
                <option value='https://itunes.apple.com/gb/rss/topsongs/limit=20/json'>All</option>
                <option value='https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=21/json'>Rock</option>
                <option value='https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=17/json'>Dance</option>
                <option value='https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=6/json'>Country</option>
           </select>
       </div>
   )

}

export default SelectGenre;