import React, { useState } from 'react';

import './App.css';
import AddToDoList from './Component/AddToDoList';
import List from './Component/List';
// import List from './Component/List';

// interface IState{
//   people:{
//     name:string,
//     age:number,
//     url:string,
//     note?:string
//   }[]
// }
// function App() {
//   const [people,setPeople]= useState<IState['people']>([])
//   return (
//     <div className="App">
//       <h1>People invited to my party</h1>
//       <List people={people}/>
//     </div>
//   );
// }

// export default App;

export interface IState{
  people:{
    name:string,
    age:number,
    url:string,
    note?:string
  }[]
}
const App=()=>{
  const [people,setPeople]= useState<IState['people']>([
    {
      name:"shehryar",
      age:20,
      url:"https://www.kindpng.com/picc/m/119-1195498_avatar-people-person-business-user-man-character-businessman.png",
      note:"I am a frontEnd developer."
    }
  ])
  return (
    <>
      <div className='App'>
        <h1>People invited to my party</h1>
        <List people={people}/>
        <AddToDoList people={people} setPeople={setPeople}/>  
      </div>
    </>
  )
}

export default App