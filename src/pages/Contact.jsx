import React from "react";
import { Form } from "react-router-dom";

const Contact = () => {
  return (
    <div className="container mt-5 text-dark">
      <h2 className="text-center mb-4">Contact Us</h2>
      <Form className="row g-3" method="POST" action="">
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="col-12">
          <label htmlFor="subject" className="form-label">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            className="form-control"
            id="subject"
            placeholder="Subject of your message"
            required
          />
        </div>

        <div className="col-12">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            name="message"
            className="form-control"
            id="message"
            rows="5"
            placeholder="Write your message here..."
            required
          ></textarea>
        </div>

        <div className="col-12 text-center">
          <button type="submit" className="btn btn-info px-4">
            Send Message
          </button>
        </div>
      </Form>
    </div>
  );
};

export default Contact;

// eslint-disable-next-line react-refresh/only-export-components
export const contactData = async ({ request }) => {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    //  {
    //   name: formData.get("name"),
    //   email: formData.get("email"),
    //   subject: formData.get("subject"),
    //   message: formData.get("message"),
    // };

    console.log("Received contact form data:", data);
  } catch (error) {
    console.error("Error handling form:", error);
  }

  // Optional: Return a redirect or confirmation later
  return null;
};
