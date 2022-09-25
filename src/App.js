import { useState } from 'react';
import { marked } from 'marked';
import './App.css';

/*  When my markdown previewer first loads, 
the default text in the #editor field should contain valid markdown 
that represents at least one of each of the following elements:

a header (H1 size), 
a sub header (H2 size), 
a link, inline code, 
a code block, 
a list item, 
a blockquote, 
an image, 
and bolded text
 */



function App() {
  const [text, setText] = useState(` # H1 
  ## H2
  [title](https://www.w3schools.com/) 
  \`code\` 
  \`\`\`
  {
    "firstName": "John", 
    "lastName": "Smith",
    "age": 25
  }
  \`\`\`
    
  - Write the press release
  - Update the website
  - Contact the media

  > blockquote

  ![alt text](image.jpg)

  **bold text**

      `);

  marked.setOptions({
    breaks: true
  })
  
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
