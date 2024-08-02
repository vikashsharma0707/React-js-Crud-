





















// import axios from "axios";
// import { useState } from "react";


// const Insert=()=>{
  

//   const[input,setInput] =useState({})

//   const handleData=(e)=>{
//     let name=e.target.name;
//     let value=e.target.value;
//     setInput(values=>({...values,[name]:value}));
//     console.log(input);
//   }

//   const handle=(e)=>{
//    let url="http://localhost:3000/students";
//    axios.post(url,input).then((res)=>{
//      alert("data saved sucessfully")
//    }).catch((err)=>{
//     console.log("not is inserting")
//    })

//   }

//   return(
//     <>
//      <h1>this is insert page</h1>

//      <input type="text" placeholder="Rollno"  name="rollno" value={input.rollno}  onChange={handleData}/>
//      <br/>
//      <input type="text" placeholder="name"  name="name" value={input.name}  onChange={handleData}/>
//      <br/>
//      <input type="text" placeholder="city"  name="city" value={input.city}  onChange={handleData}/>
//      <br/>
//      <input type="text" placeholder="fees"  name="fees" value={input.fees}  onChange={handleData}/>
//      <br/>
//      <button onClick={handle}>Save data</button>

//     </>

//   )
// }

// export default Insert;







/*import axios from "axios";
import { useState } from "react";



const Insert=()=>{


  const [input,setInput] =useState({});

  const handleInput=(e)=>{
    let name= e.target.name;
    let value=e.target.value;

    setInput(values=>({...values,[name]:value}));
    console.log(input);

  }

const hanleSubbmit=(e)=>{
let url="http://localhost:3000/students";
axios.post(url,input).then((res)=>{
  alert("data succesfulliy submitted");
}).catch((err)=>{
  console.log("error is inserting");
})
}




  return(
    <>
     <h1>this is insert page</h1>
     <input type="text"  placeholder="Roll number" name="rollno" value={input.rollno}  onChange={handleInput}/>
     <br/>
     <input type="text"  placeholder="Name"  name="name" value={input.name}  onChange={handleInput}/>
     <br/>
     <input type="text"  placeholder="City"    name="city" value={input.city}  onChange={handleInput}/>
     <br/>
     <input type="text"  placeholder="Fees"     name="fees" value={input.fees}  onChange={handleInput}/>
     <br/>

     <button  onClick={hanleSubbmit}>Save data</button>
    
    </>

  )
}




export default Insert;*/



import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';


const Insert=()=>{

const [input, setInput]= useState({})



const handleInput=(e)=>{
    let name= e.target.name;
    let value=e.target.value;
    setInput(values=>({...values, [name]:value}));
    console.log(input);

}


const handleSubmit=(e)=>{
    e.preventDefault()
    let url="http://localhost:3000/students";

   axios.post(url, input).then((res)=>{
    alert("Data succesfully submited!!!");
   }).catch((err)=>{
    console.log("Error in Inserting!!")
   });

}

    return(
        <>
        <div className='divcenter'>
          <h1> Insert Students Record</h1>

          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Rollno</Form.Label>
        <Form.Control type="text" name="rollno" value={input.rollno}   onChange={handleInput} placeholder="Enter rollno" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" value={input.name}  onChange={handleInput} placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" name="city" value={input.city}  onChange={handleInput} placeholder="Enter city" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Fees </Form.Label>
        <Form.Control type="text" name="fees" value={input.fees}  onChange={handleInput} placeholder="Enter fees" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    </div>
        </>
    )
}


export default Insert;