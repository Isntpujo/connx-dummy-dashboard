import { useEffect, useRef, useState } from 'react';

const TextArea = (props) => {
  const textAreaRef = useRef(null);
  const [val, setVal] = useState('');
  const handleChange = (e) => {
    setVal(e.target.value);
  };

  useEffect(() => {
    textAreaRef.current.style.height = 'auto';
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';
  }, [val]);

  const { placeholder, name } = props;

  return (
    <textarea
      placeholder={placeholder}
      name={name}
      value={val}
      onChange={handleChange}
      rows="3"
      ref={textAreaRef}
      className="resize-none w-full p-4 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 hover:bg-gray-100 overflow-scroll no-scrollbar"
    ></textarea>
  );
};

export default TextArea;
