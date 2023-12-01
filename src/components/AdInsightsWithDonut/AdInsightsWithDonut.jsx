import React, { useState } from 'react';
import styles from './AdInsightsWithDonut.module.css';

// mui
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { DataGrid } from '@mui/x-data-grid';

// icons
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import BackupTableIcon from '@mui/icons-material/BackupTable';

// components
import SectionWithHeader from '../SectionWithHeader/SectionWithHeader';
import AggregateRow from '../AggregateRow/AggregateRow';

// constants
import { donutLabels } from '../../utils/forms';
import { columnsFormat2 } from '../../utils/columnFormats';

// charts
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const AdInsightsWithDonut = () => {
  // states
  const [showChart, setShowChart] = useState(true);
  const [chartBy, setChartBy] = useState('clicks');

  const handleToggleChange = () => {
    setShowChart((prev) => !prev);
  };

  const getData = (chartBy, dummyData) => {
    const total = dummyData.reduce((total, cur) => total + cur[chartBy], 0);

    const preparedData = {
      // preparing the label as per percentage
      labels: dummyData.map(
        (item) =>
          `${item.group} ${((item[chartBy] / total) * 100).toFixed(2)} %`
      ),
    };

    // preparing data set
    preparedData['datasets'] = [
      {
        label: '',
        data: dummyData.map((item) => item[chartBy]),
        backgroundColor: ['#FF6F00', '#0288D1', '#121212'],
        borderColor: ['#FFF', '#FFF', '#FFF'],
        borderWidth: 5,
      },
    ];

    return preparedData;
  };

  const dummyData = [
    {
      id: '1',
      group: 'Male',
      clicks: 348,
      cost: 12528,
      conversions: 42,
      revenue: 62118,
    },
    {
      id: '2',
      group: 'Female',
      clicks: 692,
      cost: 24912,
      conversions: 35,
      revenue: 5175,
    },
    {
      id: '3',
      group: 'Unknown',
      clicks: 105,
      cost: 3943,
      conversions: 3,
      revenue: 4489,
    },
  ];

  const doughnutData = getData(chartBy, dummyData);

  const finalRow = dummyData.reduce(
    (accumulator, curObj) => ({
      clicks: accumulator.clicks + curObj.clicks,
      cost: accumulator.cost + curObj.cost,
      conversions: accumulator.conversions + curObj.conversions,
      revenue: accumulator.revenue + curObj.revenue,
    }),
    {
      clicks: 0,
      cost: 0,
      conversions: 0,
      revenue: 0,
    }
  );

  return (
    <div className={styles.container}>
      <SectionWithHeader
        heading="Ad Insights"
        infoText="This section contains the data related to created ads"
        others={
          showChart && (
            <TextField
              id="outlined-basic"
              select
              variant="standard"
              placeholder="Select a lable that best suits your ad"
              type="text"
              value={chartBy}
              onChange={(e) => {
                setChartBy(e.target.value);
              }}
            >
              {donutLabels.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          )
        }
      >
        {showChart ? (
          <div
            style={{
              width: '100%',
              height: '520px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Doughnut
              data={doughnutData}
              options={{
                plugins: {
                  legend: {
                    position: 'right',
                  },
                },
              }}
            />
          </div>
        ) : (
          <>
            <DataGrid
              aria-label="Insights table for Donut chart"
              density="comfortable"
              rows={dummyData}
              columns={columnsFormat2}
              autoPageSize={false}
              hideFooterPagination={true}
              hideFooter={true}
            />
            <AggregateRow
              row={finalRow}
              columnFormat={columnsFormat2}
              totalCellWidth={columnsFormat2[0].width}
            />
          </>
        )}
      </SectionWithHeader>
      <div className={styles.toggle}>
        <ToggleButtonGroup
          color="primary"
          value={showChart}
          exclusive
          onChange={handleToggleChange}
          aria-label="insights representation"
        >
          <ToggleButton value={true} aria-label="insights donut chart">
            <DonutLargeIcon />
          </ToggleButton>
          <ToggleButton value={false} aria-label="insights data table">
            <BackupTableIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>
  );
};

export default AdInsightsWithDonut;
