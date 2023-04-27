import { useEffect, useState } from "react";
import CarService from "../../services/car.service";
import "./CarList.css";

function CarList() {
  const [cars, setCars] = useState([]);
  const [query, setQuery] = useState("");

  const getCars = () => {
    const allCars = CarService.getCars();
    setCars(allCars);
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;
    setQuery(searchValue);
  };

  const showCars = () => {
    return cars
      .filter((c) => c.brand.toLowerCase().includes(query.toLowerCase()))
      .map((c) => {
        return (
          <div className="car-list-item" key={c.id}>
            <p>
              {c.brand} - {c.model} - {c.price}
            </p>
            <div className="car-list-img">
              <img src={`/assets/img/carsimg/${c.img}`} alt="car" />
              <div className="buttons-container">
                <button onClick={() => window.open(`/assets/img/carsimg/${c.img}`, "_blank")}>Ver en grande</button>
                <button onClick={() => console.log(`Compraste el coche: ${c.brand} - ${c.model}`)}>Comprar</button>
              </div>
            </div>
          </div>
        );
      });
  };

  useEffect(() => {
    getCars();
  }, []);

  return (
    <>
      <input type="search" onChange={handleChange} />
      <div className="main-container">
        <div className="car-list-container">{showCars()}</div>
      </div>
    </>
  );
}

export default CarList;
