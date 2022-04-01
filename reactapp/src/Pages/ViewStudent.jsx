import React ,{ useEffect,useState  }from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import UserService from '../service/UserService';
import '../styles/ViewUser.css';

export default function ViewStudent(props) {
    const param = useParams();
    const id = param.id;
    const navigate = useNavigate();
    const [error, setError] = React.useState(null);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [fatherName, setFatherName] = useState("");
    const [motherName, setMotherName] = useState("");
    const [emailId, setEmailId] = useState("");
    const [age, setAge] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [alternateMobileNo, setAlternateMobileNo] = useState("");
    const [gender, SetGender] = useState("");
    const [address, setAddress] = useState({
        houseNo: "",
        streetName: "",
        areaName: "",
        pinCode: "",
        state: "",
        Nationality: ""
    })


    useEffect(() => {
        const getStudent = async () => {

            UserService.getByStudentId(id).then((res) => {
                let student = res.data;
                setFirstName(student.firstName);
                setLastName(student.lastName);
                setFatherName(student.fatherName);
                setMotherName(student.motherName);
                setEmailId(student.emailId);
                setDateOfBirth(student.dateOfBirth);
                setAge(student.age);
                setMobileNo(student.mobileNo);
                setAlternateMobileNo(student.alternateMobileNo);
                SetGender(student.gender)
                setAddress({

                    houseNo: student.address.houseNo,
                    streetName: student.address.streetName,
                    areaName: student.address.areaName,
                    pinCode: student.address.pinCode,
                    state: student.address.state,
                    Nationality: student.address.Nationality
                })

            }).catch(Error => {
                setError(Error);
            })
        }
        getStudent()
    }, [id]);

    if (error) {
        return (`Error ${error}`)
    }
    return (
        <div>
            <table id='userDetails'>
                <thead>
                    <tr>
                        <th scope='col'>Field</th>
                        <th scope='col'>Data</th>
                    </tr>
                </thead>
                <tbody>
                    
                <tr>
                        <td className='Field'>User Id :</td>
                        <td className='data'>{id}</td>
                    </tr>
                    <tr>
                        <td className='Field'>First Name : </td>
                        <td className='data'>{firstName}</td>
                    </tr>
                    <tr>
                        <td className='Field'>Last Name</td>
                        <td className='data'>{lastName}</td>
                    </tr>
                    <tr>
                        <td className='Field'>Father Name</td>
                        <td className='data' >{fatherName}</td>
                    </tr>
                    <tr>
                        <td className='Field'>Mother Name</td>
                        <td className='data' >{motherName}</td>
                    </tr>
                    <tr>
                        <td className='Field'>Email Id :</td>
                        <td className='data'>{emailId} </td>
                    </tr>
                    <tr>
                        <td className='Field'>Date Of Birth :</td>
                        <td className='data'>{dateOfBirth} </td>
                    </tr>
                    <tr>
                        <td className='Field'>Age :</td>
                        <td className='data'>{age} </td>
                    </tr>
                    <tr>
                        <td className='Field'>Mobile No</td> 
                        <td className='data'>{mobileNo}</td>
                    </tr>
                    <tr>
                        <td className='Field'>Alternate Mobile No</td>
                        <td className='data'>{alternateMobileNo }</td>
                    </tr>
                    <tr>
                        <td className='Field'> Gender :</td>
                        <td className='data' >{gender} </td>
                    </tr>
                    <tr>
                        <td className='Field'> Address: </td>
                        <td className='AddressData'>
                        <table id='Student_Address'>
                            <tbody>
                            <tr>
                                <td className='Field' >House No :</td>
                                <td className='data'>{address.houseNo}</td>
                            </tr>
                            <tr>
                                <td className='Field'>Street Name :</td>
                                <td className='data'>{address.streetName}</td>
                            </tr>
                            <tr>
                                <td className='Field'>Area Name :</td>
                                <td className='data'>{address.areaName}</td>
                            </tr>
                            <tr>
                                <td className='Field'>State :</td>
                                <td className='data'>{address.state}</td>
                            </tr>
                            <tr>
                                <td className='Field'>Nationality : </td>
                                <td className='data'>{address.Nationality}</td>
                            </tr>
                            <tr>
                                <td className='Field'>PIN : </td>
                                <td className='data'>{address.pinCode}</td>
                            </tr>
                            </tbody>
                        </table>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', margin:'auto 10px' }} >
                <button type="button" id="Edit" onClick={()=>navigate(`/admin/editStudent/${id}`)} >Edit</button>
                <button type="button" id="Cancle" onClick={() => navigate(-1)} >Back</button>
            </div>
        </div>
    )
}
