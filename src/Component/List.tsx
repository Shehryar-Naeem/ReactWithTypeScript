// import React from "react"
// interface Iprops{
//     people:{
//         name:string,
//         age:number,
//         url:string,
//         note?:string
//     }[] 
// }
// const List: React.FC<Iprops> =({people})=>{
//     return (
//         <>
//             <h1>Hello list</h1>
//         </>
//     )
// }

// export default List


import React from "react";
import {IState as IProp} from "../App"
// interface IProp{
//     people:{
//         name:string,
//         age:number,
//         url:string,
//         note?:string
//     }[]
// }
const List: React.FC<IProp>=({people})=>{
    const RenderList=() =>{
        return people.map((person,index)=>{
            return (
                <>
                    <li className="main_ul" key={index}>
                        <img src={person.url} alt="shehryar"/>
                        <h3>{person.name}</h3>
                        <p>{person.age} year old</p>
                        <p>{person.note}</p>
                    </li>
                </>
            )
        })
    }
    return (
        <>

                <ul>
                    {
                        RenderList()
                    }
                </ul>
        </>

    )
}

export default List