import styled from "styled-components";

export const TableContainer = styled.table`
  /* width: 100%; */
  /* height: 100%; */
  background-color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  display: flex;
  align-items: center;
  color: black;
  width: 80%;
  height: 60px;
  background-color: #c2c2c2;
  
  tr{
    width: 80%;
    display: flex;
    justify-content: space-around;
    width: 100%;
    font-weight: bold;

  }
`;
export const TableBody = styled.tbody`
  background-color: #5DA7DB;  
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: black;
  width: 80%;
  height: auto;
  tr {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height:60px;

  }
  td{
    font-weight: bold;
    text-align: center;

  }
`;

