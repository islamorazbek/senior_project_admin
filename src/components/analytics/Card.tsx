import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

type Props = {
  title: string;
  number: number;
  proc?: string;
  img: string;
}

const CustomCard: React.FC<Props> = ({ title, number, proc, img }) => {
  return (
    <Card sx={{ display: 'flex', width: '19%', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0px 2px 12px rgba(37, 51, 66, 0.15)' }}>
      <CardContent>
        <Typography color="GrayText" style={{ fontSize: '16px' }}>
          {title}
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <Typography style={{ fontSize: "16px", fontWeight: "600" }}>
            {number}
          </Typography>
          {proc &&
            <Typography color={proc[0] === "-" ? "#E2007A" : "primary"} style={{ fontSize: "12px" }}>
              {proc}
            </Typography>
          }
        </div>
      </CardContent >
      <CardMedia
        component="img"
        sx={{ width: 64, height: 64, padding: '10px' }}
        image={img}
        alt="Live from space album cover"
      />
    </Card>

  )
}

export default CustomCard
