"use client";
export const AddToCardBtn = () => {
  function handleAddToCart(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  return (
    <button
      onClick={handleAddToCart}
      className="py-2.5 px-6 border rounded-lg body-semibold border-primary-dark text-primary-dark hover:bg-primary-darker transition-color duration-500 hover:text-background-light"
    >
      Add To Cart
    </button>
  );
};
