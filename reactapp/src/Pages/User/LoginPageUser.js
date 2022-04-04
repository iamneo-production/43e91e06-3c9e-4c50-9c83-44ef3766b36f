import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authenticate, authFailure, authSuccess } from '../../Redux/AuthAction';
import '../Style.css';
import { userLogin } from '../../Api/AuthenticationService';
import { Alert, Spinner } from 'react-bootstrap';
import '../../App.css'

const LoginPage = ({ loading, error, ...props }) => {
    const usenavigate = useNavigate();
    const [values, setValues] = useState({
        username: '',
        password: ''
    });

    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.authenticate();

        userLogin(values).then((response) => {

            console.log("response", response);
            if (response.status === 200) {
                props.setUser(response.data);


                usenavigate('/user/Authentication');
            }
            else {
                props.loginFailure('Something Wrong!Please Try Again');
            }


        }).catch((err) => {

            if (err && err.response) {

                switch (err.response.status) {
                    case 401:
                        console.log("401 status");
                        props.loginFailure("Authentication Failed.Bad Credentials");
                        break;
                    default:
                        props.loginFailure('Something Wrong!Please Try Again');

                }

            }





        });
        //console.log("Loading again",loading);


    }

    const handleChange = (e) => {
        e.persist();
        setValues(values => ({
            ...values,
            [e.target.name]: e.target.value
        }));
    };

    console.log("Loading ", loading);

    return (

        <div className='area'>
            <ul class="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <section>
                <div class="container">
                    <div class="user signinBx">
                    <div class="imgBx"><img src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img2.jpg" alt="" /></div>
                        <div class="formBx">


                            <div >
                                <div >

                                    <div >
                                        <div >
                                            <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                                                <li className="nav-item">
                                                    <a className="nav-link " id="profile-tab" data-toggle="tab" href="/admin/login" role="tab"  aria-selected="false">Admin</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="/user/login" role="tab"  aria-controls="home" aria-selected="true">User</a>
                                                </li>
                                            </ul>
                                            <br></br>
                                            <h4 className="gradient">Login</h4>

                                            <form className="my-login-validation" onSubmit={handleSubmit} noValidate={false}>
                                                <div className="gradient">
                                                    <label htmlFor="email">Enter Your Email</label>
                                                    <input id="username" type="text" minLength={5}
                                                        value={values.username} onChange={handleChange} name="username" required />

                                                    <div className="invalid-feedback">
                                                        UserId is invalid
                                                    </div>



                                                </div>

                                                <div className="gradient">
                                                    <label>Enter Your Password

                                                    </label>
                                                    <input id="password" type="password" minLength={8}
                                                        value={values.password} onChange={handleChange} name="password" required />
                                                    <div className="invalid-feedback">
                                                        Password is required
                                                    </div>
                                                </div>




                                                <div className="form-group m-0">
                                                    <button type="submit" className="btn btn-primary">

                                                        Login


                                                    </button>
                                                </div>
                                                <p class="signup">
                                                    Don't have an account ?
                                                    <a href="/user/signup" onclick="toggleForm();">Sign Up.</a>
                                                </p>
                                            </form>
                                            {error &&
                                                <Alert style={{ marginTop: '20px' }} variant="danger">
                                                    {error}
                                                </Alert>

                                            }


                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

const mapStateToProps = ({ auth }) => {
    console.log("state ", auth)
    return {
        loading: auth.loading,
        error: auth.error
    }
}


const mapDispatchToProps = (dispatch) => {

    return {
        authenticate: () => dispatch(authenticate()),
        setUser: (data) => dispatch(authSuccess(data)),
        loginFailure: (message) => dispatch(authFailure(message))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);