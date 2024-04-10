import React from 'react'
import { useForm } from 'react-hook-form'
import {DevTool} from "@hookform/devtools"


import { Button, Col, Form, FormGroup, Input, Label } from 'reactstrap'

export default function Login() {

    const  form = useForm()
    const {register, control} = form
    
    return (
        <div style={{ marginTop: "50px" }}>
            <div className='d-flex justify-content-center rounded-4'>

                <Form className='p-4 pt-1 w-25 mt-5 mb-5 border rounded-3'>
                    <h1 className='text-center'>Login</h1>
                    <hr />
                    <FormGroup row>
                        <Label
                            for="exampleEmail" >
                            Email
                        </Label>
                        <Col >
                            <Input
                                id="email"
                                type='text'
                                {...register("email")}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label
                            for="examplePassword">
                            Password
                        </Label>
                        <Col >
                            <Input
                                id="password"
                                name="password"
                                placeholder="password placeholder"
                                type="password"
                                {...register("password")}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup

                        row
                    >

                        <Button className='w-100' color='info'>
                            Submit
                        </Button>

                    </FormGroup>
                </Form>
                <DevTool control={control}/>
            </div>
        </div>
    )
}
