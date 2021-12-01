import React from 'react'
import { Box, Button, Typography } from '@mui/material';
import CustomTable from '../components/admin/Table';
import { useGetPortsQuery } from '../redux/services/port';
import CreatePortDialog from '../components/admin/CreatePortDialog';
import { IPort } from '../redux/types/types';
import EditPortDialog from '../components/admin/EditPortDialog';

const mapping = {
  'id': "#ID",
  'name': "Name",
  'longitude': "Long.",
  'latitude': "Lat.",
  'created_at': "Created"
}

const PortsView: React.FC = () => {
  const { data, isLoading, isError } = useGetPortsQuery(`Ports`);
  const [open, setOpen] = React.useState(false);
  const [dialog, setDialog] = React.useState({ open: false, initialData: {} as IPort });

  const handleFormOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleEditOpen = (data: IPort) => {
    setDialog({ open: true, initialData: data });
  }
  const handleEditClose = () => {
    setDialog({ open: false, initialData: {} as IPort });
  }

  return (
    <Box>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
        <Typography style={{ fontSize: "42px", fontWeight: 500 }}>Ports</Typography>
        <Button variant="contained" sx={{ background: '#E2007A' }} onClick={handleFormOpen}>New Flight</Button>
      </div>
      {data?.ports && <CustomTable data={data?.ports} isLoading={isLoading} mapping={mapping} isAction={true} handleAction={handleEditOpen} />}
      {isLoading && <span>Loading...</span>}
      {isError && <span>Error occured. Try later.</span>}
      <CreatePortDialog open={open} handleClose={handleClose} />
      <EditPortDialog open={dialog.open} handleClose={handleEditClose} initialData={dialog.initialData} />
    </Box>
  )
}

export default PortsView
