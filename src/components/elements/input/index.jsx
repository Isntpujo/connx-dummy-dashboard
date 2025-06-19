import Label from './label';
import Input from './input';

const InputForm = (props) => {
  const { label, name, type, placeholder, onChange } = props;
  return (
    <div className="flex flex-col gap-2 *:text-black">
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} onChange={onChange}/>
    </div>
  );
};

export default InputForm;
