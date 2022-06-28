import { Fragment } from "react";
import AvaliableMeals from "./AvaliableMeals";
import MealsSummry from "./MealsSummry";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummry />
      <AvaliableMeals />
    </Fragment>
  );
};
export default Meals;
