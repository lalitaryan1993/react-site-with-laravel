import React from 'react';
import Analysis from './components/Analysis/Analysis';
import Services from './components/Services/Services';
import Summary from './components/Summary/Summary';
import TopBanner from './components/TopBanner/TopBanner';
import TopNavigation from './components/TopNavigation/TopNavigation';
import './asset/css/custom.css';
import RecentProject from './components/RecentProject/RecentProject';
import Courses from './components/Courses/Courses';
import Video from './components/Video/Video';

function App() {
  return (
    <div style={{ width: '100%' }}>
      <TopNavigation />
      <TopBanner />
      <Services />
      <Analysis />
      <Summary />
      <RecentProject />
      <Courses />
      <Video />
    </div>
  );
}

export default App;
