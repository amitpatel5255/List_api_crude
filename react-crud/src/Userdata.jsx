import React, { useEffect, useState } from "react";
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import Useradd from "./Useradd";
import { Item } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import Userdetails from "./Userdetails";
import Useredit from "./Useredit";


const Userdata = () => {
    const [userdata, setUserdata] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch("http://localhost:4000/user").then((result) => {
            result.json().then((resp) => {
                // console.log(resp);
                setUserdata(resp)
            })
        })
    }, [userdata])
    // console.log(userdata);

    const Useradd = (id) => {
        navigate("/useradd")
    }
    const Userdetails = (id) => {
        navigate("/userdetails/"+id )
    }
    const Useredit = (id) => {
        navigate("/useredit/"+id)
    }
    const userdelet = (id) => {
        if (window.confirm("Do you want remove?")) {
            fetch("http://localhost:4000/user/" + id, {
                method: "DELETE"
            }).then((resp) => {
                // console.log(" item deleted", userdata);
                alert("Removed successfully.")
            }).catch((error) => {
                console.log(error.massage);
            })
            // window.location.reload();
        }
    }
    return (
        <>
            <h1>Userdata</h1>
            <MDBTable align='middle'>
                <MDBTableHead>
                    <tr>
                        <th scope='col'>Id</th>
                        <th scope='col'>Username</th>
                        <th scope='col'>Userpassword</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </MDBTableHead>
                <tr>
                    <button onClick={Useradd}>User-add</button>
                </tr>
                <MDBTableBody>
                    {

                        userdata.map((item) =>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.password}</td>
                                <td>
                                    <button onClick={() => { Userdetails(item.id) }}>Userdetails</button>
                                    <button onClick={() => { Useredit(item.id) }}>Useredit</button>
                                    <button onClick={() => { userdelet(item.id) }} >Userdelet</button>
                                </td>
                            </tr>
                        )
                    }
                </MDBTableBody>
            </MDBTable>
        </>
    );
}

export default Userdata;