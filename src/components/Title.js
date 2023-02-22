import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createText } from './titleSlice';
// import { inputText } from '../redux/actions';

function Title(props) {
  const { text } = useSelector((state) => state.titel);
  const [textComm, setTextComm] = useState('');
  const dispatch = useDispatch();

  const handelChangeInput = (e) => {
    setTextComm(e.target.value);
  };

  const submitChange = (e) => {
    e.preventDefault();
    dispatch(createText(textComm));
    setTextComm('');
  };

  return (
    <div className="card-title" onSubmit={submitChange}>
      <form className="card-title-top">
        <input type="text" value={textComm} onChange={handelChangeInput} />
        <input type="submit" hidden />
      </form>
      <p>{text}</p>
    </div>
  );
}
export default Title;
