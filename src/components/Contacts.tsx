import { Outlet } from "react-router";


export default function Contacts() {
  return (
    <>
      <div className="conctacts__container">
        <p>/ контакты</p>
      </div>

      <div className="contacts__nav">
        
        <p>
          telegram:{" "}
          <a href="https://t.me/c2h6o2">
            @c2h6o2
          </a>
        </p>

        <p>
          github:{" "}
          <a href="https://github.com/c2h602">
            c2h602
          </a>
        </p>

        <p>
          почта:{" "}
          <a href="  cup.cakejr247@gmail.com">
            cup.cakejr247@gmail.com
          </a>
        </p>
        
      </div>

      <Outlet/>
    </>
  );
}
