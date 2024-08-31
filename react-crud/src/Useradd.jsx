import React, { useState } from 'react';
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
}
    from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';


const Useradd = () => {
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [age, setAge] = useState("")
    const [city, setCity] = useState("")
    const navigate = useNavigate("")
    const signin = () => {
        // console.log(name, email, password, age, city);
        let data = { id, name, email, password, age, city }
        console.log(data);

        fetch("http://localhost:4000/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }).then((result) => {
            console.log(result);
            // result.json().then((resp) => {
            // console.log(resp);
            navigate("/userdata")
            // })
        })

    }
    return (
        <>
            <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

                <MDBInput wrapperClass='mb-4' label='id' value={id} onChange={(e) => setId(e.target.value)} id='form1' disabled type='number' />
                <MDBInput wrapperClass='mb-4' value={name} onChange={(e) => setName(e.target.value)} label='name' id='form2' type='text' />
                <MDBInput wrapperClass='mb-4' value={email} onChange={(e) => setEmail(e.target.value)} label='email' id='form3' type='text' />
                <MDBInput wrapperClass='mb-4' value={password} onChange={(e) => setPassword(e.target.value)} label='password' id='form4' type='password' />
                <MDBInput wrapperClass='mb-4' value={age} onChange={(e) => setAge(e.target.value)} label='age' id='form5' type='number' />
                <MDBInput wrapperClass='mb-4' value={city} onChange={(e) => setCity(e.target.value)} label='city' id='form5' type='text' />

                <div className="d-flex justify-content-between mx-3 mb-4">
                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                    <a href="!#">Forgot password?</a>
                </div>

                <MDBBtn className="mb-4" value="useradd" onClick={signin}>Sign in</MDBBtn>

                <div className="text-center">
                    <p>Not a member? <a href="#!">Register</a></p>
                    <p>or sign up with:</p>

                    <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
                        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                            <MDBIcon fab icon='facebook-f' size="sm" />
                        </MDBBtn>

                        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                            <MDBIcon fab icon='twitter' size="sm" />
                        </MDBBtn>

                        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                            <MDBIcon fab icon='google' size="sm" />
                        </MDBBtn>

                        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                            <MDBIcon fab icon='github' size="sm" />
                        </MDBBtn>

                    </div>
                </div>

            </MDBContainer>
        </>
    );
}

export default Useradd;