import { Card, CardContent, LinearProgress, Typography } from '@mui/material'
import React from 'react'
import { useGetPopularDestinationsQuery } from '../../redux/services/analyticsApi'
import { IPopularDestination } from '../../redux/types/IAnalyitcs';

interface Props {
  data: IPopularDestination[]
}

const DestinationsCard: React.FC<Props> = ({data}) => {
  // const { data } = useGetPopularDestinationsQuery({ from: new Date(from).toISOString(), to: new Date(to).toISOString() });

  return (
    <Card sx={{ minWidth: 275, height: "230px", boxShadow: '0px 2px 12px rgba(37, 51, 66, 0.15)' }}>
      <CardContent>
        <Typography sx={{ fontSize: "16px", fontWeight: "bold" }} gutterBottom>
          Popular Destinations
        </Typography>
        <div style={{ display: "grid", gridTemplateColumns: "auto auto", gridGap: '15px' }}>
          {data?.slice(0).sort((a, b) => b.popularity - a.popularity).slice(0, 5).map((dest, idx) => {
            return (
              <div key={idx}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography sx={{ fontSize: 14 }} gutterBottom>
                    {dest.location.name ? dest.location.name : 'undefined'}
                  </Typography>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {dest.popularity.toFixed()}%
                  </Typography>
                </div>
                <LinearProgress sx={{ height: 10, borderRadius: 5, backgroundColor: '#F4F4F4' }} color="secondary" variant="determinate" value={dest.popularity} />
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}

export default DestinationsCard
