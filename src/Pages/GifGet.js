import React, { Fragment, useState } from 'react'
import axios from 'axios';

import '../App.css'

/*Components*/
import CardDesign from '../Sources/CardDesign';

export const GifGet = () => {

    const URLGif = "https://api.giphy.com/v1/stickers/search?";

    const apiKeyGiphy = "api_key=I4ub2ABDFChWF6nfeWp8yNiJIhRNDpsF"

    const limitedGiphy = "&limit=50";

    const urlQuery = "&q="

    const [Giphy, setGiphy] = useState([])

    const getGiphy = (e) => {
        axios.get(`${URLGif}${apiKeyGiphy}${urlQuery}${encodeURI(e.target.value)}${limitedGiphy}`)
        .then(r => {
            setGiphy(r.data.data);
        }).catch(er => {
            console.log(er);
        })
    }


  return (
    <div className='ContentGiphy'>
        <h1>¡Get Gif Of Api Giphy Developer API!</h1>

        <input className='inputGetGiphy' placeholder='Get Gifs Writing' onChange={getGiphy} type="text" />
        
        <div className=''>
            {
                Giphy.map( c => (
                    <CardDesign key={c.id} 
                    tittle={c.title}
                    image = {c.images.downsized_medium.url}
                    />
                ))
            }
        </div>

    </div>
  )
}

export default GifGet;