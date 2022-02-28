import { Button, Checkbox, Dialog, DialogContent, DialogTitle, FormControlLabel, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import { useCreateBlogMutation, useEditBlogMutation } from '../../redux/services/blogs';
import { IBlog, IBlogNew } from '../../redux/types/IBlog';

type Props = {
  open: boolean
  initialData?: IBlog | null
  handleClose: () => void
}

const BlogDialog: React.FC<Props> = ({ open, initialData, handleClose }) => {
  const [createBlog, { isLoading: createLoading, isError: createError, status: createStatus }] = useCreateBlogMutation();
  const [editBlog, { isLoading: editLoading, isError: editError, status: editStatus }] = useEditBlogMutation();

  const formik = useFormik({
    initialValues: {
      title: '',
      content: '',
      is_active: false
    },
    onSubmit: (values) => {
      if (initialData) {
        editBlog({ ...initialData, ...values });
      } else {
        createBlog(values);
      }
    },
  })

  React.useEffect(() => {
    if (createStatus === 'fulfilled' || editStatus === 'fulfilled') {
      handleClose();
    }
  }, [createStatus, editStatus])

  React.useEffect(() => {
    if (initialData) {
      formik.setValues(initialData)
    } else {
      formik.setValues({
        title: '',
        content: '',
        is_active: false
      })

    }
  }, [initialData])

  const { values, handleChange, handleSubmit } = formik;
  const { title, content, is_active } = values;

  return (
    <Dialog open={open} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography>
            Blog creating
          </Typography>
          <div style={{ width: '30%', display: 'flex', justifyContent: 'space-between' }}>
            <Button variant="contained" sx={{ background: '#F4F4F4', color: '#444444', boxShadow: 0 }} onClick={handleClose} disabled={editLoading || createLoading}>Cancel</Button>
            <Button variant="contained" sx={{ background: '#0076BD', boxShadow: 0, ml: '8px' }} type="submit" disabled={editLoading || createLoading}>Save</Button>
          </div>
        </DialogTitle>
        <DialogContent>
          <TextField
            name="title"
            value={title}
            onChange={handleChange}
            required
            label="Title"
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <TextField
            name="content"
            value={content}
            onChange={handleChange}
            required
            label="Content"
            variant="outlined"
            margin="normal"
            multiline
            rows={6}
            fullWidth
          />
          <FormControlLabel
            control={
              <Checkbox checked={is_active} onChange={handleChange} name="is_active" />
            }
            label="Active"
          />
          {
            (createError || editError) &&
            < Typography color="error" variant="caption">
              Error occured! Try later or change latitude or longitude!
            </Typography>
          }
        </DialogContent>
      </form>
    </Dialog >
  )
}

export default BlogDialog
