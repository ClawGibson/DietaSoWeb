import React from 'react';

import './MainLayout.scss';

const MainLayout = ({ children }) => {

  console.log("Main Layout Children: ", children);


  return <div className="mainLayout">{children}</div>;
};

export default MainLayout;
