import { Button, Checkbox, Dialog, DialogContent, DialogTitle, FormControlLabel, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useCreateBlogMutation, useDeleteBlogMutation, useEditBlogMutation } from '../../redux/services/blogs';
import { IBlog, IBlogNew } from '../../redux/types/IBlog';

type Props = {
  open: boolean
  initialData?: IBlog | null
  handleClose: () => void
}

const BlogDialog: React.FC<Props> = ({ open, initialData, handleClose }) => {
  const [createBlog, { isLoading: createLoading, isError: createError, status: createStatus }] = useCreateBlogMutation();
  const [editBlog, { isLoading: editLoading, isError: editError, status: editStatus }] = useEditBlogMutation();
  const [deleteBlog, { isLoading: deleteLoading, isError: deleteError, status: deleteStatus }] = useDeleteBlogMutation();

  const [isDeletable, setIsDeletable] = useState(false);

  const formik = useFormik({
    initialValues: {
      title: '',
      content: '',
      image: '',
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

  const handleDelete = () => {
    if (initialData?.id) {
      deleteBlog(initialData?.id);
    }
  }

  React.useEffect(() => {
    if (createStatus === 'fulfilled' || editStatus === 'fulfilled' || deleteStatus === 'fulfilled') {
      handleClose();
    }
  }, [createStatus, editStatus])

  React.useEffect(() => {
    if (initialData) {
      formik.setValues(initialData)
      setIsDeletable(true)
    } else {
      formik.setValues({
        title: '',
        content: '',
        image: '',
        is_active: false
      })
      setIsDeletable(false)
    }
  }, [initialData])

  const { values, handleChange, handleSubmit } = formik;
  const { title, content, image, is_active } = values;

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
          <TextField
            name="image"
            value={image}
            onChange={handleChange}
            required
            label="Image Link"
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
          {isDeletable && <Button variant="contained" sx={{ background: '#E2007A', color: '#FFFFFF', boxShadow: 0}} onClick={handleDelete} disabled={editLoading || createLoading || deleteLoading}>Delete</Button>}
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
