const AtDiscount = ({ prefixText, discountedPrice, maxPrice }) => {
  return (
    <div>
      {prefixText} <span className="font-bold">₹{discountedPrice}/-</span>{' '}
      <span className="line-through text-xs">₹{maxPrice}/-</span>
    </div>
  );
};
export default AtDiscount;
