import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Send } from "lucide-react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import toast from "react-hot-toast";

import { MailId } from "../Data/Data";
import { db } from "../Firebase/Firebase";

export default function Contact() {
  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  // Submit message
  const handleMessageSubmit = async (e) => {
    e.preventDefault();

    setError("");

    // Validation
    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!message.trim()) {
      setError("Please write your message.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    // Submit to Firebase
    try {
      setSubmitting(true);

      await addDoc(collection(db, "messages"), {
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        status: "pending",
        createdAt: serverTimestamp(),
      });

      // Clear form
      setName("");
      setEmail("");
      setMessage("");

      toast.success("Your message has been sent successfully!");
    } catch (firebaseError) {
      console.error("Error submitting message:", firebaseError);

      toast.error("Unable to send your message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-red-500">
            Get In Touch
          </p>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Let's build something <span className="text-zinc-500">great.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-zinc-400">
            Have a project idea, collaboration opportunity, or just want to say
            hello? Feel free to reach out.
          </p>
        </motion.div>

        {/* Contact Area */}
        <div className="mt-14 grid gap-8 md:grid-cols-5">
          {/* Contact Info */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="md:col-span-2"
          >
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-7">
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
                <Mail size={23} />
              </div>

              {/* Title */}
              <h3 className="mt-6 text-2xl font-semibold">Let's talk</h3>

              {/* Description */}
              <p className="mt-4 text-sm leading-7 text-zinc-500">
                I'm always open to discussing new projects, ideas,
                collaborations, and opportunities.
              </p>

              {/* Email */}
              <div className="mt-6 flex flex-col gap-3">
                {MailId.map((data) => (
                  <a
                    href={`mailto:${data.label}`}
                    key={data.id}
                    className="group inline-flex w-fit items-center gap-2 text-sm text-zinc-300 transition-colors duration-300 hover:text-red-500"
                  >
                    {data.label}

                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleMessageSubmit}
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="space-y-5 rounded-2xl border border-white/10 bg-white/[0.02] p-7 md:col-span-3"
          >
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm text-zinc-400"
              >
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                maxLength={50}
                required
                className="w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-red-500/50"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm text-zinc-400"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                maxLength={100}
                required
                className="w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-red-500/50"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm text-zinc-400"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message..."
                maxLength={500}
                required
                className="w-full resize-none rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-red-500/50"
              />
            </div>

            {/* Error */}
            {error && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400"
              >
                {error}
              </motion.div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={submitting}
              className="group flex items-center gap-2 rounded-full bg-red-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {submitting ? "Sending..." : "Send Message"}

              <Send
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

