import { Button, Card, CardActions, CardContent, Divider, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { reviews } from '../../tempData/analyticsData'
import star from '../../assets/icons/star.png'

const ReviewsCard = () => {
  return (
    <Card sx={{ minWidth: 275, boxShadow: '0px 2px 12px rgba(37, 51, 66, 0.15)' }}>
      <CardContent>
        <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
          Customers Review
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Messages
        </Typography>
        <Divider />
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {reviews.map((review, idx) => {
            return (
              <ListItem button secondaryAction={
                <IconButton edge="end" style={{ fontSize: '16px' }}>
                  <img src={star} alt="star" />
                  {review.rank}
                </IconButton>
              }>
                <ListItemText primary={review.name} secondary={review.review} />
              </ListItem>
            )
          })}
        </List>
      </CardContent>
      <CardActions >
        <Button size="small">See all</Button>
      </CardActions>
    </Card>
  )
}

export default ReviewsCard
