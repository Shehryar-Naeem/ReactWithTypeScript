import React, { useState } from "react"
import { IState as prop} from "../App"

interface Iprops{
    people:prop['people']
    setPeople:React.Dispatch<React.SetStateAction<prop['people']>>
}
const AddToDoList: React.FC<Iprops> =  ({people,setPeople})=> {
    const [input, setInput] = useState({
        name: "",
        url: "",
        age: "",
        note: ""
    })
    const Controler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target
        setInput({
            ...input,
            [name]: value
        })
    }

    const submit=():void=>{
        if(!input.name || !input.age || !input.note || !input.url){
            return
        }
        setPeople([
            ...people,{
                name: input.name,
                age: parseInt(input.age),
                url: input.url,
                note: input.note
            }
        ])
    }
    return (
        <>
            <div className="input_container">
                <div className="input_box">
                    <input type="text"
                        name="name"
                        value={input.name}
                        onChange={Controler}
                        required />
                    <span>Name</span>
                </div>
                <div className="input_box">
                    <input type="text"
                        name="url"
                        value={input.url}
                        onChange={Controler}
                        required />
                    <span>URL</span>
                </div>
                <div className="input_box">
                    <input type="number"
                        name="age"
                        value={input.age}
                        onChange={Controler}
                        required />
                    <span>Age</span>
                </div>
                <div className="input_box">
                    <input type="text"
                        name="note"
                        value={input.note}
                        onChange={Controler}
                        required />
                    <span>Note</span>
                </div>
                <div className="input_box">
                    <button className="btn" onClick={submit}>
                        Add List
                    </button>
                </div>

            </div>
        </>
    )
}

export default AddToDoList;