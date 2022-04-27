import { Button, Checkbox, Dialog, DialogContent, DialogTitle, FormControlLabel, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import { useCreatePortMutation } from '../../redux/services/port';

type Props = {
  open: boolean
  handleClose: () => void
}

const PromoDialog: React.FC<Props> = ({ open, handleClose }) => {
  const [createPromo, { error, isLoading }] = useCreatePortMutation();

  const formik = useFormik({
    initialValues: {
      condition: '',
      start_date: '',
      end_date: '',
      is_active: false,
      limit: 0,
      name: '',
      profit: {
        amount: 0,
        type: "FIXED"
      }
    },
    onSubmit: (values) => {
      console.log(values)
      handleClose();
    },
  })

  const { values, handleChange, handleSubmit } = formik;
  const { start_date, end_date, is_active, limit, name, profit } = values;

  return (
    <Dialog open={open} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography>
            Blog creating
          </Typography>
          <div style={{ width: '30%', display: 'flex', justifyContent: 'space-between' }}>
            <Button variant="contained" sx={{ background: '#F4F4F4', color: '#444444', boxShadow: 0 }} onClick={handleClose} disabled={isLoading}>Cancel</Button>
            <Button variant="contained" sx={{ background: '#0076BD', boxShadow: 0, ml: '8px' }} type="submit" disabled={isLoading}>Save</Button>
          </div>
        </DialogTitle>
        <DialogContent>

          <TextField
            name="name"
            value={name}
            onChange={handleChange}
            required
            label="Name"
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <TextField
            name="profit.amount"
            value={profit.amount}
            onChange={handleChange}
            required
            label="Profit amount"
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <TextField
            name="start_date"
            value={start_date}
            onChange={handleChange}
            required
            label="Start Date"
            variant="outlined"
            margin="normal"
            sx={{m: '1rem'}}
          />
          <TextField
            name="end_date"
            value={end_date}
            onChange={handleChange}
            required
            label="End Date"
            variant="outlined"
            margin="normal"
            sx={{m: '1rem'}}
          />
          <TextField
            name="limit"
            value={limit}
            onChange={handleChange}
            required
            label="Limit"
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <FormControlLabel
            control={
              <Checkbox checked={is_active} onChange={handleChange} name="is_active" />
            }
            label="Active"
          />
          {
            (error) &&
            < Typography color="error" variant="caption">
              Error occured! Try later or change latitude or longitude!
            </Typography>
          }
        </DialogContent>
      </form>
    </Dialog >
  )
}

export default PromoDialog
