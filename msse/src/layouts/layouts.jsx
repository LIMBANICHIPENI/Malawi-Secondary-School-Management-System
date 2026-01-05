import { Outlet } from "react-router-dom";
import Header from "../Components/TeacherDashboard/Header";

const layout = () => {
  return (
    <>
      <Header />
      <main style={{ minHeight: "100vh" }}>
        <Outlet />
      </main>
    </>
  );
};

export default layout;
