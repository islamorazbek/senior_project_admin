import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import BlogDialog from '../components/admin/BlogDialog';
import CustomTable from '../components/admin/Table';
import { useGetBlogsQuery } from '../redux/services/blogs';
import { IBlog, IBlogNew } from '../redux/types/IBlog';

const mapping = {
  'id': "#ID",
  'title': "Title",
  'is_active': "Active",
  'created_at': "Created",
  'updated_at': "Updated"
}

const BlogsView: React.FC = () => {
  const { data, isLoading, isError } = useGetBlogsQuery(`Blogs`);
  const [dialog, setDialog] = React.useState<{open: boolean, init?: IBlog | null}>({ open: false, init: null});

  const handleFormEditOpen = (blog: IBlog) => {
    console.log(blog)
    setDialog({ open: true, init: blog });
  };

  const handleFormNewOpen = () => {
    setDialog({ open: true, init: null });
  };

  const handleClose = () => {
    setDialog({ open: false, init: null });
  };

  return (
    <Box>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
        <Typography style={{ fontSize: "42px", fontWeight: 500 }}>Blogs</Typography>
        <Button variant="contained" sx={{ background: '#E2007A' }} onClick={handleFormNewOpen}>Create Blog</Button>
      </div>
      {data?.blogs && <CustomTable data={data?.blogs} isLoading={isLoading} mapping={mapping} isAction={true} handleAction={handleFormEditOpen} />}
      {data?.count === 0 && <span>No blogs yet. Create one!</span>}
      {isLoading && <span>Loading...</span>}
      {isError && <span>Error occured. Try later.</span>}
      <BlogDialog open={dialog.open} handleClose={handleClose} initialData={dialog.init} />
    </Box>
  )
}

export default BlogsView
