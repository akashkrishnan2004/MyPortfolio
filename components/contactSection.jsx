
import React, { useRef } from "react";
import { firestore } from "../src/firebase.js";
import { addDoc, collection } from "@firebase/firestore";
import toast from "react-hot-toast";

import "./css/contactSection.css";

function ContactForm() {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleSave = async (e) => {
    e.preventDefault();

    const ref = collection(firestore, "messages");
    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };

    try {
      await addDoc(ref, data);
      toast.success("Message sent successfully!");
      nameRef.current.value = "";
      emailRef.current.value = "";
      messageRef.current.value = "";
    } catch (error) {
      console.error("Error saving message:", error);
      toast.error("Failed to send the message. Please try again.");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h1 className="contact-title">Contact Me</h1>
        <p className="contact-description">
          Have a question or want to work together? Feel free to send me a
          message!
        </p>
        <form className="contact-form" onSubmit={handleSave}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="form-input"
              ref={nameRef}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="form-input"
              ref={emailRef}
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="form-textarea"
              ref={messageRef}
            ></textarea>
          </div>
          <button type="submit" className="form-submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;