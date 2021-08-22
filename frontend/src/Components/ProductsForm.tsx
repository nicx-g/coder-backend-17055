import React from "react";
import { Formik, Field, Form } from "formik";
import { socket } from "../services/socket";

const ProductsForm = () => {
  return (
    <>
      <div className="h3 text-white">Create a product</div>
      <Formik
        initialValues={{
          price: "",
          title: "",
          thumbnail: "",
        }}
        onSubmit={(values) => {
          const { price, title, thumbnail } = values;
          socket.emit("new-product", { price, title, thumbnail });
        }}
      >
        <Form className="form">
          <div className="mb-3">
            <label className="form-label text-white" htmlFor="title">
              Title
            </label>
            <Field id="title" className="form-control" name="title" />
          </div>
          <div className="mb-3">
            <label className="form-label text-white" htmlFor="price">
              Price
            </label>
            <Field id="price" className="form-control" name="price" />
          </div>
          <div className="mb-3">
            <label className="form-label text-white" htmlFor="thumbnail">
              Thumbnail
            </label>
            <Field id="thumbnail" className="form-control" name="thumbnail" />
          </div>
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </Form>
      </Formik>
    </>
  );
};
export default ProductsForm;
