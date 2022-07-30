import styled from "styled-components";

export const JobsListContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
  padding: 40px 10px;
`;
