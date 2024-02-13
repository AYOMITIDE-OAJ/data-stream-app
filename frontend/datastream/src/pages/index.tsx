import Project from '../components/Project';
import { projectId } from '../constants';

const HomePage = () => {
  return (
    <div className="container mx-auto px-4">
      <Project projectId = {projectId} />
    </div>
  );
};

export default HomePage;