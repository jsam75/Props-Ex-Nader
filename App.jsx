//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

//import Section from './WarmUp/Section.jsx'
//import Section1 from './Ex1/Section1.jsx'
//import Section2 from './Ex2/Section2.jsx'
import Profile from './Ex3/Profile.jsx'
//import Paragraph5 from "./BonusEx/Paragraph5.jsx"

function App() {
  
  function sayWoof() {
  console.log("Coming to you live from the top of the Component Tree. Say Woof if you like React: Woof!")
  }
  return (
    
    // <Paragraph5 text="Hello">
    //   <h1>H1 from App.jsx</h1>
    // </Paragraph5>

   <>
    <Profile
      profileText={ "Profile" }
      cardText={ "Card" }
      buttonText={ "Click Me!" }
      handleClick={ sayWoof }
    />
      
    </>

  )
}

export default App

/*Notes:
1.  App.jsx is the primary container for UI (component coordination sheet).  In the actual component files, the 
    functions are written to be dynamic (no values provided).  All the specific, hard coded messages/values are 
    put in this file to be rendered onscreen.  It appears all the functional groundwork is done in the individual 
    component files, but the specifics of what is displayed come from this file.
2.  The function App() must come first, then any other functions/logic/returns are written under the umbrella of 
    the App function.
3.  Following the trail of props throughout all these files is confusing and will require time to develop a mental map.
4.  Interesting note: if you want to comment out an element, you must do so from the uppermost node.  I could not
    comment out <Profile until I commented it from above the React Fragment.  Page would not load until properly
    commented out.
*/
