import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Form, Button, Row, Col } from 'react-bootstrap'
import './Form.css'


const FormDoctor = () => {
    return (
        <div className='AppGlass'>
            <Sidebar />
            <div className=''>
                <h1 className='ms-3'>Add Doctor</h1>
                <div className="justify-content-center">
                    <Form className='ms-3 me-3'>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="name" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                        </Row>

                        <Row className='mb-3'>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Date of Birth</Form.Label>
                                <Form.Control type="date" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Gender</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Department</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>Poli gigi</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress2">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="Apartment, studio, or floor" />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type='number' />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Photo</Form.Label>
                                <Form.Control type='file' />
                            </Form.Group>


                        </Row>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default FormDoctor