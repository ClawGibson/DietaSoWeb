import React, { useState } from 'react';

import DataLayout from '../../layouts/DataLayout';
import ImportData from '../../commons/ImportData';

const Home = () => {

  const [data, setData] = useState([]);

  const onSuccess = (data) => {
    setData(data);
  };

  console.log(data);
  
  return (
    <DataLayout>
        <ImportData onSuccess={ onSuccess} />
    </DataLayout>
  );
};

export default Home;
