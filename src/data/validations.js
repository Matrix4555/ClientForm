import { required, numeric, minLength, maxLength } from 'vuelidate/lib/validators';

// alpha validator passes only latin letters, we need custom one
const containsOnlyLetters = value => !!value.match(/^[а-яА-ЯёЁa-zA-Z]*$/);

// numeric validator doesn't pass a plus symbol, we need custom one
const startsWithPlusAndContainsOnlyDigits = value => value.startsWith('+') && !(value.slice(1).match(/\D/));

export const validationsForForm = {
    surname: { required, containsOnlyLetters },
    name: { required, containsOnlyLetters },
    patronymic: { containsOnlyLetters },
    birthday: { required },
    phone: {
        required,
        startsWithPlusAndContainsOnlyDigits,
        // 11 digits and a plus symbol
        minLength: minLength(12),
        maxLength: maxLength(12)
    },

    index: { numeric },
    country: { containsOnlyLetters },
    region: { containsOnlyLetters },
    city: { required, containsOnlyLetters },
    street: {},
    building: {},

    series: { numeric },
    number: { numeric },
    issuedby: {},
    issuedate: { required },

    gender: {},
    group: { required },
    doctor: {},
    dtype: { required }
};
