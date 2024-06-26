import DashboardLayout from "../features/dashboard/DashboardLayout";
import DashboardFilter from "../features/dashboard/DashboardFilter";
import Heading from "../ui/Heading";
import styled from "styled-components";

const RowWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
`;

function Dashboard() {
  return (
    <>
      <RowWrapper type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter />
      </RowWrapper>

      <DashboardLayout />
    </>
  );
}

export default Dashboard;
