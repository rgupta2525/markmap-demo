import React from 'react';
// import './App.css';
import MarkmapHooks from './markmap/markmap-hooks';
import { Data, convertToMarkdown } from './markmap/utils';

function App() {
  const data: Data = {
    title: "Mind Map",
    sections: [
      {
        title: "Section 1",
        sections: [
          {
            title: "Subsection 1.1",
            items: [
              { title: "Item 1.1.1" },
              { title: "Item 1.1.2" },
            ],
          },
          {
            title: "Subsection 1.2",
            items: [
              { title: "Item 1.2.1" },
              { title: "Item 1.2.2" },
            ],
          },
        ],
      },
      {
        title: "Section 2",
        sections: [
          {
            title: "Subsection 2.1",
            items: [
              { title: "Item 2.1.1" },
              { title: "Item 2.1.2" },
            ],
          },
          {
            title: "Subsection 2.2",
            items: [
              { title: "Item 2.2.1" },
              { title: "Item 2.2.2" },
            ],
          },
        ],
      },
      {
        title: "Section 3",
        items: [
          { title: "Item 3.1" },
          { title: "Item 3.2" },
        ],
      },
    ],
  };
  
  
  const markdownData = convertToMarkdown(data);
  console.log('markdownData----', markdownData);
  return (
    <div className="App">
      <MarkmapHooks data={markdownData}/>
    </div>
  );
}

export default App;
