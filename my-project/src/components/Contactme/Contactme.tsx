import React, { forwardRef } from "react";
import { bo } from "../Home/Home";

type Props = {};

const Contactme = forwardRef<HTMLDivElement, Props>((props: Props, ref) => {
  return (
    <div ref={ref} className={`${bo} flex flex-col justify-center items-center min-h-screen px-4`}>
      <div className={`${bo} flex flex-col w-full max-w-2xl `}>
        <h2 className={`text-5xl font-extrabold text-white text-center`}>
          LET'S WORK <span className={`block text-purple-600`}>TOGETHER</span>
        </h2>

        <form className={`flex flex-col mt-8 gap-6`}>
          {/* Name & Email */}
          <div className={`flex flex-col gap-4`}>
            <div className={`flex flex-col flex-1`}>
              <label className={`text-purple-400 mb-1 ml-1`}>Name</label>
              <input
                type="text"
                className={`flex p-3 bg-[#211F23]/35 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500`}
                placeholder="Your Name"
              />
            </div>

            <div className={`flex flex-col flex-1`}> 
              <label className={`text-purple-400 mb-1 ml-1`}>Email</label>
              <input
                type="email"
                className={`flex p-3 bg-[#211F23]/35 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500`}
                placeholder="Your@email.com"
              />
            </div>
          </div>

          <div className={`flex flex-col`}>
            <label className={`text-purple-400 mb-1 ml-1`}>Message</label>
            <textarea
              rows={5}
              className={`flex p-3 bg-[#211F23]/35 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500`}
              placeholder="Message"
            ></textarea>
          </div>

          <button className={`flex justify-center items-center w-[full] bg-purple-700 text-white py-3 rounded-lg font-bold text-lg hover:bg-purple-500 transition duration-300`}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
});

export default Contactme;
