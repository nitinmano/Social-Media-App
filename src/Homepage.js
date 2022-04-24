import React from 'react'
import Header from "./Header";
import Feed from "./Feed";

function HomePage() {
  return (
    <div className="homePage">
      {/* Header */}
      <Header />
      {/* App body */}
      <div className="homePage__body">
  
        <Feed />
      </div>
    </div>
  );
}

export default HomePage