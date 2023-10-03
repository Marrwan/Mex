/* eslint-disable react/no-unescaped-entities */
import worktext from "../assets/worktext.png";
import Works from "../assets/works.png";
function Work() {
  return (
    <div className="xs:-mt-[35rem] min-[380px]:-mt-[30rem] min-[450px]:-mt-[10rem] sm:mt-5">
      <p className="text-3xl font-semibold tracking-widest text-center lg:-mt-[25rem] mb-[5rem]"> How it Works?
     <img
              className="absolute -mt-[4.5rem] lg:w-[52rem] xs:w-[23rem] ml-[20.5rem]"
              src={worktext}
              alt="Work text"
            />  </p>
      
      
          <img
            className="w-full lg:block xs:hidden"
            src={Works}
            alt="image of two persons looking at each other and surprised"
          />
    </div>
  );
}

export default Work;
