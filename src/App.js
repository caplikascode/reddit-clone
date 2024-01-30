import './App.css';
import SinglePost from './Components/SinglePost/singlePost';
import PostSection from './Components/PostSection/PostSection';
import SubReddits from './Components/SubReddits/SubReddits';
import TopNav from './Components/TopNav/TopNav';
import React from 'react';


function App() {
  return (
    <div className='App'>
        <TopNav />
     <div className='main-content'> 
        <SubReddits />
        <PostSection />
      </div>
    </div>
    
  );
}

export default App;
