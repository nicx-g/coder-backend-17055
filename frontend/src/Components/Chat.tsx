import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { socket } from "../services/socket";

const Chat = () => {
  const validateSchema = yup.object().shape({
    email: yup.string().email("invalid email").required("required"),
    message: yup.string().required("Requerido"),
  });

  const [messages, setMessages] = useState<any>([]);

  useEffect(() => {
    socket.on("messages", (data) => {
      setMessages(data);
    });
  }, []);

  return (
    <>
      <h2 className="h3 text-white">Chat</h2>
      <Formik
        initialValues={{ email: "", message: "" }}
        validationSchema={validateSchema}
        onSubmit={(values, actions) => {
          const { email, message } = values;
          socket.emit("new-message", { email, message });
          actions.setFieldValue("message", "");
        }}
      >
        {({ isValid }) => {
          return (
            <Form className="form">
              <div className="mb-3">
                <label htmlFor="email" className="text-white form-label">
                  Email
                </label>
                <Field
                  required
                  name="email"
                  placeholder="Your email"
                  id="email"
                  className="form-control"
                />
              </div>

              <div
                style={{ height: "300px" }}
                className="bg-light overflow-scroll"
              >
                {messages.map((msg: any) => (
                  <p className="text-black">{`${msg.email}[${msg.date}]: ${msg.message}`}</p>
                ))}
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label text-white">
                  Message
                </label>
                <Field
                  required
                  name="message"
                  className="form-control"
                  placeholder="Your message"
                  id="message"
                />
              </div>
              <button
                className="btn btn-primary"
                type="submit"
                disabled={!isValid}
              >
                Send message
              </button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default Chat;
