import introduction from '../assets/introduction.png';
import introimage from '../assets/introimage.png';
function Introduction() {
  return (
    <div className='md:mt-10 xs:mt-0 grid lg:grid-cols-2 xs:grid-rows-2 gap-x-[3.5rem] sm:px-20 xs:px-[2.5rem]'>
      <div className='lg:order-2'>
        <div className='mt-20 mb-5'>
          <p className='text-2xl font-semibold leading-relaxed tracking-wider scale-y-125 '>Introducing MEX</p>
          <img className='absolute -mt-[4.5rem] sm:w-[32rem] xs:w-[23rem] -ml-10' src={introduction} alt="Introduction text" />
        </div>
        <p className='mb-5 text-lg'>
          The groundbreaking platform revolutionizing the way influencers engage
          with their audience. Our innovative technology allows users to create
          personalized digital copies of themselves, enabling them to interact
          with their followers through customized conversations and
          contextualized content.
        </p>
        <p className="text-lg">
          Our goal is to empower influencers to forge stronger connections with
          their audience, moving away from the traditional push model of content
          delivery. With MEX, influencers can now pull their followers in
          through engaging conversations, delivering tailored content that
          resonates on a deeper level. Join us in reshaping the future of
          influencer engagement and unlocking unprecedented value for
          influencers and their audiences alike.
        </p>
      </div>
      <div className='xs:-mt-[1.2rem] sm:-mt-[2.2rem]'>
        <img className='w-full' src={introimage} alt="image of two persons looking at each other and surprised" />
      </div>
    </div>
  );
}

export default Introduction;
