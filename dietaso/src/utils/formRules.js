export const Rules = {
    basic: {
        required: true,
        message: 'This field is required',
    },
    minOne: {
        required: true,
        pattern: /^[1-9]\d*$/,
        message: 'Enter a valid number',
    },
    minZero: {
        required: true,
        pattern: /^[0-9]\d*$/,
        message: 'Enter a valid number',
    },
    validEmail: {
        type: 'email',
        message: 'Please enter a valid email address',
    },
    passwordsMatch: ({ getFieldValue }) => ({
        validator(_, value) {
            if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
            }
            return Promise.reject(
                new Error('The two passwords that you entered do not match!')
            );
        },
    }),
};
