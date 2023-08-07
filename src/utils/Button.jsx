/* eslint-disable react/prop-types */
const Button = (props) => {
  return (
    <div>
      <div className="button mt-12">
        <a
          href="#"
          className=" px-4 py-2 bg-gradient-to-r from-green-400 to-blue-400 text-white rounded-md"
        >
          {props.name}
        </a>
      </div>
    </div>
  );
};

export default Button;
