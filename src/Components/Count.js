import React from 'react'

function Count() {

    const [count,setCount]=useState(0);
    const [text, setText]=useState();

    const increment =() => {
        setCount(count +1);
        setText( count > 0 ? blue: red);
    } 
      return (
<div>
    <div >
        <small style= {{color: text}}></small>{count}</div>
    <button className='' onClick={increment} > + </button>


    </div>
  )
}

export default Count