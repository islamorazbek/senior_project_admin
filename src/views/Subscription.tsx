import React from 'react'
import { Box, Tab, Tabs, Typography } from '@mui/material';
import CustomTable from '../components/admin/Table';
import { useGetProfilesQuery } from '../redux/services/profile';
import { useGetMessagesQuery, useGetSubscribedUsersQuery } from '../redux/services/subcriptions';

const mapping = {
  'id': "#ID",
  'user_id': "User ID",
  'email': "Email",
  'is_active': "Active",
  'created_at': "Created",
  'updated_at': "Updated"
}

const messageMapping = {
  "id": "#ID",
  "name": "Name",
  "email": "Email",
  "is_processed": "Processed",
  "message": "Message",
  "created_at": "1970-01-01T07:00:00Z",
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const SubsriptionsView: React.FC = () => {
  const { data, isLoading, isError } = useGetSubscribedUsersQuery(``);
  const { data: messages } = useGetMessagesQuery(``);
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
        <Typography style={{ fontSize: "42px", fontWeight: 500 }}>Email subscriptions</Typography>
      </div>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Subscriptions" />
          <Tab label="Messages" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {data?.subscriptions && <CustomTable data={data?.subscriptions} isLoading={isLoading} mapping={mapping} />}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {messages?.messages && <CustomTable data={messages?.messages} isLoading={isLoading} mapping={messageMapping} />}
      </TabPanel>
      {isLoading && <span>Loading...</span>}
      {isError && <span>Error occured. Try later.</span>}
    </Box>
  )
}

export default SubsriptionsView
