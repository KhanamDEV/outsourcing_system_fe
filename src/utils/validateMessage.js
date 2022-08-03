import { setLocale } from 'yup';

setLocale({
    mixed: {
        required: 'This field is required',
    },
    string: {
        email: 'This filed must be a valid email address'
    },
    number: {
        min: 'Deve ser maior que ${min}',
    },
});

