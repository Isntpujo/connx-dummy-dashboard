const Label = (props) => {
  const { htmlFor, children } = props;
  return (
    <label htmlFor={htmlFor} className="text-sm text-white">
      {children}
    </label>
  );
};

export default Label;
