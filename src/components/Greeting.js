import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeGreetings } from '../redux/action';

const Greeting = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);

  useEffect(() => {
    const loading = async () => {
      await dispatch(changeGreetings());
    };

    if (state === 'Default') {
      loading();
    }
  }, []);

  return (
    <>
      <h1>Random Greeting from the DB</h1>
      <h2>{ state.message }</h2>
    </>
  );
};

export default Greeting;
