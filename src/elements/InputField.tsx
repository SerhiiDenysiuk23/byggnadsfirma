import React from 'react';

interface Props{
  label: string,
  changeHandler(str: string): void | undefined
}

const InputField: React.FC<Props> = ({label, changeHandler}) => {
  return (
    <div className={'input-field'}>
      <label htmlFor={label}>{label}</label>
      <input id={label} onChange={(e) => changeHandler(e.target.value)} type="text"/>
    </div>
  );
};

export default InputField;