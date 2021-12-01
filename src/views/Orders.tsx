import { Box, Typography } from '@mui/material';
import React from 'react';
import EditOrderDialog from '../components/admin/EditOrderDialog';
import CustomTable from '../components/admin/Table';
import { useGetOrdersQuery } from '../redux/services/order';
import { IOrder } from '../redux/types/types';

const mapping = {
  'id': "#ID",
  'email': "Email",
  'departure_time': "Departure Time",
  'created_at': "Created Time",
  'price': "Price",
  'status': "Status"
}

const OrdersView: React.FC = () => {
  const { data: orders, isLoading, isError } = useGetOrdersQuery(`Order`);
  const [dialog, setDialog] = React.useState({ open: false, initialData: {} as IOrder });

  const handleFormOpen = (data: IOrder) => {
    setDialog({ open: true, initialData: data });
  };

  const handleClose = () => {
    setDialog({ open: false, initialData: {} as IOrder });
  };

  return (
    <Box>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
        <Typography style={{ fontSize: "42px", fontWeight: 500 }}>Orders</Typography>
      </div>
      {orders?.orders && <CustomTable data={orders?.orders} isLoading={isLoading} mapping={mapping} isAction={true} handleAction={handleFormOpen} />}
      {isLoading && <span>Loading...</span>}
      {isError && <span>Error occured. Try later.</span>}
      <EditOrderDialog open={dialog.open} handleClose={handleClose} initialData={dialog.initialData} />
    </Box>
  )
}

export default OrdersView
