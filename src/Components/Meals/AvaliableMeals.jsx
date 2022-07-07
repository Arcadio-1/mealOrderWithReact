import { useEffect, useState } from "react";
import MealItem from "./mealItem/MealItem";
// const meals2 = [
//   {
//     id: 1,
//     name: "sushi",
//     desc: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: 2,
//     name: "Schnitzel",
//     desc: "A german specialty!",
//     price: 18.99,
//   },
//   {
//     id: 3,
//     name: "Barbecue Burger",
//     desc: "American, raw, meaty",
//     price: 60,
//   },
//   {
//     id: 4,
//     name: "Green Bowl",
//     desc: "Healthy...and green...",
//     price: 12.99,
//   },
// ];

const AvaliableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const tryAgainHandler = useCallback(() => {
  //   const trying = true;
  // }, []);
  useEffect(() => {
    // const postList = async () => {
    //   const request = await fetch(
    //     "https://vast-verve-344100-default-rtdb.firebaseio.com/meals.json",
    //     {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify(meals2),
    //     }
    //   );
    //   const respose = request.ok;
    //   console.log(respose);
    // };
    const getMeals = async () => {
      setIsLoading(true);
      try {
        const request = await fetch(
          "https://vast-verve-344100-default-rtdb.firebaseio.com/meals.json"
        );
        if (!request.ok) {
          throw new Error("server is Down");
        }
        const data = await request.json();

        const mealsList = [];

        for (const key in data) {
          mealsList.push({
            id: key,
            name: data[key].name,
            desc: data[key].desc,
            price: data[key].price,
          });
        }
        setMeals(mealsList);
      } catch (error) {
        console.log(error);
        setError(error);
      }
      setIsLoading(false);
    };
    // postList();
    getMeals();
  }, []);

  const list = meals.map((meal) => {
    return <MealItem key={meal.id} meal={meal} />;
  });
  return (
    <ul className="meals-list">
      {!isLoading && error && <p>{error}</p>}
      {isLoading && !error && <p className="loading">loading...</p>}
      {!isLoading && !error && list}
    </ul>
  );
};
export default AvaliableMeals;
