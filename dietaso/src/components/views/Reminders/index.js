
import React, { useState,useEffect } from 'react';
import { message } from 'antd';
import apiURL from '../../../axios/axiosConfig';
import '../../commons/RemindersComponent/RowComponent'

import './reminders.scss';
import RowComponent from '../../commons/RemindersComponent/RowComponent';
import CardsComponent from '../../commons/RemindersComponent/CardsComponent';


const Reminders = () => {
  const [data, setData] = useState([]);
      
   /* useEffect(() => {
        fetchData();
        return () => {
            setData([]);
        };
    }, []);

    const fetchData = async () => {
        try {
            const { data } = await apiURL.get('Recordatorios/');
            setData(data);
            console.log(data);
        } catch (error) {
            message.error(`Error: ${error.message}`);
        }
    };*/


  return <div class="main-R">
          <RowComponent/>
          <CardsComponent/>
          
        
    

  </div>;





};

export default Reminders;
