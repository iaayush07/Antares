import { Routes, Route } from 'react-router-dom';
import TeamWorkItems from '../pages/TeamWorkItems';
import MyWorkItems from '../pages/MyWorkItems';
import CapacityDashboard from '../pages/CapacityDashboard';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<TeamWorkItems />} />
      <Route path="/my-items" element={<MyWorkItems />} />
      <Route path="/dashboard" element={<CapacityDashboard />} />
    </Routes>
  );
};

export default AppRoutes;