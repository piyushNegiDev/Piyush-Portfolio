import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import AnimatedButton from "./AnimatedButton";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { motion } from "motion/react";

const formValidation = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
  message: Yup.string().required("Message is required"),
});

const ContactForm = ({ variants }) => {
  const handleSubmit = async ({ name, email, message }) => {
    const data = {
      service_id: import.meta.env.VITE_SERVICE_ID,
      template_id: import.meta.env.VITE_TEMPLATE_ID,
      user_id: import.meta.env.VITE_PUBLIC_KEY,
      template_params: {
        email,
        name,
        message,
        to_name: "Piyush Negi",
      },
    };

    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data,
      );
      toast.success("Message Sent !");
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
      console.log(error.response?.data);
    }
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
          resetForm();
        }}
        validationSchema={formValidation}
      >
        <Form className="flex flex-col gap-6">
          <motion.div variants={variants} className="flex flex-col relative">
            <label htmlFor="name">Name</label>
            <Field
              type="text"
              className="border p-2 rounded-lg focus:outline-none"
              name="name"
              placeholder="Enter your name"
            />
            <div className="text-xs text-red-500 absolute -bottom-4">
              <ErrorMessage name="name" />
            </div>
          </motion.div>

          <motion.div variants={variants} className="flex flex-col relative">
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              className="border p-2 rounded-lg focus:outline-none"
              name="email"
              placeholder="Enter your email"
            />
            <div className="text-xs text-red-500 absolute -bottom-4">
              <ErrorMessage name="email" />
            </div>
          </motion.div>

          <motion.div variants={variants} className="flex flex-col relative">
            <label htmlFor="message">Message</label>
            <Field
              as="textarea"
              name="message"
              className="border p-2 rounded-lg focus:outline-none"
              placeholder="Type your message"
              rows={5}
            />
            <div className="text-xs text-red-500 absolute -bottom-4">
              <ErrorMessage name="message" />
            </div>
          </motion.div>
          <AnimatedButton
            variants={variants}
            type="submit"
            className="mr-auto mt-5 border-2 hover:text-primary hover:border-white transition-color border-primary px-4 rounded-lg py-2"
          >
            Submit
          </AnimatedButton>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
