// import React from 'react';
import CategoryButton from '@/components/CategoryButton';
import Header from '@/components/Header';
import MissionCard from '@/components/MissionCard';
import NavBar from '@/components/NavBar';
import TabBar from '@/components/TabBar';
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue
// } from '@radix-ui/react-select';
import { useState } from 'react';
import styled from 'styled-components';

export default function MissionMain() {
  const category = ['전체', '일상', '집안일', '심부름', '학습', '기타'];
  // const currentMonth = getCurrentMonth();
  // const previousMonths = getPreviousMonths();

  const [activeTab, setActiveTab] = useState<number>(0);
  // const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');

  const filteredMissions = missionData.filter((mission) =>
    selectedCategory === '전체' ? true : mission.category === selectedCategory
  );

  return (
    <>
      <NavBar />
      <Header title="용돈 미션" iconSrc="/icons/plus.svg" alt="추가" />
      <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === 0 && (
        <>
          <CategorySection>
            {category.map((item, index) => (
              <CategoryButton
                key={index}
                category={item}
                isSelected={selectedCategory === item}
                onClick={() => setSelectedCategory(item)}
              />
            ))}
          </CategorySection>
          <MissionSection>
            {filteredMissions.map(
              ({ title, category, deadline, amount }, index) => (
                <MissionCard
                  key={index}
                  title={title}
                  category={category}
                  deadline={deadline}
                  amount={amount}
                />
              )
            )}
          </MissionSection>
        </>
      )}

      {activeTab === 1 && (
        <CategorySection>
          <Text>2024년</Text>
        </CategorySection>
      )}

      {activeTab === 2 && (
        <>
          <CategorySection>
            <Text>수락 대기중인 미션</Text>
          </CategorySection>
          <MissionSection>
            <MissionCard
              title="~~사오기"
              category="일상"
              deadline="2024-11-18 10:00:00"
              amount={1200}
            ></MissionCard>
            <MissionCard
              title="설거지하기"
              category="집안일"
              deadline="2024-11-16 10:00:00"
              amount={1200}
            ></MissionCard>
          </MissionSection>
        </>
      )}
    </>
  );
}

// const getCurrentMonth = () => {
//   const now = new Date();
//   return String(now.getMonth() + 1).padStart(2, '0');
// };

// const getPreviousMonths = () => {
//   const now = new Date();
//   const currentMonth = now.getMonth() + 1;

//   const months = [];

//   for (let i = 1; i < currentMonth; i++) {
//     months.push(String(i).padStart(2, '0'));
//   }

//   return months;
// };

const missionData = [
  {
    title: '~~사오기',
    category: '일상',
    deadline: '2024-11-21 02:00:00',
    amount: 1200
  },
  {
    title: '설거지하기',
    category: '집안일',
    deadline: '2024-11-21 02:00:00',
    amount: 1200
  },
  {
    title: '~~사오기',
    category: '심부름',
    deadline: '2024-11-21 02:00:00',
    amount: 1200
  },
  {
    title: '국어 공부하기',
    category: '학습',
    deadline: '2024-11-21 02:00:00',
    amount: 1200
  },
  {
    title: '~~사오기',
    category: '기타',
    deadline: '2024-11-21 02:00:00',
    amount: 1200
  },
  {
    title: '~~사오기',
    category: '심부름',
    deadline: '2024-11-21 02:00:00',
    amount: 1200
  }
];

const CategorySection = styled.div`
  margin-top: 103px;
  width: 100%;
  max-width: 600px;
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  background-color: var(--white);
  position: fixed;
  z-index: 50;
`;

const MissionSection = styled.div`
  margin-top: 160.33px;
  padding: 0 20px 75.33px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px;
`;

const Text = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: var(--black);
`;
