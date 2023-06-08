"use client";

import React, { useState } from "react";
import styles from "./contact.module.css";
import Message from "@/assets/svgs/message";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

interface IFormData {
  name: string;
  title: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  //! useState
  const [formData, setFormData] = useState<IFormData>({
    name: "",
    title: "",
    email: "",
    message: "",
  });

  //!misc
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post("/api", formData);
      setFormData({
        name: "",
        title: "",
        email: "",
        message: "",
      });
      toast.success("Email sent!");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className={styles["contact"]} id="contact">
      <h2>Contact</h2>
      <div className={styles["contact_main"]}>
        <form action="" onSubmit={sendEmail}>
          <fieldset>
            <label htmlFor="">Name:</label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              required
              value={formData?.name}
              onChange={handleChange}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="">Email:</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              required
              value={formData?.email}
              onChange={handleChange}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="">Title:</label>
            <input
              type="text"
              placeholder="Enter the title"
              name="title"
              required
              value={formData?.title}
              onChange={handleChange}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="">Message:</label>
            <textarea
              id=""
              placeholder="Enter your message"
              name="message"
              required
              value={formData?.message}
              onChange={handleChange}
            ></textarea>
          </fieldset>
          <button type="submit" style={{ gridColumn: "1 / -1" }}>
            Send <Message />
          </button>
        </form>
        <aside className={styles["contact_image"]}></aside>
      </div>
      <Toaster position="bottom-center" />
    </section>
  );
};

export default Contact;
