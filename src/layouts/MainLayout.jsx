import React from "react";
import Navigation from "./Navigation";
import {Outlet} from "react-router";

const MainLayout = () => {
  const items = [
    {title: "Матрицы", href: "/matrix"},
    {title: "Текстовый редактор", href: "/texteditor"}
  ]

  return (
    <div className="flex flex-col gap-5 min-h-screen bg-orange-50">
      <Navigation items={items}/>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout