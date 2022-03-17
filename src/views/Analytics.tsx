import { Box, FormLabel, Paper, Skeleton, Stack, Typography } from '@mui/material';
import React from 'react';
import ChartistGraph from 'react-chartist';
import CustomCard from '../components/analytics/Card';
import DestinationsCard from '../components/analytics/DestinationsCard';
import EarningsCard from '../components/analytics/EarningsCard';
import ReviewsCard from '../components/analytics/ReviewsCard';
import { cardData, graphData, graphOptions, graphType } from '../tempData/analyticsData';
import dollar from '../assets/icons/dollar.png';
import { useGetEarningsQuery, useGetPopularBlogsQuery, useGetPopularDestinationsQuery } from '../redux/services/analyticsApi';
import BlogsCard from '../components/analytics/BlogsCard';

const AnalyticsView = () => {
  const [query, setQuery] = React.useState<{ from: string, to: string }>({ from: '', to: '' });
  const { from, to } = query;
  const { data: earningData, isLoading: isEarningsLoading, isFetching: isEarningFetching } = useGetEarningsQuery(
    { from: !from ? '' : from.concat('T00:00:00Z'), to: !to ? '' : to.concat('T00:00:00Z') },
    { refetchOnMountOrArgChange: true }
  );

  const { data: blogsData, isLoading: isBlogsLoading, isFetching: isBlogsFetching } = useGetPopularBlogsQuery('');

  const { data: destinationsData, isLoading: isDestinationsLoading, isFetching: isDestinationsFetching } = useGetPopularDestinationsQuery(
    { from: !from ? '' : from.concat('T00:00:00Z'), to: !to ? '' : to.concat('T00:00:00Z') },
    { refetchOnMountOrArgChange: true }
  );

  const isLoading = () => {
    return isEarningsLoading
      || isDestinationsLoading
      || isBlogsLoading
      || isEarningFetching
      || isDestinationsFetching
      || isBlogsFetching
  }

  return (
    <Box>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
        <Typography style={{ fontSize: "42px", fontWeight: 500 }}>Analytics</Typography>
        <Stack direction='row'>
          <FormLabel sx={{ m: '8px' }}>From:</FormLabel>
          <input
            type='date'
            value={from}
            onChange={(e) => setQuery(state => ({ ...state, from: e.target.value }))}
            min={'2021-01-01'}
            max={new Date().toLocaleDateString('en-ca')}
          />
          <FormLabel sx={{ m: '8px' }}>To:</FormLabel>
          <input
            type='date'
            lang='en'
            value={to}
            onChange={(e) => setQuery(state => ({ ...state, to: e.target.value }))}
            min={'2021-01-01'}
            max={new Date().toLocaleDateString('en-ca')}
          />
        </Stack>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        {isLoading() ?
          <Skeleton height={'100px'} width={'150px'} sx={{ m: 0 }} />
          :
          earningData &&
          <CustomCard
            title='Earnings'
            number={earningData?.earning}
            img={dollar}
          />
        }
        {/* {cardData.map((data, idx) => {
          return <CustomCard key={idx} {...data} />
        })} */}
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
        {isLoading() ?
          <div style={{ display: 'grid', gridTemplateColumns: 'auto auto', gridGap: '5px' }}>
            <Skeleton height={'100px'} width={'120px'} sx={{ m: 0 }} />
            <Skeleton height={'100px'} width={'120px'} sx={{ m: 0 }} />
            <Skeleton height={'100px'} width={'120px'} sx={{ m: 0 }} />
            <Skeleton height={'100px'} width={'120px'} sx={{ m: 0 }} />
            <Skeleton height={'100px'} width={'120px'} sx={{ m: 0 }} />
            <Skeleton height={'100px'} width={'120px'} sx={{ m: 0 }} />
          </div>
          :
          destinationsData && blogsData &&
          <>
            <ReviewsCard />
            <BlogsCard data={blogsData} />
            <DestinationsCard data={destinationsData} />
          </>
        }
        <EarningsCard />
      </div>
    </Box >
  )
}

export default AnalyticsView
