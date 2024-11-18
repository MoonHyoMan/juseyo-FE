import styled from 'styled-components';

interface HeaderProps {
  title: string;
  iconSrc: string;
  alt: string;
}

const Header = ({ title, iconSrc, alt }: HeaderProps) => {
  return (
    <HeaderContainer>
      <h1>{title}</h1>
      <img src={iconSrc} alt={alt} />
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 22px;
    font-weight: 600;
  }
`;
