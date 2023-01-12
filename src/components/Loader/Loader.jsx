import PulseLoader from 'react-spinners/ClipLoader';
import css from './Loader.module.scss';
import React from 'react';

export default function LoadingComponent() {
  return (
    <div className={css.loader}>
      <PulseLoader color="#fc842d" />
    </div>
  );
}
