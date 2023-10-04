import Hero_logo from "../assets/hero4.png";
import Mexbg from '../assets/mexbg.png';

function Hero() {
  return (
    
    <div className="bg-gradient-to-r from-[#EEF0FF] to-[#F7ECFF] gap-x-10 grid w-screen lg:grid-cols-2 xs:grid-rows-2 lg:p-20 xs:px-20 xs:pt-10 lg:h-screen">
      <div className='lg:my-auto'>
        <div className="mb-5">
        <p className="font-medium">MEX.AI</p>
        <img className='absolute lg:-mt-10 xs:-mt-14 lg:-ml-10 xs:-ml-20 lg:w-40 xs:w-[15rem]' src={Mexbg} />
        </div>
        <p className="font-medium leading-loose tracking-widest xs:-ml-10 lg:ml-0 lg:text-2xl xs:text-4xl "> Revolutionizing </p>
        <p className="xs:-ml-10 lg:ml-0 leading-[3] font-medium  lg:text-2xl xs:text-4xl tracking-widest "> Influencer Engagements </p>
        <p className="mt-10 font-medium leading-relaxed xs:-ml-10 lg:ml-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus illum soluta quidem ut molestias esse corrupti velit tempore vero deleniti. A, nam nobis et delectus autem ducimus tempore nihil cumque magnam porro! Animi, alias ab. </p>
        <button className="xs:-ml-10 lg:ml-0 bg-[#6D49FD] text-white rounded-md p-2 mt-5"> Learn More </button>
      </div>
      <img className="lg:-mt-20 w-full md:-mt-[9rem] sm:-mt-[7rem] xs:mt-[.1rem]" src={Hero_logo} />
    </div>
  );
}

export default Hero;


