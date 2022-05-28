import * as React from "react";
import { Formik } from "formik";
import * as yup from 'yup';
import {Button, Checkbox, Email, Input, Password} from "../../components";

export default {
    title: 'Examples/Formik',
    component: Formik
};

export const FormikLoginForm = () => {
    const validation = yup.object().shape({
        email: yup
            .string()
            .email('Please enter a valid email address.')
            .required('Please enter an email address.'),
        password: yup
            .string()
            .min(8, 'Please enter a password that is at least 8 characters.')
            .required('Please enter a password.'),
    });

    return <Formik
        initialValues={{
            email: '',
            password: ''
        }}
        validationSchema={validation}
        onSubmit={() => {
            event.preventDefault();
            alert('form submitted')
        }}
    >
        {({
            values,
            errors,
            handleChange,
            handleSubmit,
            isSubmitting
          }) => (<form onSubmit={handleSubmit}>
            <Email
                error={errors.email}
                hint={'Email'}
                id={'email'}
                label={'Email'}
                name={'email'}
                onChange={handleChange}
                value={values.email}
            />

            <Password
                error={errors.password}
                hint={'Password'}
                id={'password'}
                label={'Password'}
                name={'password'}
                onChange={handleChange}
                passwordToggleIcon={null}
                value={values.password}
            />

            <Button isSubmitting={isSubmitting}>
                Login
            </Button>
        </form>)}
    </Formik>
}

export const FormikRegistrationForm = () => {
    const validation = yup.object().shape({
        name: yup
            .string()
            .min(2, 'Please enter a name that is at least 2 characters long.')
            .max(254, 'Please enter a name that is at most 254 characters long.')
            .required('Please enter a name.'),
        email: yup
            .string()
            .email('Please enter a valid email address.')
            .required('Please enter an email address.'),
        password: yup
            .string()
            .min(8, 'Please enter a password that is at least 8 characters.')
            .required('Please enter a password.'),
        accepted: yup
            .boolean()
            .required('Please accept the terms of service to create an account.'),
    });

    return <Formik
        initialValues={{
            name: '',
            email: '',
            password: '',
            accepted: false,
        }}
        validationSchema={validation}
        onSubmit={() => {
            event.preventDefault();
            alert('form submitted');
        }}
    >
        {({
              values,
              errors,
              handleChange,
              handleSubmit,
              isSubmitting
        }) => (
            <form onSubmit={handleSubmit}>
                <Input
                    error={errors.name}
                    hint={'Name'}
                    id={'name'}
                    label={'Name'}
                    name={'name'}
                    onChange={handleChange}
                    value={values.name}
                />

                <Email
                    error={errors.email}
                    hint={'Email'}
                    id={'email'}
                    label={'Email'}
                    name={'email'}
                    onChange={handleChange}
                    value={values.email}
                />

                <Password
                    error={errors.password}
                    hint={'Password'}
                    id={'password'}
                    label={'Password'}
                    name={'password'}
                    onChange={handleChange}
                    passwordToggleIcon={null}
                    value={values.password}
                />

                <Checkbox
                    id={'accepts'}
                    label={'I have read and agree to the terms of service.'}
                    name={'accepts'}
                    onChange={handleChange}
                    value={String(values.accepted)}
                />

                <Button isSubmitting={isSubmitting}>
                    Login
                </Button>
            </form>
        )}
    </Formik>
};
