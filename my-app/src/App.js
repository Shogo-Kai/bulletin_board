import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [thread, setThread] = useState([])

    //useEffectについてよく分からない　調べる
    useEffect(() => {
        fetch('https://railway.bulletinboard.techtrain.dev/threads?offset=0')
        .then(res => res.json())
        .then(data => {setThread(data)})
    }, [])

  return (
    <div>
      <ul>
       {thread.map((thread) => <li key={thread.id}>{thread.title}</li>)}
      </ul>
    </div>
  );
}

export default App;
