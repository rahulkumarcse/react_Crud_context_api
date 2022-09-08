import React from 'react'
import {
    Form,
    Label,
    FormGroup,
    Input,
    Button
} from 'reactstrap';
import {Link} from 'react-router-dom';

export const AddUser = () => {
    return (
       <Form>
        <FormGroup>
            <Label>User Name</Label>
            <Input type='text' placeholder='Enter your username'></Input>
        </FormGroup>
        <Button type='submit'>Submit</Button>
        <Link to="/" className='btn btn-danger mx-2'>Cancel</Link>
       </Form>
    )
}
