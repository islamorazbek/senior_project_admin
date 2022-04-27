import React from 'react'
import { Box, Button, Paper, Typography } from '@mui/material';
import CustomTable from '../components/admin/Table';
import { useGetPortsQuery } from '../redux/services/port';
import CreatePortDialog from '../components/admin/CreatePortDialog';
import { IPort } from '../redux/types/types';
import EditPortDialog from '../components/admin/EditPortDialog';
import { useGetPromosQuery } from '../redux/services/promocodes';
import PromoDialog from '../components/admin/PromoDialog';

const mapping = {
  'id': "#ID",
  'name': "Name",
  'start_date': 'Start',
  'end_date': 'End',
  'is_active': 'Active',
  'limit': 'Limit',
  'profit.amount': 'Profit',
  'created_at': "Created"
}

const Promocodes: React.FC = () => {
  const { data, isLoading, isError } = useGetPromosQuery(`Promos`);

  const [dialog, setDialog] = React.useState<{ open: boolean, init?: IPort | null }>({ open: false, init: null });

  const handleFormNewOpen = () => {
    setDialog({ open: true, init: null });
  };

  const handleClose = () => {
    setDialog({ open: false, init: null });
  };

  return (
    <Box>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
        <Typography style={{ fontSize: "42px", fontWeight: 500 }}>Promocodes</Typography>
        <Button variant="contained" sx={{ background: '#E2007A' }} onClick={handleFormNewOpen}>Create Promocode</Button>
      </div>
      {data?.promocodes && <CustomTable data={data?.promocodes} isLoading={isLoading} mapping={mapping} isAction={false} />}
      <PromoDialog open={dialog.open} handleClose={handleClose} />
      {isLoading && <span>Loading...</span>}
      {isError && <span>Error occured. Try later.</span>}
    </Box>
  )
}

export default Promocodes
