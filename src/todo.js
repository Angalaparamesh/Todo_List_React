import {useState} from "react"


function Todo()
{
    const [list,setlist] = useState([{id:1,activity:"Dark Chocolate"},{id:2,activity:"Vennila"}])

    const [newitem,setnewitem] = useState("")

    function handleDelete(removeid)
    {
        var temarr = list.filter(function(item)
    {
        if(item.id == removeid)
        {
            return false
        }
        else{
            return true
        }
    })

    setlist(temarr)
    }

    function handleChange(evt)
    {
        setnewitem(evt.target.value)
    }

    function addelement()
    {
        setlist([...list,{id:list.length+1,activity:newitem}])
    }
    function cart()
    {
        alert("your Cart Added Successfully.!!")
    }

    return(
        <div class="container">
        <h1>Sweet Candy List</h1>
        <input value={newitem} onChange={handleChange} class="input"></input>
        <button class="btn" onClick={addelement}>Add</button>
        <ul class="list">
            {
                list.map(function(item)
            {
                return <li>{item.activity} <button class="btn1" onClick={()=>{handleDelete(item.id)}}>Delete</button><button class="btn2" onClick={cart}>Cart</button></li>
            })
            }
        </ul>
        <h1>ORDER NOW..!!</h1>
        </div>
    )
}

export default Todo