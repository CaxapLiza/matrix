import React from "react";
import Navigation from "./Navigation";
import {Outlet} from "react-router";

const MatrixLayout = () => {
  const items = [
    {title: "Среднее арифметическое", href: "/matrix/mean"},
    {title: "Ранг", href: "/matrix/rank"},
    {title: "Вычитание", href: "/matrix/subtraction"},
  ]

  return (
    <div>
      <Navigation items={items}/>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default MatrixLayout