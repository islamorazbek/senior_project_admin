import { Button, Dialog, DialogContent, DialogTitle, List, ListItem, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import { useUpdateOrderMutation } from '../../redux/services/order';
import { IOrder } from '../../redux/types/types';

type Props = {
  open: boolean;
  handleClose: () => void
  initialData: IOrder
}

const EditOrderDialog: React.FC<Props> = ({ open, handleClose, initialData }) => {
  const [updateOrder, { isLoading, isError, status }] = useUpdateOrderMutation();

  const formik = useFormik({
    initialValues: { ...initialData },
    onSubmit: (values) => {
      updateOrder(values);
    },
  });

  React.useEffect(() => {
    if (status === 'fulfilled') {
      handleClose();
    }
  }, [status])

  React.useEffect(() => {
    setValues({ ...initialData });
  }, [initialData])

  const { values, handleChange, handleSubmit, setValues } = formik;

  return (
    <Dialog open={open} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography>
            Port creating/editing
          </Typography>
          <div style={{ width: '30%', display: 'flex', justifyContent: 'space-between' }}>
            <Button variant="contained" sx={{ background: '#F4F4F4', color: '#444444', boxShadow: 0 }} onClick={handleClose} disabled={isLoading}>Cancel</Button>
            <Button variant="contained" sx={{ background: '#0076BD', boxShadow: 0 }} type="submit" disabled={isLoading}>Save</Button>
          </div>
        </DialogTitle>
        <DialogContent>
          <TextField
            name="email"
            value={values.email}
            onChange={handleChange}
            required
            label="Email"
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <TextField
            name="first_name"
            value={values.first_name}
            onChange={handleChange}
            required
            label="First Name"
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <TextField
            name="last_name"
            value={values.last_name}
            onChange={handleChange}
            required
            label="Last Name"
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <TextField
            name="phone_number"
            value={values.phone_number}
            onChange={handleChange}
            required
            label="Phone Number"
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <TextField
            name="price"
            value={values.price}
            onChange={handleChange}
            required
            label="Price"
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <List>
            <Typography variant="h6">
              Passengers:
            </Typography>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>
              {values?.passengers?.map((pass, idx) => (
                <ListItem key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Typography variant="caption">
                    Name: {pass.first_name} {pass.last_name}
                  </Typography>
                  <Typography variant="caption" >
                    Email: {pass.email}
                  </Typography>
                  <Typography variant="caption">
                    Direction: {pass.direction}
                  </Typography>
                </ListItem>
              ))}
            </div>
          </List>
          {
            isError &&
            <Typography color="error" variant="caption">
              Error occured! Try later or change latitude or longitude!
            </Typography>
          }
        </DialogContent>
      </form>
    </Dialog >
  )
}

export default EditOrderDialog
