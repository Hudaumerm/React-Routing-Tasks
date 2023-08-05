import React, { useState } from 'react'
import {Form,Button} from 'react-bootstrap'
import DetailPage from './DetailPage';
import { Link } from 'react-router-dom'


function RegistrationForm() {
  const [data,setdata]=useState({});
  const [first, setfirst] = useState(true)
  const changehandler=(e)=>{

    setdata({...data,[e.target.name]:e.target.value})
    console.log(data)

  }
  return (
    <div className='reg'>
        <Form className='form'>
        <h1 className='header'>Registration Form</h1>

        <Form.Group className="mb-3" controlId="formFirst name">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter first name" name="firstname" value={data.firstname} onChange={changehandler} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="form last name">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter last name" name="lastname" value={data.lastname} onChange={changehandler} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formaddress">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Enter adress" name="address" value={data.address} onChange={changehandler}/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' value={data.email} onChange={changehandler}/>
        <Form.Text className="text-muted text">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" value={data.password} onChange={changehandler}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" className='submit' ><Link to="/details"> Submit </Link></Button>
    </Form>
    <DetailPage data={data} setdata={setdata}/>

    </div>
    
  )
  
}


export default RegistrationForm