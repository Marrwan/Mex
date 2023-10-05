/* eslint-disable react/no-unescaped-entities */
import contact from "../assets/11.png";
import phone from "../assets/10.png";
import facebook from "../assets/6@2x.png";
import instagram from "../assets/7@2x.png";
import linkedin from "../assets/8@2x.png";
import twitter from "../assets/9@2x.png";
import message from "../assets/5@2x.png";

function Contact() {
  return (
    <div className="">
      <div className="z-auto mt-20 grid lg:grid-cols-2 xs:grid-rows-2 lg:gap-x-[3.5rem] sm:px-20 xs:px-[2.5rem]">
        <div className="">
          <div className="mb-5 ">
            <p className="text-2xl font-semibold leading-relaxed tracking-wider scale-y-125 w-[75%]">
              Let's Talk
            </p>
            <img
              className="absolute -mt-[4.5rem] sm:w-[32rem] xs:w-[23rem] -ml-[3.5rem]"
              src={contact}
              alt="Contact text"
            />
          </div>
          <p className="mt-[4rem] mb-5 text-lg">
            Sed ac rhoncus dui, eget rhoncus est. Etiam faucibus rhoncus dolor
            id ali quam. Integer ornare porttitor arcu id fringilla. Donec
            placerat ipsum elit, et faucibus quam accumsan volutpat.{" "}
          </p>
          <div className="grid grid-rows-2 gap-4">
            <div className="grid grid-cols-2 w-[40%] ">
              <div className="">
                <img
                  className="bg-gradient-to-b p-3 rounded-lg from-[#E9F0FF] to-[#F7ECFF]"
                  src={phone}
                  alt="Email"
                />
              </div>
              <div className="-ml-10">
                <p>Email:</p>
                <p>john.smith@carboncopy.com</p>
              </div>
            </div>
            <div className="grid grid-cols-2 w-[40%]">
              <div>
                <img
                  className="bg-gradient-to-b p-3 rounded-lg w-[3.3rem] from-[#E9F0FF] to-[#F7ECFF]"
                  src={message}
                  alt="Phone"
                />
              </div>
              <div className="-ml-10">
                <p>Phone:</p>
                <p>(012) 345 6789</p>
              </div>
            </div>
          </div>
          <div className="flex justify-around w-[40%] mt-10">
            <img className="w-6 h-6" src={facebook} alt="" />
            <img className="w-6 h-6" src={twitter} alt="" />
            <img className="w-6 h-6" src={instagram} alt="" />
            <img className="w-6 h-6" src={linkedin} alt="" />
          </div>
        </div>
        <div className="bg-gradient-to-b p-10 rounded-[2rem]  from-[#E9F0FF] to-[#F7ECFF] oh">
          <form className="w-full  oh grid grid-rows-5 place-content-center ">
            <div className="flex items-center  py-2">
              <input
                className="mr-[2rem] appearance-none bg-transparent border-b-[1px] border-black w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="First name"
                aria-label="First name"
              />
              <input
                className="mr-[2rem] appearance-none bg-transparent border-b-[1px] border-black w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Last name"
                aria-label="Last name"
              />
            </div>{" "}
            <input
              className="mr-[2rem] appearance-none bg-transparent border-b-[1px] border-black w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="email"
              placeholder="Email"
              aria-label="Email"
            />
            <input
              className="mr-[2rem] appearance-none bg-transparent border-b-[1px] border-black w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="tel"
              placeholder="Phone"
              aria-label="Phone"
            />
           
            <textarea
              aria-label="Message"
              placeholder="Message"
              className="w-full px-3 py-2 text-black border-b-[1px] border-black  focus:outline-none bg-transparent"
              rows="4"
            ></textarea>
            <button
              className="flex-shrink-0 bg-[#6E49FD] hover:bg-[#6E49FD]-700 rounded-lg text-sm border-4 text-white w-max px-5 h-[3rem] mt-9  "
              type="button"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
