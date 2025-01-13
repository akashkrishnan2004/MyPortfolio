// Main code
import React, { useRef } from "react";
import { firestore } from "../src/firebase.js";
import { addDoc, collection } from "@firebase/firestore";

import "./css/contactSection.css";

function ContactSection() {
  const messageRef = useRef();
  const ref = collection(firestore, "messages");

  const handleSave = async (e) => {
    e.preventDefault();
    console.log(messageRef.current.value);

    let data = {
      message: messageRef.current.value,
    };

    try {
      addDoc(ref, data);
    } catch (e) {
      console.log(e);
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
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="form-textarea"
            ></textarea>
          </div>
          <button type="submit" className="form-submit">
            Send Message
          </button>
        </form>
        <div className="social-icons">
          <a
            href="https://facebook.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="www.linkedin.com/in/akash-krishnan2004"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/akashkrishnan2004"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <i className="fab fa-github"></i>
          </a>

          <a
            href="https://www.instagram.com/ak_a_sh_krishnan/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
//
//

// import React, { useState } from "react";
// import { firestore } from "../src/firebase.js"; // Ensure the path is correct
// import { addDoc, collection } from "@firebase/firestore";

// import "./css/contactSection.css";

// function ContactSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [status, setStatus] = useState(""); // For success or error messages

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSave = async (e) => {
//     e.preventDefault();
//     try {
//       // Reference to the "messages" collection
//       const ref = collection(firestore, "messages");

//       // Save the form data
//       await addDoc(ref, formData);

//       // Success message and reset form
//       setStatus("Message sent successfully!");
//       setFormData({ name: "", email: "", message: "" });
//     } catch (error) {
//       console.error("Error saving message:", error);
//       setStatus("Failed to send the message. Please try again.");
//     }
//   };

//   return (
//     <section className="contact-section" id="contact">
//       <div className="contact-container">
//         <h1 className="contact-title">Contact Me</h1>
//         <p className="contact-description">
//           Have a question or want to work together? Feel free to send me a
//           message!
//         </p>
//         <form className="contact-form" onSubmit={handleSave}>
//           <div className="form-group">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               required
//               className="form-input"
//               value={formData.name}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               required
//               className="form-input"
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <textarea
//               name="message"
//               rows="5"
//               placeholder="Your Message"
//               required
//               className="form-textarea"
//               value={formData.message}
//               onChange={handleChange}
//             ></textarea>
//           </div>
//           <button type="submit" className="form-submit">
//             Send Message
//           </button>
//         </form>
//         {status && <p className="status-message">{status}</p>}
//         <div className="social-icons">
//           <a
//             href="https://facebook.com/your-profile"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="social-link"
//           >
//             <i className="fab fa-facebook"></i>
//           </a>
//           <a
//             href="https://www.linkedin.com/in/akash-krishnan2004"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="social-link"
//           >
//             <i className="fab fa-linkedin"></i>
//           </a>
//           <a
//             href="https://github.com/akashkrishnan2004"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="social-link"
//           >
//             <i className="fab fa-github"></i>
//           </a>
//           <a
//             href="https://www.instagram.com/ak_a_sh_krishnan/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="social-link"
//           >
//             <i className="fab fa-instagram"></i>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ContactSection;


// import React, { useState } from "react";
// import { firestore } from "../src/firebase.js"; // Ensure the path to firebase.js is correct
// import { addDoc, collection } from "@firebase/firestore";

// import "./css/contactSection.css";

// function ContactSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [status, setStatus] = useState(""); // For displaying success or error messages

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSave = async (e) => {
//     e.preventDefault();

//     try {
//       // Reference to Firestore "messages" collection
//       const ref = collection(firestore, "messages");

//       // Add form data to Firestore
//       await addDoc(ref, formData);

//       // Display success message and reset the form
//       setStatus("Message sent successfully!");
//       setFormData({ name: "", email: "", message: "" });
//     } catch (error) {
//       console.error("Error saving document:", error.message);
//       setStatus("Failed to send the message. Please try again.");
//     }
//   };

//   return (
//     <section className="contact-section" id="contact">
//       <div className="contact-container">
//         <h1 className="contact-title">Contact Me</h1>
//         <p className="contact-description">
//           Have a question or want to work together? Feel free to send me a
//           message!
//         </p>
//         <form className="contact-form" onSubmit={handleSave}>
//           <div className="form-group">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               required
//               className="form-input"
//               value={formData.name}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               required
//               className="form-input"
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <textarea
//               name="message"
//               rows="5"
//               placeholder="Your Message"
//               required
//               className="form-textarea"
//               value={formData.message}
//               onChange={handleChange}
//             ></textarea>
//           </div>
//           <button type="submit" className="form-submit">
//             Send Message
//           </button>
//         </form>
//         {status && <p className="status-message">{status}</p>}
//         <div className="social-icons">
//           <a
//             href="https://facebook.com/your-profile"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="social-link"
//           >
//             <i className="fab fa-facebook"></i>
//           </a>
//           <a
//             href="https://www.linkedin.com/in/akash-krishnan2004"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="social-link"
//           >
//             <i className="fab fa-linkedin"></i>
//           </a>
//           <a
//             href="https://github.com/akashkrishnan2004"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="social-link"
//           >
//             <i className="fab fa-github"></i>
//           </a>
//           <a
//             href="https://www.instagram.com/ak_a_sh_krishnan/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="social-link"
//           >
//             <i className="fab fa-instagram"></i>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ContactSection;
