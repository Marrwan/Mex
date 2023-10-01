import solution from '../assets/solution.png';
import solutionimage from '../assets/solutionimage.png';
function Solution() {
  return (
    <div>
        <p className='text-3xl font-semibold tracking-widest text-center lg:-mt-[25rem] mb-[5rem]'>A platform which allows influencers to create personal,
thoughtful and deeper engagements with their audience,
at a fraction of the effort.</p>
    <div className='mt-20 grid lg:grid-cols-2 xs:grid-rows-2 gap-x-[3.5rem] sm:px-20 xs:px-[2.5rem]'>
      <div className='lg:order-2'>
        <div className='mt-20 mb-5'>
          <p className='text-2xl font-semibold leading-relaxed tracking-wider scale-y-125 '>Revolutionizing Influencer
Engagement</p>
          <img className='absolute -mt-[4.5rem] sm:w-[32rem] xs:w-[23rem] -ml-[3.5rem]' src={solution} alt="Solution text" />
        </div>
        <p className='mb-5 text-lg'>
        MEX revolutionizes influencer engagement by introducing a new model     of personalized and contextualized content distribution. By creating digital copies of influencers, we enable them to engage with their audience through interactive conversations. This innovative approach allows            followers to "pull" content based on their specific interests and needs,       resulting in a highly tailored and engaging experience. 

        </p>
        <p className="text-lg">
        With MEX, influencers can effortlessly deliver curated content that            resonates on a deeper level, fostering stronger connections and increasing audience satisfaction. Our platform empowers influencers to optimize          engagement, drive growth, and unlock the full potential of their audience reach.

        </p>
      </div>
      <div className='xs:-mt-[1.2rem] sm:-mt-[2.2rem]'>
        <img className='w-full' src={solutionimage} alt="image of two persons looking at each other and surprised" />
      </div>
    </div>
    </div>
  );
}

export default Solution;
