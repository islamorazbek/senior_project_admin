import React from 'react'
import { Box, Paper, Typography } from '@mui/material';
import CustomCard from '../components/analytics/Card';
import { cardData, graphData, graphOptions, graphType } from '../tempData/analyticsData';
import ChartistGraph from 'react-chartist';
import ReviewsCard from '../components/analytics/ReviewsCard';
import DestinationsCard from '../components/analytics/DestinationsCard';
import EarningsCard from '../components/analytics/EarningsCard';

const AnalyticsView = () => {
  return (
    <Box>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
        <Typography style={{ fontSize: "42px", fontWeight: 500 }}>Analytics</Typography>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        {cardData.map((data, idx) => {
          return <CustomCard key={idx} {...data} />
        })}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
        <Typography variant="h6">Order Statistics</Typography>
      </div>
      <div style={{ display: 'flex', marginBottom: '15px' }}>
        <Paper style={{ width: '100%', boxShadow: '0px 2px 12px rgba(37, 51, 66, 0.15)' }} elevation={3}>
          <ChartistGraph data={graphData} options={graphOptions} type={graphType} />
        </Paper>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto', gridGap: '20px' }}>
        <ReviewsCard />
        <DestinationsCard />
        <EarningsCard />
      </div>
    </Box >
  )
}

export default AnalyticsView
