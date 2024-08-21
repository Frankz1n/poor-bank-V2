import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: #3e75cf;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;
  z-index: 1;
  border-bottom: 2px solid #fff;
`;

export const TittleHeader = styled.h1`
  color: #fff;
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 50px;
`;

export const ButtonHeader = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #fff;
  color: #3e75cf;
  font-weight: bold;
  cursor: pointer;
`;
