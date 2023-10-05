/* eslint-disable react/no-unescaped-entities */
import contact from "../assets/11.png";
import Join_image from "../assets/2.png";
import phone from "../assets/10.png";
import facebook from "../assets/6@2X.png";
import instagram from "../assets/7@2x.png";
import linkedin from "../assets/8@2x.png";
import twitter from "../assets/9@2x.png";
import message from "../assets/5@2x.png";
import line2 from "../assets/@2x.png";
import join2 from "../assets/joinpic.png";
function Contact() {
  return (
    // <div className="xs:mt-[35rem] min-[380px]:-mt-[30rem] min-[450px]:-mt-[10rem] sm:mt-5">
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
        <div className="">
          <img className="z-50 w-full" src={Join_image} alt="Happy image" />
          <img
            src={join2}
            alt="Happy Image"
            className="absolute z-50 w-[32rem] ml-[2.3rem] -mt-[29rem] xs:hidden lg:block"
          />
        </div>
      </div>
      <img
        src={line2}
        alt="Line"
        className=" xs:hidden lg:block absolute -mt-[38rem] "
      />{" "}
    </div>
  );
}

export default Contact;
