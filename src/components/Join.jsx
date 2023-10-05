/* eslint-disable react/no-unescaped-entities */
import join from "../assets/15.png";
import Join_image from "../assets/2.png";
import line2 from "../assets/@2x.png";
import join2 from "../assets/joinpic.png";
function Join() {
  return (
    // <div className="xs:mt-[35rem] min-[380px]:-mt-[30rem] min-[450px]:-mt-[10rem] sm:mt-5">
    <div className="">
      <div className="z-auto mt-20 grid lg:grid-cols-2 xs:grid-rows-2 lg:gap-x-[3.5rem] sm:px-20 xs:px-[2.5rem]">
        <div className="order-2">
          <div className="mb-5 ">
            <p className="text-2xl font-semibold leading-relaxed tracking-wider scale-y-125 w-[75%]">
              Join Us in Reshaping Influencer Engagement
            </p>
            <img
              className="absolute -mt-[4.5rem] sm:w-[30rem] xs:w-[20rem] -ml-[3.5rem]"
              src={join}
              alt="Join text"
            />
          </div>
          <p className="mb-5 text-lg">
            We invite you to join us on our mission to revolutionize influencer
            engagement. Experience the power of MEX firsthand by scheduling a
            demo with our team. Witness how our platform can empower influencers
            and unlock new levels of audience engagement. Together, we can
            reshape the future of influencer marketing and drive substantial
            returns. Let's connect and explore the exciting investment
            opportunities that await us. Contact us today to schedule a meeting
            and embark on this transformative journey together.
          </p>
          <button className=" lg:ml-0 bg-[#6D49FD] text-white rounded-md p-2 mt-5 px-5">
            {" "}
            Contact Us{" "}
          </button>
        </div>
        <div className="">
          <img className="z-50 w-full" src={Join_image} alt="Happy image" />
          <img
            src={join2}
            alt="Happy Image"
            className="absolute z-50 min-[1500px]:-mt-[33.6rem] min-[1500px]:w-[625px] min-[1400px]:w-[32rem] ml-[2.3rem] -mt-[29rem] xs:hidden lg:block"
          />
        </div>
      </div>
      <img
        src={line2}
        alt="Line"
        className="min-[1500px]:-mt-[44rem] xs:hidden lg:block absolute -mt-[38rem] "
      />{" "}
    </div>
  );
}

export default Join;
