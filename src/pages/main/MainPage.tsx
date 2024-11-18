// import React from 'react';
import { useEffect, useState } from 'react';
import axiosInstance from '@/api/instance';

import NavBar from '@/components/NavBar';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import HomeDashBoard from '@/components/HomeDashboard';

interface Example {
  userId: string;
  id: string;
  title: string;
  completed: boolean;
}

export default function MainPage() {
  const [exampleData, setExampleData] = useState<Example | null>(null);

  const getExampleData = async () => {
    try {
      const response = await axiosInstance.get('/todos/1');
      const data = response.data;
      setExampleData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getExampleData();
  }, []);

  return (
    <>
      <NavBar />
      <HomeDashBoard
        name="문효만"
        level={1}
        money={20500}
        point={230}
        successfulMisson={2}
      />
    </>
  );
}
