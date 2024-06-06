import { useState } from "react"

export default function Login(props){

    const [name, setName] = useState("")
    const [klass, setKlass] = useState(0)
    const [sport, setSport] = useState("")
    const colors = ['red', 'green', 'blue', 'orange', 'yellow']

    function handleNameChange(event){
        let newName = event.target.value
        setName(newName)
    }

    function handleKlassChange(event){
        let newKlass = event.target.value
        setKlass(newKlass)
    }

    function handleSportChange(event){
        let newSport = event.target.value
        setSport(newSport)
    }

    function handleSubmit(event){
        event.preventDefault();
        window.alert(name, klass, sport)
    }

    function randomColor(){
        return 
    }

    return (
        <div style={{backgroundColor:"blue"}}>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" value={name} onChange={handleNameChange}/><br/><br/>

                <label>Class</label>
                <input type="number" value={klass} onChange={handleKlassChange}/> <br/><br/>
                
                <label>Fav Sport</label>
                <input type="text" value={sport} onChange={handleSportChange}/><br/><br/>

                <input type="submit" value={"submit"}/>
            </form>
        </div>
    )
}