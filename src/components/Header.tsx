import { useState } from 'react';
import styled from 'styled-components';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle
} from './ui/drawer';
import DrawerCategoryCard from './DrawerCategoryCard';

interface HeaderProps {
  title: string;
  iconSrc: string;
  alt: string;
}

const Header = ({ title, iconSrc, alt }: HeaderProps) => {
  const category = ['일상', '집안일', '심부름', '학습', '기타'];

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleAddMission = () => {
    if (alt === '추가') {
      setIsDrawerOpen(true);
    }
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <HeaderContainer>
        <h1>{title}</h1>
        <img src={iconSrc} alt={alt} onClick={handleAddMission} />
      </HeaderContainer>

      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent className="px-5">
          <DrawerHeader>
            <DrawerTitle></DrawerTitle>
            <DrawerDescription>카테고리 선택</DrawerDescription>
          </DrawerHeader>
          <Section>
            {category.map((item: string, index: number) => (
              <DrawerCategoryCard
                key={index}
                category={item}
                isSelected={selectedCategory === item}
                onClick={() => handleCategoryClick(item)}
              />
            ))}
          </Section>
          <DrawerHeader>
            <DrawerTitle></DrawerTitle>
            <DateContainer>
              <DrawerDescription>시작 날짜</DrawerDescription>
              <DrawerDescription>종료 날짜</DrawerDescription>
            </DateContainer>
          </DrawerHeader>
          <DrawerHeader>
            <DrawerTitle></DrawerTitle>

            <DrawerDescription>카테고리 선택</DrawerDescription>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  background-color: var(--white);
  position: fixed;
  z-index: 3;

  h1 {
    font-size: 22px;
    font-weight: 600;
  }
`;

const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px;

  & > * {
    flex-basis: calc(50% - 8px);
  }
`;

const DateContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
