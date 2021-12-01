import React from 'react'
import { Box, Button, Typography } from '@mui/material';
import CustomTable from '../components/admin/Table';
import { profileApi } from '../redux/services/profile';

const FlightsView = () => {
  // const { data: flights, isLoading, isError } = profileApi.useGetOrdersQuery(``);

  return (
    <Box>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography style={{ fontSize: "42px", fontWeight: 500 }}>Flights</Typography>
        <Button variant="contained" sx={{ background: '#E2007A' }}>New Flight</Button>
      </div>
      {/* {orders?.orders && <CustomTable data={orders?.orders} isLoading={isLoading} mapping={mapping} />} */}
      {/* {isLoading && <span>Loading...</span>} */}
      {/* {isError && <span>Error occured. Try later.</span>} */}
    </Box>
  )
}

export default FlightsView
