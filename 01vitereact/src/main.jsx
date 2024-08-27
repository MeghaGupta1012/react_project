import React from 'react';
import ReactDOM from 'react-dom/client';

//import App from './App.jsx'

// function MyApp(){
//   return(
//     <div>
//       <h2>Custom App</h2>
//     </div>
//   )
// }


// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click to visit google'
// }


// const anotherElement  = (
//   <a href="https://google.com" target='_blank'>Visit google</a>
// )


const anotherUser="Click to the link"

const reactElement =React.createElement(
  'a',
  {href: 'https://google.com', target:'_blank'},
  'Click me to visit to google',
  anotherUser
)


 ReactDOM.createRoot(document.getElementById('root')).
 render(

reactElement
  
  
)
