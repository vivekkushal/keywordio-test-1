import React, { useState } from 'react';
import styles from './CreateAdForm.module.css';
import { useNavigate } from 'react-router-dom';

// mui
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// layouts
import LayoutOne from '../../layouts/LayoutOne/LayoutOne';
import LayoutTwo from '../../layouts/LayoutTwo/LayoutTwo';
import LayoutThree from '../../layouts/LayoutThree/LayoutThree';

// constants
import { labels } from '../../utils/forms';
import { routes } from '../../utils/routes';

/**
 *
 * @param {String} name The name of the form
 * @param {Boolean} isMedia Whether it is a media ad creation form
 * @returns Ad Creation Form element
 */
const CreateAdForm = ({ name, isMedia = false }) => {
  const navigate = useNavigate();

  // states
  const [headingOne, setHeadingOne] = useState('');
  const [headingTwo, setHeadingTwo] = useState('');
  const [description, setDescription] = useState('');

  const [landscapeImg, setLandscapeImg] = useState('');
  const [portraitImg, setPortraitImg] = useState('');
  const [squareImg, setSquareImg] = useState('');

  const [video, setVideo] = useState('');

  const [businessName, setBusinessName] = useState('');
  const [buttonLabel, setButtonLabel] = useState('');
  const [websiteURL, setWebsiteURL] = useState('');

  const isDisabled = () => {
    if (
      headingOne === '' ||
      headingTwo === '' ||
      description === '' ||
      (isMedia
        ? video === '' ||
          portraitImg === '' ||
          landscapeImg === '' ||
          squareImg === ''
        : false) ||
      businessName === '' ||
      buttonLabel === '' ||
      websiteURL === ''
    ) {
      return true;
    }

    return false;
  };

  const handleSubmit = () => {
    let payload = {};
    if (isMedia) {
      payload = {
        headingOne,
        headingTwo,
        description,
        video,
        portraitImg,
        landscapeImg,
        squareImg,
        businessName,
        buttonLabel,
        websiteURL,
      };
    } else {
      payload = {
        headingOne,
        headingTwo,
        description,
        businessName,
        buttonLabel,
        websiteURL,
      };
    }

    clearForm();
    navigate(routes.ADS_SUBMITTED, { replace: true });
  };

  const clearForm = () => {
    setHeadingOne('');
    setHeadingTwo('');
    setDescription('');

    setLandscapeImg('');
    setPortraitImg('');
    setSquareImg('');
    setVideo('');

    setBusinessName('');
    setButtonLabel('');
    setWebsiteURL('');
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h4>{name}</h4>
      </div>
      <LayoutOne>
        <TextField
          id="outlined-basic"
          label="Heading 01"
          variant="outlined"
          placeholder="Add a heading that would make users interested"
          type="text"
          value={headingOne}
          onChange={(e) => {
            setHeadingOne(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Heading 02"
          variant="outlined"
          placeholder="Add a heading that would make users interested"
          type="text"
          value={headingTwo}
          onChange={(e) => {
            setHeadingTwo(e.target.value);
          }}
        />
        <TextField
          id="outlined-multiline-static"
          label="Description 01"
          placeholder="Add primary text to help users understand more about your products, services, or offers"
          multiline
          style={{
            width: '100%',
          }}
          rows={5}
          type="text"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </LayoutOne>
      {isMedia === true && (
        <LayoutTwo>
          <TextField
            id="outlined-basic"
            label="Landscape Marketing Image (1.9:1)"
            variant="outlined"
            placeholder="Add the URL of the image you want to use for the ad"
            type="text"
            value={landscapeImg}
            onChange={(e) => {
              setLandscapeImg(e.target.value);
            }}
          />
          <TextField
            id="outlined-basic"
            label="Portrait Marketing Image (4:5)"
            variant="outlined"
            placeholder="Add the URL of the image you want to use for the ad"
            type="text"
            value={portraitImg}
            onChange={(e) => {
              setPortraitImg(e.target.value);
            }}
          />
          <TextField
            id="outlined-basic"
            label="Square Marketing Image (1:1)"
            variant="outlined"
            placeholder="Add the URL of the image you want to use for the ad"
            type="text"
            value={squareImg}
            onChange={(e) => {
              setSquareImg(e.target.value);
            }}
          />
          <TextField
            id="outlined-basic"
            label="Video URL"
            variant="outlined"
            placeholder="Add the URL of the video you want to use for the ad"
            type="text"
            value={video}
            onChange={(e) => {
              setVideo(e.target.value);
            }}
          />
        </LayoutTwo>
      )}
      <LayoutThree>
        <TextField
          id="outlined-basic"
          label="Business Name"
          variant="outlined"
          placeholder="Add your business name"
          type="text"
          value={businessName}
          onChange={(e) => {
            setBusinessName(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          select
          label="Button Label"
          variant="outlined"
          placeholder="Select a lable that best suits your ad"
          type="text"
          value={buttonLabel}
          onChange={(e) => {
            setButtonLabel(e.target.value);
          }}
        >
          {labels.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-basic"
          label="Website URL"
          variant="outlined"
          placeholder="Add the URL of the landing page you want to redirect users to"
          type="text"
          value={websiteURL}
          onChange={(e) => {
            setWebsiteURL(e.target.value);
          }}
        />
      </LayoutThree>

      <Stack spacing={2} direction="row-reverse">
        <Button
          variant="contained"
          disableElevation
          onClick={handleSubmit}
          disabled={isDisabled()}
        >
          Submit
        </Button>
        <Button
          variant="outlined"
          disableElevation
          onClick={() => navigate(routes.CREATE_ADS)}
        >
          Back
        </Button>
      </Stack>
    </div>
  );
};

export default CreateAdForm;
