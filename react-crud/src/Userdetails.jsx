import React, { useEffect, useState } from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useParams } from "react-router-dom";
import "./amit.css"
// import Userdata from "./Userdata";

const Userdetails = () => {
    const [userdata, setUserdata] = useState([])
    const {userid} = useParams()


    useEffect(() => {
        // const[userdata, setUserdata] = useState({})
        fetch("http://localhost:4000/user/" + userid).then((result) => {
            result.json().then((resp) => {
                // console.log(resp);
                setUserdata(resp)
            })
        })
    },[])
    console.log(userdata);
    return (
        <>
            {
                userdata &&
                <>
                    <MDBTable striped>
                        <MDBTableHead>
                            <tr>
                                <th scope='col' className="amit">ID</th>
                                <th scope='col' className="amit">Name</th>
                                <th scope='col' className="amit">Email</th>
                                <th scope='col' className="amit">password</th>
                                <th scope='col' className="amit">Age</th>
                                <th scope='col' className="amit">City</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            <tr>
                                <td className="amit">{userdata.id}</td>
                                <td className="amit">{userdata.name}</td>
                                <td className="amit">{userdata.email}</td>
                                <td className="amit">{userdata.password}</td>
                                <td className="amit">{userdata.age}</td>
                                <td className="amit">{userdata.city}</td>

                            </tr>

                        </MDBTableBody>
                    </MDBTable>

                    {/* <h1>{Userdata}</h1> */}
                    {/* <h1 className="text-center">{userdata.id}</h1>
                    <h1 className="text-center">{userdata.name}</h1>
                    <h1 className="text-center">{userdata.email}</h1>
                    <h1 className="text-center">{userdata.password}</h1>
                    <h1 className="text-center">{userdata.age}</h1>
                    <h1 className="text-center">{userdata.city}</h1> */}
                </>
            }
        </>
    );
}

export default Userdetails;