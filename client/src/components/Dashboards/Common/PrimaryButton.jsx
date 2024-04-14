import PropTypes from "prop-types";
Button.propTypes = {
  children: PropTypes.element,
}

function Button({ children }) {
  return (
    <button
      type="submit"
      className="w-full text-white hover:bg-red-700 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-red-700 focus:ring-red-800"
    >
      {children}
    </button>
  );
}
export { Button };
