import { Button, Label, Col, FormGroup, } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { validateSubscriptionForm } from "../utils/validateSubscriptionForm";

const SusbcriptionForm = () => {
    const handleSubmit = (values, { resetForm }) => {
        console.log('form values:', values);
        console.log('in JSON format:', JSON.stringify(values));
        resetForm();
    }
    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                subscriptionType: 'Intro to Gaming',
                cardNumber: '',
                cardExpiration: '',
                cardCVC: '',
                address: '',
                city: '',
                state: '',
                zipCode: '',
            }}
            onSubmit={handleSubmit}
            validate={validateSubscriptionForm}
        >
            <Form>
                <FormGroup row>
                    <Label style={{ color: "aliceblue" }} htmlFor="firstName" md='2'>
                        First Name
                    </Label>
                    <Col md='10'>
                        <Field
                            name="firstName"
                            placeholder="First Name"
                            className='form-control' />
                        <ErrorMessage name='firstName'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label style={{ color: "aliceblue" }} htmlFor="lastName" md='2'>
                        Last Name
                    </Label>
                    <Col md='10'>
                        <Field
                            name="lastName"
                            placeholder="Last Name"
                            className='form-control' />
                        <ErrorMessage name='lastName'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label style={{ color: "aliceblue" }} htmlFor="email" md='2'>
                        Email
                    </Label>
                    <Col md='10'>
                        <Field
                            name="email"
                            placeholder="Email"
                            className='form-control' />
                        <ErrorMessage name='email'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label style={{ color: "aliceblue" }} htmlFor="subscriptionType" md='2'>
                        Desired Subscription Tier?
                    </Label>
                    <Col md='4'>
                        <Field
                            name='subscriptionType'
                            as='select'
                            className='form-control'>
                            <option>Intro to Gaming</option>
                            <option>Gaming Enthusiast</option>
                            <option>True Gamer</option>
                        </Field>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label style={{ color: "aliceblue" }} htmlFor="cardNumber" md='2'>
                        Card Number
                    </Label>
                    <Col md='10'>
                        <Field
                            name="cardNumber"
                            placeholder="Card Number"
                            className='form-control' />
                        <ErrorMessage name='cardNumber'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label style={{ color: "aliceblue" }} htmlFor="cardExpiration" md='2'>
                        Expiration Date
                    </Label>
                    <Col md='10'>
                        <Field
                            name="cardExpiration"
                            placeholder="Expiration Date"
                            className='form-control' />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label style={{ color: "aliceblue" }} htmlFor="cardCVC" md='2'>
                        CVC Number
                    </Label>
                    <Col md='10'>
                        <Field
                            name="cardCVC"
                            placeholder="CVC Number"
                            className='form-control' />
                        <ErrorMessage name='cardCVC'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label style={{ color: "aliceblue" }} htmlFor="address" md='2'>
                        Street Address
                    </Label>
                    <Col md='10'>
                        <Field
                            name="address"
                            placeholder="Street Address"
                            className='form-control' />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label style={{ color: "aliceblue" }} htmlFor="city" md='2'>
                        City
                    </Label>
                    <Col md='10'>
                        <Field
                            name="city"
                            placeholder="City"
                            className='form-control' />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label style={{ color: "aliceblue" }} htmlFor="state" md='2'>
                        State
                    </Label>
                    <Col md='10'>
                        <Field
                            name="state"
                            placeholder="State"
                            className='form-control' />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label style={{ color: "aliceblue" }} htmlFor="zipCode" md='2'>
                        Zip Code
                    </Label>
                    <Col md='10'>
                        <Field
                            name="zipCode"
                            placeholder="Zip Code"
                            className='form-control' />
                        <ErrorMessage name='zipCode'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md={{ size: 10, offset: 2 }}>
                        <Button type="submit" outline>
                            Subscribe
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        </Formik>
    )
};

export default SusbcriptionForm;
