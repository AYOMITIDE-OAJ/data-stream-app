import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, Pagination, Stack, CircularProgress, Grid, PaginationItem } from '@mui/material';
import { fetchProject, fetchPosts } from '../services/ProjectService';
import { format } from 'date-fns'; // For formatting dates

interface ProjectProps {
  projectId: string;
}

interface ProjectData {
  id: string;
  createdAt: string;
  name: string;
}

interface PostData {
  id: string;
  createdAt: string;
  projectId: string;
  title: string;
  comment: string;
}

const Project: React.FC<ProjectProps> = ({ projectId }) => {
  const [project, setProject] = useState<ProjectData | null>(null);
  const [posts, setPosts] = useState<PostData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [totalPosts, setTotalPosts] = useState<number>(0);
  const postsPerPage = 5;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const projectData = await fetchProject(projectId);
        const { posts, totalCount } = await fetchPosts(projectId, page, postsPerPage);
        setProject(projectData.project);
        setPosts(posts);
        setTotalPosts(totalCount);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [projectId, page]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    
  };

  return (
    <div className='align-center justify-center'>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <Typography variant="h4" component="h1" gutterBottom sx={{ marginTop: '25px', textAlign: 'center' }}>
            {project?.name}
          </Typography>
          <Grid container spacing={2}>
            {posts.map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" component="h2">
                      {post.title}
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                      {format(new Date(post.createdAt), 'PPP')}
                    </Typography>
                    <Typography variant="body2">
                      {post.comment}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Stack spacing={2} alignItems="center" marginTop={2}>
            <Pagination 
            count={totalPages} 
            page={page} 
            onChange={handleChange} 
            variant="outlined" 
            color="primary" 
            boundaryCount={1} // Show first and last page numbers
            siblingCount={2} // Show 2 page numbers before and after the current page
            showFirstButton
            showLastButton
            />
          </Stack>
        </>
      )}
    </div>
  );
};

export default Project;