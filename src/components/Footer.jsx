/* eslint-disable react/no-unescaped-entities */
import facebook from "../assets/6@2X.png";
import instagram from "../assets/7@2x.png";
import linkedin from "../assets/8@2x.png";
import twitter from "../assets/9@2x.png";
import Mex from "../assets/Mex.svg";

function Footer() {
  return (
    <div className="lg:py-3 lg:px-5 place-items-center w-full max-w-screen border-t-[1px] border-gray-500 mt-10 xs:grid grid-rows-3  xs:py-10 lg:flex xs:justify-center lg:justify-between items-center">
      <div className="xs:order-last mb-0 lg:order-first flex-row text-sm">
        <p>&copy; MEX. All Rights Reserved </p>
        <p className="flex ">
          <p className="mr-3">Terms & Conditions</p>
          <p>Privacy Policy</p>
        </p>
      </div>
      <div className="xs:mb-5 lg:mb-0 flex-row justify-center items-center">
        <img className="w-10 lg:h-7 xs:h-[3rem] " src={Mex} alt="Mex Logo" />

        <p className="font-medium text-sm">MEX.AI</p>
      </div>
      <div className="xs:mb-5 lg:mb-0 flex justify-around">
        <img className="bg-gradient-to-b p-3 mr-3 rounded-lg w-[2.3rem] from-[#E9F0FF] to-[#F7ECFF] h-10" src={facebook} alt="Facebook" />
        <img className="bg-gradient-to-b p-3 mr-3 rounded-lg w-[2.3rem] from-[#E9F0FF] to-[#F7ECFF] h-10" src={twitter} alt="Twitter" />
        <img className="bg-gradient-to-b p-3 mr-3 rounded-lg w-[2.3rem] from-[#E9F0FF] to-[#F7ECFF] h-10" src={instagram} alt="Instagram" />
        <img className="bg-gradient-to-b p-3 mr-3 rounded-lg w-[2.3rem] from-[#E9F0FF] to-[#F7ECFF] h-10" src={linkedin} alt="Linkedin" />
      </div>
    </div>
  );
}

export default Footer;
