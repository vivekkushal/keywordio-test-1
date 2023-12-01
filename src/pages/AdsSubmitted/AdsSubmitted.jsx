import React, { useEffect } from 'react';
import styles from './AdsSubmitted.module.css';
import { useNavigate } from 'react-router-dom';

// mui
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// assets
import { IMAGES } from '../../images';

// constants
import { routes } from '../../utils/routes';

const AdsSubmitted = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(routes.CREATE_ADS, { replace: true });
    }, 600);
  }, [navigate]);

  return (
    <div className={styles.container}>
      <img src={IMAGES.BACKGROUND} alt="background" className={styles.bg} />
      <div className={styles.card}>
        <CheckCircleIcon color="blue" />
        <br />
        <h4
          style={{
            color: 'black',
          }}
        >
          Submitted
        </h4>
      </div>
    </div>
  );
};

export default AdsSubmitted;
