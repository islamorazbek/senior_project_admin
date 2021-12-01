import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import chart from "../../assets/icons/chart.png"

const EarningsCard = () => {
  return (
    <Card sx={{ minWidth: 275, height: "230px", boxShadow: '0px 2px 12px rgba(37, 51, 66, 0.15)' }}>
      <CardContent>
        <Typography sx={{ fontSize: "16px", fontWeight: "bold" }} gutterBottom>
          Earnings Statistics
        </Typography>
      </CardContent>
      <img src={chart} width="100%" alt="graph" />
    </Card>
  )
}

export default EarningsCard
