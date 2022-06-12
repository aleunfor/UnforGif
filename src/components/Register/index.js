import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useState } from "react"
import register from 'services/register'
import { Formik, Form, Field, ErrorMessage } from 'formik';

const validateFields = values => {
    const errors = {};

    if (!values.name) {
        errors.name = "Required name";
    }

    if (!values.email) {
        errors.email = "Required email";
    }

    if (!values.password) {
        errors.password = "Required password";
    } else if (values.password.length < 3) {
        errors.password = "Length must be greater than 3";
    }

    return errors;
}

const initialValues = {
    name: "",
    email: "",
    password: "",
}

export default function Register() {
    const [registered, setRegistered] = useState(false)

    if (registered) {
        return <h4 className='position-absolute top-50 start-50 translate-middle text-center'>
            Congratulations ✅! You've been successfully registered!<p></p>
            <span className='h6 text-center'><a href="/">Go to Home</a></span>
        </h4>
    }

    return (
        <>
            <Formik
                initialValues={initialValues}
                validate={validateFields}
                onSubmit={(values, { setFieldError }) => {
                    return register(values)
                        .then(() => {
                            setRegistered(true)
                        })
                        .catch(() => {
                            setFieldError("email", "This username is not valid");
                        });
                }}
            >
                {({ errors, isSubmitting }) => (
                    <div className='row col col-md-6 mx-auto card-login'>
                        <h1><FontAwesomeIcon icon={solid('user-pen')}/>&nbsp; Register</h1>
                        <Form>
                            <label for="name" class="form-label text-light mt-3">Full name</label>
                            <Field
                                id="name"
                                className='form-control'
                                name="name"
                                placeholder="Put here the name"
                            />
                            <ErrorMessage className='alert alert-danger' name='name' component='div' />

                            <label for="email" class="form-label text-light mt-4">Email address</label>
                            <Field
                                id="email"
                                className='form-control'
                                name="email"
                                placeholder="Put here the email"
                            />
                            <ErrorMessage className='alert alert-danger' name='email' component='div' />

                            <label for="password" class="form-label text-light mt-4">Password</label>
                            <Field
                                className='form-control'
                                name="password"
                                placeholder="Put here the password"
                                type='password'
                            />
                            <ErrorMessage className='alert alert-danger' name='password' component='div' />

                            <button className="btn btn-primary mt-4" disabled={isSubmitting}>
                                Register
                            </button>
                        </Form>
                    </div>
                )}
            </Formik>
        </>
    )
}