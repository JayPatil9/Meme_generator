import React from 'react'


export default function Meme() {
  return (
  <div className="main">
    <form className="form">
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
      <button className="btn">Get a new Meme Image 🖼️</button>
    </form>
  </div>
);
}
