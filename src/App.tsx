
import "./App.css";
import { Layout } from "./components/Layout";
// import Contacts from "./components/Contacts";
// import Projects from "./components/Projects";
// import Title from "./components/Title";
import { BrowserRouter, Route, Routes } from "react-router";
import MainPage from "./pages/MainPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactsPage from "./pages/ContactsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={<MainPage />}/>
            <Route path='/projects' element={<ProjectsPage />}/>
            <Route path='/contacts' element={<ContactsPage />}/>
          </Routes>
        </Layout>
      </BrowserRouter>

      {/* <Title />

      <Contacts></Contacts>

      <Projects></Projects> */}
    </>
  );
}

export default App;
