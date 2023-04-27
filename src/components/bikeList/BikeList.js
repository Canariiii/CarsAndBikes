import { useEffect, useState } from "react";
import CarService from "../../services/bike.service";
import "./BikeList.css";

function BikeList() {
  const [bikes, setBikes] = useState([]);
  const [query, setQuery] = useState("");

  const getBikes = () => {
    const allBikes = CarService.getBikes();
    setBikes(allBikes);
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;
    setQuery(searchValue);
  };

  const showBikes = () => {
    return bikes
      .filter((b) => b.brand.toLowerCase().includes(query.toLowerCase()))
      .map((b) => {
        return (
          <div className="bike-list-item" key={b.id}>
            <p>
              {b.brand} - {b.model} - {b.price}
            </p>
            <div className="bike-list-img">
              <img src={`/assets/img/bikesimg/${b.img}`} alt="bike" />
              <div className="buttons-container">
                <button onClick={() => window.open(`/assets/img/bikesimg/${b.img}`, "_blank")}>Ver en grande</button>
                <button onClick={() => console.log(`Compraste la moto: ${b.brand} - ${b.model}`)}>Comprar</button>
              </div>
            </div>
          </div>
        );
      });
  };

  useEffect(() => {
    getBikes();
  }, []);

  return (
    <>
      <input type="search" onChange={handleChange} />
      <div className="main-container">
        <div className="bike-list-container">{showBikes()}</div>
      </div>
    </>
  );
}

export default BikeList;
