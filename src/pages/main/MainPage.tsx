// import React from 'react';
import { useEffect, useState } from 'react';
import axiosInstance from '@/api/instance';

import NavBar from '@/components/NavBar';
import HomeDashBoard from '@/components/HomeDashboard';
import SectionHeader from '@/components/SectionHeader';
import styled from 'styled-components';
import MissionCard from '@/components/MissionCard';

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
      <Section>
        <SectionHeader title="진행 중인 미션" path="/mission" />
        <CardContainer>
          <MissionCard
            title="~~사오기"
            category="일상"
            daedline="2024-11-19 23:00:00"
            amount={1200}
          />
          <MissionCard
            title="설거지하기"
            category="집안일"
            daedline="2024-11-22 20:00:00"
            amount={2000}
          />
        </CardContainer>
      </Section>
      <Section>
        <SectionHeader title="최근 완료한 미션" path="/mission" />
        <CardContainer>
          <MissionCard title="~~사오기" category="기타" amount={1500} />
          <MissionCard title="국어 공부하기" category="학습" amount={2500} />
        </CardContainer>
      </Section>
      <Section>
        <SectionHeader title="최근 학습" path="/edu" />
      </Section>
    </>
  );
}

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  padding: 20px 20px 0 20px;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
