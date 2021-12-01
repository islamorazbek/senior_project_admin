import { Card, CardContent, Typography, LinearProgress } from '@mui/material'
import React from 'react'
import { destinations } from '../../tempData/analyticsData'

const DestinationsCard = () => {
  return (
    <Card sx={{ minWidth: 275, height: "230px", boxShadow: '0px 2px 12px rgba(37, 51, 66, 0.15)' }}>
      <CardContent>
        <Typography sx={{ fontSize: "16px", fontWeight: "bold" }} gutterBottom>
          Popular Destinations
        </Typography>
        <div style={{ display: "grid", gridTemplateColumns: "auto auto", gridGap: '15px' }}>
          {destinations.map((dest, idx) => {
            return (
              <div key={idx}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography sx={{ fontSize: 14 }} gutterBottom>
                    {dest.city}
                  </Typography>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {dest.rank}%
                  </Typography>
                </div>
                <LinearProgress sx={{ height: 10, borderRadius: 5, backgroundColor: '#F4F4F4' }} color="secondary" variant="determinate" value={dest.rank} />
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}

export default DestinationsCard
