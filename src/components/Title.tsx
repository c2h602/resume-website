import { Outlet } from "react-router";

export default function Title() {
  return (
    <>
      <div className="title__container">
        <p>
          <span style={{ color: "rgb(255, 102, 51)" }}>✺</span>
          <span style={{ color: "rgb(255, 153, 0)" }}></span> привет, меня зовут
          Анна, я frontend-разработчик <span style={{ color: "rgb(255, 102, 51)" }}>✺</span> тут можно ознакомиться с некоторыми из моих проектов
        </p>

        {/* <p>
          мой стек: html/css, javascript, typescript, 
          react, vite, react router, redux, zustand, formik, 
          jest, storybook, 
          nginx, docker, 
          git
        </p> */}
      </div>

      <Outlet/>
    </>
  );
}
