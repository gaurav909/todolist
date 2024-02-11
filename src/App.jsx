import { useState } from "react";
import "./App.css";

function App() {
  const [todolist, setTodoList] = useState([]);

  const saveTodoList = (event) => {
   

    const toname = event.target.toname.value;
    if(!todolist.includes(toname)){
      const finalTodolist=[...todolist,toname]
      setTodoList(finalTodolist)
      

    }else{
      alert('Todo Name Already exixts...')
    }
    event.preventDefault();
    clearFields(event);

  };
  function clearFields(event) {
    // we have to convert event.target to array
    // we use from method to convert event.target to array
    // after that we will use forEach function to go through every input to clear it
    Array.from(event.target).forEach((e) => (e.value = ""));
  }
  let list= todolist.map((value,index)=>{
    return(
      <TodoListItem  value={value} key={index} indexNumber={index}
      todolist={todolist}
      setTodoList={setTodoList}/>
    )

  })

  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={saveTodoList}>
        <input type="text" name="toname" />
        <button>Save</button>
      </form>
      <div className="outerdiv">
      <ul>
      {
        list
      }
     </ul>
      </div>
      
     
    </>
  );
}

export default App;


function TodoListItem({value ,indexNumber,todolist,setTodoList}){
  const [status,setStatus]=useState(false)
  const deleteData =()=>{
    const finalData = todolist.filter((v,i)=>i!=indexNumber)
    setTodoList(finalData)
  }
  const checkStatus=()=>{
    setStatus(!status)

  }
  return(
    <li className={(status?'completeTodo':'')} onClick={checkStatus}> {indexNumber+1}. {value} <span onClick={deleteData}>&times;</span></li>
  )

}
