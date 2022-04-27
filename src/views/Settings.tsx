import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useGetPriceQuery, useUpdatePriceMutation } from '../redux/services/price';
import { Button, Stack, TextField } from '@mui/material';

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

export default function Settings() {
  const { data } = useGetPriceQuery('');
  const [update, { isLoading, error }] = useUpdatePriceMutation();
  const [value, setValue] = React.useState(0);

  const [currentPrice, setCurrentPrice] = React.useState('');

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    if (data) {
      setCurrentPrice(data.price_value)
    }
  }, [data])

  const handleUpdatePrice = () => {
    update({ price_value: currentPrice });
  }

  return (
    <Box>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography style={{ fontSize: "42px", fontWeight: 500 }}>Admin Panel Settings</Typography>
      </div>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Price" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {/* {!data &&
          <Button variant="contained" sx={{ background: '#E2007A' }} onClick={handleCreatePrice}>Create Price</Button>
        } */}

        <Stack direction={'column'} width='25%' spacing={'0.5rem'}>
          <Typography >
            Current price:
          </Typography>
          <TextField value={currentPrice} onChange={e => setCurrentPrice(e.target.value)} />
          <Button variant="contained" sx={{ background: '#E2007A' }} disabled={isLoading} onClick={handleUpdatePrice}>Update</Button>
          {error && <Typography variant="caption" color="gray">{error}</Typography>}
        </Stack>
      </TabPanel>
    </Box>
  );
}
