import { Card, CardContent, IconButton, LinearProgress, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';

interface Props {
  data: object
}

const BlogsCard: React.FC<Props> = ({ data }) => {

  Object.entries(data).map(([key, value], idx) => {
    console.log(key)
    console.log(value)
  })

  return (
    <Card sx={{ minWidth: 275, minHeight: "180px", boxShadow: '0px 2px 12px rgba(37, 51, 66, 0.15)' }}>
      <CardContent>
        <Typography sx={{ fontSize: "16px",  fontWeight: "bold" }} gutterBottom>
          Popular Blogs
        </Typography>
        <div>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {Object.entries(data).map(([key, value], idx) => {
              return (
                <ListItem key={idx} button secondaryAction={
                  <IconButton edge="end" style={{ fontSize: '16px' }}>
                    {value}
                    <FavoriteIcon />
                  </IconButton>
                }>
                  <ListItemText primary={key} />
                </ListItem>
              )
            })}
          </List>
        </div>
      </CardContent>
    </Card>
  )
}

export default BlogsCard