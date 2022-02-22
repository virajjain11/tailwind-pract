const FeaturesTab = ({ image, text }) => {
  return (
    <div className="flex space-x-3 bg-neutral-800 p-2 rounded-xl">
      <img src={image} alt="" />
      <div>{text}</div>
    </div>
  );
};
export default FeaturesTab;
