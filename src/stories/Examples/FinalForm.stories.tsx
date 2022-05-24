import * as React from "react";
import { Form, Field } from "formik";
import * as yup from 'yup';
import {Button, Checkbox, Email, Input, Password} from "../../components";

export default {
    title: 'Examples/FinalForm',
    component: Form
};

export const FinalLoginForm = () => {
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

    return <Form
        onSubmit={() => alert('form submitted')}
        onReset={() => alert('form reset')}
    >
        {({
            // @ts-ignore
            handleSubmit,
            // @ts-ignore
            handleReset,
            // @ts-ignore
            input
        }) => (
            <form onSubmit={handleSubmit} onReset={handleReset}>
                <Input
                    // error={errors.name}
                    id={'name'}
                    label={'Name'}
                    name={'name'}
                    onChange={input.onChange}
                    value={input.value}
                />

                <Email
                    // error={errors.email}
                    id={'email'}
                    label={'Email'}
                    name={'email'}
                    onChange={input.onChange}
                    value={input.value}
                />

                <Password
                    // error={errors.password}
                    id={'password'}
                    label={'Password'}
                    name={'password'}
                    onChange={input.onChange}
                    passwordToggleIcon={null}
                    value={input.value}
                />

                <Checkbox
                    // error={errors.accepted}
                    id={'accepts'}
                    label={'I have read and agree to the terms of service.'}
                    name={'accepted'}
                    onChange={input.onChange}
                    value={input.value}
                />

                <Button>
                    Login
                </Button>
            </form>
        )}
    </Form>;
};

// export const FinalRegistrationForm = () => {
//     const validation = yup.object().shape({
//         name: yup
//             .string()
//             .min(2, 'Please enter a name that is at least 2 characters long.')
//             .max(254, 'Please enter a name that is at most 254 characters long.')
//             .required('Please enter a name.'),
//         email: yup
//             .string()
//             .email('Please enter a valid email address.')
//             .required('Please enter an email address.'),
//         password: yup
//             .string()
//             .min(8, 'Please enter a password that is at least 8 characters.')
//             .required('Please enter a password.'),
//         accepted: yup
//             .boolean()
//             .required('Please accept the terms of service to create an account.'),
//     });
// };
