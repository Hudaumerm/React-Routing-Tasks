import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

function SignUp() {
  const [data,setdata]=useState({});
  const changehandler=(e)=>{

    setdata({...data,[e.target.name]:e.target.value})
    console.log(data)
    

  }
  return (
    <div className='signup'>
        <Form className='form-wrapper-signup form'>
        <h1 className='header'>Login Page</h1>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  name="email" value={data.email} onChange={changehandler}/>
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
      <Button variant="primary" type="submit" className='submit'>
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default SignUp