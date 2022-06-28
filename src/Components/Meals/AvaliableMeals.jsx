import MealItem from "./mealItem/MealItem";
const meals = [
  {
    id: 1,
    name: "sushi",
    desc: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: 2,
    name: "Schnitzel",
    desc: "A german specialty!",
    price: 18.99,
  },
  {
    id: 3,
    name: "Barbecue Burger",
    desc: "American, raw, meaty",
    price: 60,
  },
  {
    id: 4,
    name: "Green Bowl",
    desc: "Healthy...and green...",
    price: 12.99,
  },
];
const AvaliableMeals = () => {
  const list = meals.map((meal) => {
    return <MealItem key={meal.id} meal={meal} />;
  });
  return <ul className="meals-list">{list}</ul>;
};
export default AvaliableMeals;
