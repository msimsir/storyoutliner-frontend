import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 64px 4fr;
  grid-template-areas: "navbar navbar" "sidebar main";
`;
