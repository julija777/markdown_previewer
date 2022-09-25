import { useState } from 'react';
import { marked } from 'marked';
import './App.css';

function App() {
  const [text, setText] = useState('');
  return (
    <div className="App">
      <textarea id="editor" 
        onChange={(event) => {
        setText(event.target.value);}}
        value={text}>
      </textarea>
    <div id="preview"
    dangerouslySetInnerHTML={{
      __html: marked(text),
    }}></div>
    </div>
  );
}

export default App;
