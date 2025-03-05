import todos from "/src/assets/todos.jpg";
import books from "/src/assets/books.jpg";
import coffee from "/src/assets/coffee.png";
import riddles from "/src/assets/riddles.jpg";
import morse from "/src/assets/morse.png";
import charactersCard from "/src/assets/charactersCard.png";
import { Outlet } from "react-router";

export default function Projects() {
  return (
    <>
      <div className="projects__container">
        <p>/ проекты</p>
      </div>

      <div className="stack__description">
        <p>
          мой стек: html/css, javascript, typescript, react, vite, react router,
          redux, zustand, formik, jest, storybook, nginx, docker, git
        </p>
      </div>

      <div className="project">
        <img src={coffee} alt="картинка"></img>

        <div className="info__project">
          <p className="title__project">кофе культ</p>
          <p className="description__project">
            моя интерпретация сайта сети кофеен кофе культ
            <br />
            <br />
            стек: react, javascript, vite, bootstrap
          </p>
        </div>
      </div>

      <div className="project">
        <img src={todos} alt="картинка"></img>

        <div className="info__project">
          <p className="title__project">todos</p>
          <p className="description__project">
            приложение для заметок с фильтрами
            <br />
            <br />
            стек: react, typescript, vite, redux
          </p>
        </div>
      </div>

      <div className="project">
        <img src={charactersCard} alt="картинка"></img>

        <div className="info__project">
          <p className="title__project">rick and morty</p>
          <p className="description__project">
            тематический проект с карточками персонажей мультсериала рик и морти
            <br />
            <br />
            стек: react, typescript, vite, redux
          </p>
        </div>
      </div>

      <div className="project">
        <img src={morse} alt="картинка"></img>

        <div className="info__project">
          <p className="title__project">переводчик текста в азбуку морзе</p>
          <p className="description__project">стек: react, javascript, vite</p>
        </div>
      </div>

      <div className="project">
        <img src={riddles} alt="картинка"></img>

        <div className="info__project">
          <p className="title__project">riddles</p>
          <p className="description__project">
            приложение с загадками
            <br />
            <br />
            стек: react, typescript, vite, api
          </p>
        </div>
      </div>

      <div className="project">
        <img src={books} alt="картинка"></img>

        <div className="info__project">
          <p className="title__project">books list</p>
          <p className="description__project">
            карточки с книгами и с фильтрацией по жанрам
            <br />
            <br />
            стек: react, typescript, vite, redux
          </p>
        </div>
      </div>

      <Outlet />
    </>
  );
}
