import React from 'react'
import { Card, Button, Form, FloatingLabel } from 'react-bootstrap'
import './Login.css'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <React.Fragment>
            {/* <div className='container-fluid'> */}
                <div className='login'>
                    <Card className='shadow-lg p-3 mb-5 bg-white rounded card-1'>
                        {/* <Card.Header className='text text-center'><h1>LOGING</h1></Card.Header> */}
                        <Card.Body>
                            <Form className='form'>
                                <h1 className='text text-center p-4'>LOGIN</h1>
                                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3 variant-dark">
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </FloatingLabel>
                                <FloatingLabel className="mb-3" controlId="floatingPassword" label="Password">
                                    <Form.Control type="password" placeholder="Password" />
                                </FloatingLabel>
                                <Form.Group className="mb-4 p-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Remember me" />
                                </Form.Group>
                                <Link to='/dashboard'>
                                    <div className="row p-3">
                                        <div className='btn btn-primary' >
                                            Login
                                            {/* <Link to='/dashboard' >Login</Link>  */}
                                        </div>
                                    </div>
                                </Link>
                                {/* <Button className=' btn btn-primary btn-lg btn-block'>Login</Button> */}
                            </Form>
                            {/* <Card.Text className='text text-center'>or Login with</Card.Text> */}
                            <div className="row" style={{ margin:"27px" }}>
                                <div className='col-md-6 p-3' >
                                    <Button variant="light"><i class="fa fa-facebook"></i>  facebook</Button>
                                </div>
                                <div className='col-md-6 p-3' >
                                    <Button variant="light"><i class="fa fa-google"></i>  google</Button>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Text className="text text-center mb-2" >Not a member?<Link to="/register">sign up now</Link></Card.Text>
                    </Card>
                </div>
            {/* </div> */}
        </React.Fragment>
    )
}
