import FeaturesTab from './FeaturesTab';
import content from './Content';

const Features = () => {
  return (
    <div className="lg:w-2/4  w-full bg-gray-700 mx-5 rounded-xl flex flex-col overflow-hidden">
      <div className=" p-3 grid grid-cols-2 gap-x-2 gap-y-2">
        {/* <FeaturesTab image={'./img/time.svg'} text={'3 Hours'} />
        <FeaturesTab image={'./img/session.svg'} text={'Live Session'} />
        <FeaturesTab image={'./img/calendar.svg'} text={'30 Mar 2021'} />
        <FeaturesTab image={'./img/hour.svg'} text={'7 to 11 AM'} /> */}

        {content.map(value => (<FeaturesTab image={'./ img / value.image'} text={value.text} />))}
      </div>
      {/* <div className="flex lg:flex-row flex-col md:flex-col "> */}
      <div className="flex-1 flex pr-3">
        <img
          // don't use svg for pictures, its just for icons, use png instead
          src="./img/featuring-raj.png"
          alt=""
          className="h-[200px] object-contain self-end md:h-[270px]"
        />

        <div className="flex flex-col space-y-3 mt-5 -translate-x-5 md:-translate-x-16 md:mt-10">
          <h1 className="font-bold text-2xl md:text-3xl">Raj Shamani</h1>
          <p>
            Learn how I gave over 100 keynote speeches in 23 countries before
            even turning 21 and built a social media empire on the side.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Features;
