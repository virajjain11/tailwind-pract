import AtDiscount from './AtDiscount';

const ReserveASeatButton = () => {
  return (
    <button
      className="px-16 py-5 rounded-2xl text-xl"
      style={{
        background: `linear-gradient(93.37deg, #17C7EE -6.61%, #0065A5 116.84%)`,
      }}
    >
      <AtDiscount
        prefixText={'Reserve Seat for'}
        discountedPrice={499}
        maxPrice={1999}
      />
    </button>
  );
};
export default ReserveASeatButton;
