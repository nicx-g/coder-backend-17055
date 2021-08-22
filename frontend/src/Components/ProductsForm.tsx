import React from "react";
import { Formik, Field, Form } from "formik";

const ProductsForm = () => {
  return (
    <div className="contai">
      <div className="h1">Creación de productos</div>
      <Formik
        initialValues={{
          price: "",
          title: "",
          thumbnail: "",
        }}
        onSubmit={(values) => {
          const { price, title, thumbnail } = values;
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
    </div>
  );
};
export default ProductsForm;
