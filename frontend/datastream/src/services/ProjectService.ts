import axios from 'axios';
import { BASE_URL } from '../constants';


export const fetchProject = async (projectId: string) => {
  const response = await axios.get(`${BASE_URL}/${projectId}`);
  return response.data;
};

export const fetchPosts = async (projectId: string, page: number, limit: number = 5) => {
  const offset = (page - 1) * limit;
  const response = await axios.get(`${BASE_URL}/${projectId}/posts`, {
    params: { limit, offset },
  });
  return {
    posts: response.data.posts,
    totalCount: response.data.totalCount,
  };
};