const Input = (props) => {
    const {type, placeholder, name, onChange} = props
  return (
    <input
    type={type}
    placeholder={placeholder}
    name={name}
    id={name}
    onChange={onChange}
    className="py-3 px-4 rounded-xl hover:bg-gray-100 border border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
  );
};

export default Input;
