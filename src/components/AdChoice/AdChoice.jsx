import React from 'react';
import styles from './AdChoice.module.css';
import Checkbox from '@mui/material/Checkbox';

const AdChoice = ({ name, image, isChecked, onChange }) => {
  return (
    <div className={styles.container}>
      <div>
        <Checkbox
          checked={isChecked}
          label={{ inputProps: { 'aria-label': name } }}
          onChange={onChange}
        />
      </div>
      <img src={image} alt={name} />
      <div className={styles.footer}>
        <p>Create</p>
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default AdChoice;
