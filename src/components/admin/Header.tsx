import { AppBar, Avatar, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { authApi } from '../../redux/services/auth';
import { setUser } from '../../redux/slices/authSlice';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../redux/store';
import notification from '../../assets/icons/notifications.png';

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useTypedSelector(state => state.auth);
  const { data: profile, isLoading, isError } = authApi.useGetMyProfileQuery('User');

  React.useEffect(() => {
    if (profile) {
      dispatch(setUser(profile));
    }
  }, [profile])

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${240}px)` },
        ml: { sm: `${240}px` },
        background: 'white',
        boxShadow: 'none'
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        {isLoading && <Typography variant="caption">Loading...</Typography>}
        {isError && <Typography variant="caption" color="secondary">Error occured while loading Profile info!</Typography>}
        {user &&
          <div style={{ width: '25%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <IconButton aria-label="delete" size="small">
              <img src={notification} alt="notifications" />
            </IconButton>
            <Typography variant="h6" noWrap component="div" color="black">
              ADMIN: {user.first_name} {user.last_name}
            </Typography>
            <Avatar alt="avatar" src="https://avatarfiles.alphacoders.com/235/thumb-235557.png" sx={{ width: 56, height: 56 }} />
          </div>
        }
      </Toolbar>
    </AppBar>
  )
}

export default Header
