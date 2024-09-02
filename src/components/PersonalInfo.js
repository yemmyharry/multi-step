import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const PersonalInfo = ({ next, data }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
  });

  return (
    <div>
      <div className="stepper">
        <div className="step active">1</div>
        <div className="step">2</div>
        <div className="step">3</div>
        <div className="step">4</div>
      </div>
      <h1>Personal Info</h1>
      <p>Please provide your name, email address, and phone number.</p>
      <Formik
        initialValues={data}
        validationSchema={validationSchema}
        onSubmit={values => next(values)}
      >
        {() => (
          <Form>
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" />
            <ErrorMessage component="div" name="name" className="error" />

            <label htmlFor="email">Email Address</label>
            <Field name="email" type="email" />
            <ErrorMessage component="div" name="email" className="error" />

            <label htmlFor="phone">Phone Number</label>
            <Field name="phone" type="text" />
            <ErrorMessage component="div" name="phone" className="error" />

            <button type="submit">Next Step</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PersonalInfo;
