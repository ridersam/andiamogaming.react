export const validateSubscriptionForm = (values) => {
    const errors = {};

    if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length < 2) {
        errors.firstName = 'Must be at least 2 characters';
    } else if (values.firstName.length > 15) {
        errors.firstName = "Must be 15 characters or less.";
    }

    if (!values.lastName) {
        errors.lastName = 'Required';
    } else if (values.lastName.length < 2) {
        errors.lastName = 'Must be at least 2 characters';
    } else if (values.lastName.length > 15) {
        errors.lastName = "Must be 15 characters or less.";
    }

    if (!values.email.includes('@')) {
        errors.email = 'Email should contain a @';
    }

    const reg =/^\d+$/;

    if (!reg.test(values.cardNumber)) {
        errors.cardNumber = "The card number should contain only numbers.";
    } else if (values.cardNumber.length < 16) {
        errors.cardNumber = 'Must be 16 digits';
    } else if (values.cardNumber.length > 16) {
        errors.cardNumber = 'Must be 16 digits';
    }

    if (!reg.test(values.cardCVC)) {
        errors.cardCVC = "The card number should contain only numbers.";
    } else if (values.cardCVC.length < 3) {
        errors.cardNumber = 'Must be 16 digits';
    } else if (values.cardCVC.length > 3) {
        errors.cardNumber = 'Must be 16 digits';
    }

    if (!reg.test(values.zipCode)) {
        errors.zipCode = 'The Zip Code should contain only numbers.';
    }

    return errors;
}