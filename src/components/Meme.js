import React from 'react'
import memesData from '../memesData.js'


export default function Meme() {

  const [meme,setMeme] = React.useState({
  topText: "",
  bottomText: "",
  randomImage: ""
  })

  const [allMemesData,setAllMemesData] = React.useState(memesData)


  function getMemeImage() {
    const memesArray = allMemesData.data.memes
    const randomNumber = Math.floor(Math.random() + memesArray.length)
    const url = memesArray[randomNumber].url
    setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
    }))
  
  }

  
  return (
  <div className="main">
    <div className="form">
    <div>
      <label className="label">Top Text</label>
      <input 
        placeholder="Top Text"
        className="input"
        type="text" 
      />
    </div>
    <div>
      <label className="label">Bottom Text</label>
      <input
        className="input"
        placeholder="Bottom Text"
        type="text" 
        />
    </div>
      <button className="btn" onClick={getMemeImage}>Get a new Meme Image 🖼️</button>
    </div>
    <img src={meme.randomImage} className="meme-img" />
  </div>
);
}
