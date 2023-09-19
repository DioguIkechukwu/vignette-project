import styled from "styled-components";

export const NavBarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 200px;
  height: auto;
  flex-shrink: 0;
  position: fixed;
  top: 0;
  right: 10px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: flex-end;
  padding-top: 30px;

  .logo {
    width: 40px;
    height: 40.943px;
    flex-shrink: 0;
    margin-bottom: 20px;
    cursor: pointer;
  }
`;

export const Socials = styled.div`
  padding-top: 40px;
  display: inline-flex;
  flex-direction: column;
  gap: 28px;
  .socialIcons {
    width: 30px;
    height: 30px;
    margin-bottom: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-top: 0;
    cursor: pointer;
  }
`;

export const NavList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  ul {
    padding-top: 28px;
    li {
      display: flex;
      flex-direction: column;
      padding-bottom: 8px;
      font-family: "Inter", sans-serif;
      color: #323232;
      transition: all 0.3s ease;
      text-align: right;
      &:hover {
        font-size: 25px;
        cursor: pointer;
      }
    }
  }
`;
