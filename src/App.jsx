import logo from './logo.png';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [topic, setTopic] = useState("");
  const [tone, setTone] = useState("");
  const [size, setSize] = useState("");
  const [platform, setPlatform] = useState("");
  const [content, setContent] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  async function generateContent(e) {
    setGeneratingAnswer(true);
    e.preventDefault();
    setContent("Loading your answer... \n It might take upto 10 seconds");
    try {
      const response = await axios({
        url:" https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCUzyu9vsX1d-cJbfLhMoz9LZR0sCZdY0I",
        method: "post",
        data: {
          contents:[{parts:[{ text: "Explain how AI works"}]}],
        },
      });

      console.log(response)
      /*setContent(
        response["data"]["candidates"][0]["content"]["parts"][0]["text"]
      );*/
    } catch (error) {
      console.log(error);
      setContent("Sorry - Mohaamed Bamedhagh");
    }

    setGeneratingAnswer(false);
  }

  
  
  return (
    <div className="App">
      
      <div className="container">

        <img className="logo" src={logo} alt="logo"></img>

        <div className="topic-container">
          <label htmlFor="topic">Write the topic :</label>
          <input type="text" value={topic} onChange={(e) => setTopic(e.target.value)} placeholder='The impact of social media on the society..' />
        </div>

        <div className="tone-container">
          <label htmlFor="tone">Choose the tone of the text :</label>
          <input type="text" value={tone} onChange={(e) => setTone(e.target.value)} placeholder='Ex: formal, emotional, positive, funny ...' />
        </div>

        <div className="size-container">
          <label htmlFor="size">Enter the size of the text:</label>
          <input type="text" value={size} onChange={(e) => setSize(e.target.value)} placeholder='Ex: short,mediam, long ...' />
        </div>

        <div className="platform-container">
          <label htmlFor="platform">Write the platform that you will post on :</label>
          <input className="platform" value={size} onChange={(e) => setSize(e.target.value)} type="text" placeholder='Ex: instagram, facebook, linkedn ...' />
        </div>

        <button className='generator-btn' onClick={(e) => generateContent(e)}>Generate Thread</button>

        <div className="content-container">
          <p className='content'>{content}</p>
        </div>


        <p className='madeBy'>@ Made by: Abdulrahman Omar</p>

      </div>

    </div>
  );
}

export default App;
