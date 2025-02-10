import React, { forwardRef } from "react";
import { bo } from "../Home/Home";
import { z } from "zod";
import { useFormik } from "formik";

type Props = {};
 const Contactme = forwardRef<HTMLDivElement, Props>((props: Props, ref) => {
  
  // Schema Validation using Zod
  const contactMeSchema = z.object({
    name: z.string().min(1, { message: `Name must not be empty` }),
    email: z.string().email({ message: `Invalid Email` }),
    message: z
      .string()
      .min(1, { message: `Message must not be empty` })
      .max(500, { message: `Only up to 500 characters supported` }),
  });

  // Formik instance with validation
  const contactFormik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate: (values) => {
      try {
        contactMeSchema.parse(values);
        return {};
      } catch (e: any) {
        return e.formErrors.fieldErrors;
      }
    }, // Here I am converting zod schema to formik validator, there is alos an oanother way see loginmodal in frontend-me code
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await fetch(`https://hepatitis-then-participants-boundaries.trycloudflare.com/api/getcontactForm`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          alert("Message sent successfully!");
          resetForm(); // Reset the form after successful submission
        } else {
          alert("Error sending message. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong!");
      }
    },
  });

  return (
    <div ref={ref} className={`${bo} flex flex-col justify-center items-center min-h-screen px-4`}>
      <div className={`${bo} flex flex-col w-full max-w-2xl`}>
        <h2 className={`text-5xl font-extrabold text-white text-center`}>
          LET'S WORK <span className={`block text-purple-600`}>TOGETHER</span>
        </h2>
        

        <form onSubmit={contactFormik.handleSubmit} className={`flex flex-col mt-8 gap-6`}>

          <div className={`flex flex-col gap-4`}>
            <div className={`flex flex-col flex-1`}>
              <label className={`text-purple-400 mb-1 ml-1`}>Name</label>
              <input
                type="text"
                name="name"
                value={contactFormik.values.name}
                onChange={contactFormik.handleChange}
                onBlur={contactFormik.handleBlur}
                className={`flex p-3 bg-[#211F23]/35 text-white rounded-lg focus:outline-none focus:ring-1 ${
                  contactFormik.touched.name && contactFormik.errors.name ? "ring-1 ring-red-500" : "focus:ring-purple-500"
                }`}
                placeholder="Your Name"
              />
              {contactFormik.touched.name && contactFormik.errors.name && (
                <p className="text-red-500 text-sm mt-1">{contactFormik.errors.name}</p>
              )}
            </div>

            <div className={`flex flex-col flex-1`}> 
              <label className={`text-purple-400 mb-1 ml-1`}>Email</label>
              <input
                type="email"
                name="email"
                value={contactFormik.values.email}
                onChange={contactFormik.handleChange}
                onBlur={contactFormik.handleBlur}
                className={`flex p-3 bg-[#211F23]/35 text-white rounded-lg focus:outline-none focus:ring-1 ${
                  contactFormik.touched.email && contactFormik.errors.email ? "ring-1 ring-red-500" : "focus:ring-purple-500"
                }`}
                placeholder="Your@email.com"
              />
              {contactFormik.touched.email && contactFormik.errors.email && (
                <p className="text-red-500 text-sm mt-1">{contactFormik.errors.email}</p>
              )}
            </div>
          </div>

          <div className={`flex flex-col`}>
            <label className={`text-purple-400 mb-1 ml-1`}>Message</label>
            <textarea
              name="message"
              value={contactFormik.values.message}
              onChange={contactFormik.handleChange}
              onBlur={contactFormik.handleBlur}
              rows={5}
              className={`flex p-3 bg-[#211F23]/35 text-white rounded-lg focus:outline-none focus:ring-1 ${
                contactFormik.touched.message && contactFormik.errors.message ? "ring-1 ring-red-500" : "focus:ring-purple-500"
              }`}
              placeholder="Message"
            ></textarea>
            {contactFormik.touched.message && contactFormik.errors.message && (
              <p className="text-red-500 text-sm mt-1">{contactFormik.errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className={`flex justify-center items-center w-full bg-purple-700 text-white py-3 rounded-lg font-bold text-lg hover:bg-purple-500 transition duration-300`}
            disabled={contactFormik.isSubmitting}
          >
            {contactFormik.isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
});

export default Contactme;
