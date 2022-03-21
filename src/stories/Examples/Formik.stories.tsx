import * as React from "react";
import { Formik } from "formik";
import {Button, Email, Password} from "../../components";

export default {
    title: 'Examples/Formik',
    component: Formik
};

export const LoginForm = () => {
    return <Formik
        initialValues={{
            email: '',
            password: ''
        }}
        validate={values => {
            const errors = {
                email: '',
                password: ''
            };

            if (!values.email) {
                errors.email = 'Please enter an email address.';
            }

            if (!values.password) {
                errors.password = 'Please enter a password.';
            }

            return errors;
        }}
        onSubmit={() => {
            event.preventDefault();
            alert('form submitted')
        }}
    >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            isSubmitting
          }) => (<form onSubmit={handleSubmit}>
            <Email
                error={errors.email}
                id={'email'}
                label={'Email'}
                name={'email'}
                onChange={handleChange}
                value={values.email}
            />

            <Password
                error={errors.password}
                id={'password'}
                label={'Password'}
                name={'password'}
                onChange={handleChange}
                value={values.password}
            />

            <Button isSubmitting={isSubmitting}>
                Login
            </Button>
        </form>)}
    </Formik>
}