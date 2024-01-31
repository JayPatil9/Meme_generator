import React from 'react'
import memesData from '../memesData.js'


export default function Meme() {

  const [meme,setMeme] = React.useState({
  topText: "",
  bottomText: "",
  randomImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLQUQ6g6NjGqj3qncgsJGpxzzRrL_qDAc1qQ&usqp=CAU"
  })

  const [allMemesData,setAllMemesData] = React.useState(memesData)
  
  
  React.useEffect(async () => {
    const res = await fetch("https://api.imgflip.com/get_memes")
    const data = await res.json()
    setAllMemesData(data.data.memes)
      
  }, [])
  

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemesData.length)
    const url = allMemesData[randomNumber].url
    setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
    }))
  
  }

  function handleChange(event) {
    const { name , value } = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
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
        name="topText"
        value={meme.topText}
        onChange={handleChange}
      />
    </div>
    <div>
      <label className="label">Bottom Text</label>
      <input
        className="input"
        placeholder="Bottom Text"
        type="text"
        name="bottomText"
        value={meme.bottomText}
        onChange={handleChange}
        />
    </div>
      <button className="btn" onClick={getMemeImage}>Get a new Meme Image 🖼️</button>
    </div>
    
    <div className="meme">
    <img src={meme.randomImage} className="meme--image" />
    <h2 className="meme--text top">{meme.topText}</h2>
    <h2 className="meme--text bottom">{meme.bottomText}</h2>
    </div>
    
  </div>
);
}
