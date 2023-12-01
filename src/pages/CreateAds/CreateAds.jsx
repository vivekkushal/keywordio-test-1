import React, { useState } from 'react';
import styles from './CreateAds.module.css';
import { useNavigate } from 'react-router-dom';

// components
import AdChoice from '../../components/AdChoice/AdChoice';

// mui
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// assets
import { IMAGES } from '../../images';

// constants
import { routes } from '../../utils/routes';

const { IMAGE1, IMAGE2 } = IMAGES;

const CreateAds = () => {
  const navigate = useNavigate();

  // states
  const [selectedCategory, setSelectedCategory] = useState({
    text: false,
    media: false,
  });

  const handleNext = () => {
    if (selectedCategory.media) {
      navigate(routes.MEDIA_ADS);
    } else {
      navigate(routes.TEXT_ADS);
    }
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.header}>Create Ads</h3>
      <div className={styles.cardsContainer}>
        <AdChoice
          name="Text Ad"
          image={IMAGE1}
          isChecked={selectedCategory.text}
          onChange={() => {
            setSelectedCategory((prev) => ({
              ...prev,
              text: !prev.text,
            }));
          }}
        />
        <AdChoice
          name="Media Ad"
          image={IMAGE2}
          isChecked={selectedCategory.media}
          onChange={() => {
            setSelectedCategory((prev) => ({
              ...prev,
              media: !prev.media,
            }));
          }}
        />
      </div>
      <Stack spacing={2} direction="row-reverse">
        <Button
          variant="contained"
          disableElevation
          disabled={!selectedCategory.media && !selectedCategory.text}
          onClick={handleNext}
        >
          Next
        </Button>
      </Stack>
    </div>
  );
};

export default CreateAds;
