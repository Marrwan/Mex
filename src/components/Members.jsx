import { useState } from "react";
import Swipe from "react-easy-swipe";
import members from "../assets/members.png";
import John from "../assets/12.png";
import Marylin from "../assets/13.png";
import Eliso from "../assets/14.png";

function Members() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const CarouselData = [
    {
      image: John,
      name: "John Smith",
      position: "CO-FOUNDER",
    },
    {
      image: Marylin,
      name: "Marylin Wilcox",
      position: "CFO",
    },
    {
      image: Eliso,
      name: "Eliso Tyson",
      position: "CHO",
    },
  ];
  const nextSlide = () => {
    let newSlide =
      currentSlide === CarouselData.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const prevSlide = () => {
    let newSlide =
      currentSlide === 0 ? CarouselData.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  return (
    <div className="mt-20 sm:px-10 xs:px-[2.5rem] h-min ">
      <div className="mt-5 mb-3 text-center px-auto py-auto">
        <p className="text-2xl font-semibold leading-relaxed tracking-wider scale-y-125 ">
          How to get Started?
        </p>

        <img
          className="absolute -mt-[5rem] sm:ml-[10rem] xs:ml-[0rem] min-[500px]:ml-[5rem] xs:w-[19rem] lg:ml-[29rem] sm:w-[25rem] "
          src={members}
          alt="Members"
        />
      </div>
      <Swipe className="flex justify-around w-full mx-auto sm:items-center xs:items-baseline lg:hidden">
        <div
          onClick={prevSlide}
          className="text-white cursor-pointer  bg-[#6D49FD]  px-[5px] w-max h-max "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-max h-[24px] ml-0 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>

          {/* <FaArrowLeft /> */}
        </div>
        {CarouselData.map((slide, index) => {
          return (
            <div
              className={index === currentSlide ? "block mb-10" : "hidden"}
              key={slide.name}
            >
              <img
                src={slide.image}
                alt={slide.name}
                className="w-[13rem] p-4 mb-3 bg-white rounded-2xl"
              />

              <p className="font-medium leading-loose text-center text-md">
                {" "}
                {slide.name}
              </p>
              <p className="mb-2 text-sm text-center">{slide.position}</p>
              <p className="mb-2 text-sm w-[15rem]">
                Donec imperdiet leo ac quam pellentesque, sit amet fermentum
                lorem gravida. Donec sed nec nunc cursus, varius eros at,
                vehicula erat.
              </p>

              {""}
            </div>
          );
        })}
        <div
          onClick={nextSlide}
          className="text-white cursor-pointer  bg-[#6D49FD]  px-[5px] w-max h-max "
        >
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-max h-[24px] mr-0 "
            >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>

          {/* <FaArrowLeft /> */}
        </div>
      </Swipe>

      <div className="justify-around hidden overflow-hidden lg:flex ">
        <div className="mb-10">
          <img
            src={John}
            alt="John Smith"
            className="w-[13rem] p-4 mb-3 bg-white rounded-2xl"
          />

          <p className="font-medium leading-loose text-center text-md">
            {" "}
            John Smith
          </p>
          <p className="mb-2 text-sm text-center">CO-FOUNDER</p>
          <p className="mb-2 text-sm w-[15rem]">
            Donec imperdiet leo ac quam pellentesque, sit amet fermentum lorem
            gravida. Donec sed nec nunc cursus, varius eros at, vehicula erat.
          </p>
        </div>
        <div className="mb-10">
          <img
            src={Marylin}
            alt="Marylin Wilcox"
            className="w-[13rem] p-4 mb-3 bg-white rounded-2xl"
          />

          <p className="font-medium text-center text-md"> Marylin Wilcox</p>
          <p className="mb-2 font-medium text-center">CFO </p>
          <p className="mb-2 text-sm w-[15rem]">
            Donec imperdiet leo ac quam pellentesque, sit amet fermentum lorem
            gravida. Donec sed nec nunc cursus, varius eros at, vehicula erat.
          </p>
        </div>
        <div className="mb-10">
          <img
            src={Eliso}
            alt="Eliso Tyson"
            className="w-[13rem] p-4 mb-3 bg-white rounded-2xl"
          />

          <p className="font-medium text-center text-md"> Elisa Tyson</p>
          <p className="mb-3 font-medium text-center">CHO</p>
          <p className="mb-2 text-sm w-[15rem]">
            Donec imperdiet leo ac quam pellentesque, sit amet fermentum lorem
            gravida. Donec sed nec nunc cursus, varius eros at, vehicula erat.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Members;
