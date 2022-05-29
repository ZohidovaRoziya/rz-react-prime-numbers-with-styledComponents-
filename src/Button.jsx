import styled from "styled-components";


export let Button = styled.div`
  text-align: center;
  padding-top: 10px;
  width: 150px;
  height: 50px;
  border: 4px solid #fff;
  border-radius: 8px;
  color: #fff;
  font-size: 25px;
  cursor: pointer;
  background: ${ ( props ) => props.type === "tub" ? "red" : props.type === "juft" ? "blue" : "green" }
`;




