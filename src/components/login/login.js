import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import FormikMatrialTextBox from './../formikMatrialTextBox/formikMatrialTextBox';
import FormikMatrialSelect from "../formikMatrialSelect/formikMatrialSelect"
import "./login.css"

const initialValues = {
    Name: '',
    Email:'',
    gender:'',
    Password:''
}

const SignupSchema = Yup.object().shape({
    Name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    Email: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    gender: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    Password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required')
});

const genderItems= [
    {
        key:"male",
        value:"male"
    },
    {
        key:"female",
        value:"female"
    },
    {
        key:"others",
        value:"others"
    }
]

const Login = () => {
    const handleSubmit = (values) => {
        console.log(("HandleSumbit clicked", values));

    }

    return (
        <div className="login-form">
            <h1>Login</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={SignupSchema}
            >
                {({ dirty, isValid }) => {
                    return (
                        <Form>
                            <div>
                                {/* <label>Name</label>
                                <Field
                                    type="input"
                                    name="name"
                                    placeholder="name"
                                    autoComplete="off" />
                                <ErrorMessage name="name" /> */}
                                <FormikMatrialTextBox name="Name" label="Name"/>
                                <FormikMatrialTextBox name="Email" label="Email"/>
                                <FormikMatrialTextBox name="Password" label="Password" type="password"/>


                            </div>
                            <div>
                                {/* <label>Position</label>
                                <Field
                                    as="select"
                                    name="position"
                                    placeholder="choose your position" >
                                    <option value=""></option>
                                    <option value="one">one</option>
                                    <option value="two">two</option>
                                    <option value="Three">Three</option>
                                </Field>
                                <ErrorMessage name="position" /> */}

                            <FormikMatrialSelect name="gender" items={genderItems} label="Gender"/>

                            </div>
                            {/* <button disabled={!dirty || !isValid} type="submit">Submit</button> */}
                            <Button  disabled={!dirty || !isValid}  variant="contained" color="primary" type="submit">
                                Primary
                            </Button>
                        </Form>
                    )
                }

                }
            </Formik >
        </div >
    )
}

export default Login