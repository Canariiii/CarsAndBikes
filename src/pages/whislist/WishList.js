import { useEffect, useState } from "react";
import RideService from "../../services/wishlist.service";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./WhishList.css";

function WhishList() {
  const [vehicle, setVehicle] = useState([]);
  const [inputBrand, setInputBrand] = useState("");
  const [inputModel, setInputModel] = useState("");

  const getAllVehicles = () => {
    RideService.getAllVehicles().then((data) => {
      let allVehicles = [];
      data.forEach((item) => {
        allVehicles.push({
          key: item.key,
          brand: item.val().brand,
          model: item.val().model,
        });
      });
      setVehicle(allVehicles);
    });
  };

  useEffect(() => {
    getAllVehicles();
  }, []);

  const removeVehicle = (key) => {
    RideService.removeVehicle(key).then(() => {
      getAllVehicles();
    });
  };

  const addVehicle = (e) => {
    e.preventDefault();
    const brand = inputBrand;
    const model = inputModel;
    RideService.addVehicle(brand, model).then(() => {
      getAllVehicles();
      setInputBrand("");
      setInputModel("");
    });
  };

  return (
    <>
      <div>
        <Header />
      </div>
      <h1>Home</h1>
      <form onSubmit={addVehicle}>
        <input
          type="text"
          name="brand"
          value={inputBrand}
          onChange={(e) => setInputBrand(e.target.value)}
          placeholder="Brand"
        />
        <input
          type="text"
          name="model"
          value={inputModel}
          onChange={(e) => setInputModel(e.target.value)}
          placeholder="Model"
        />
        <button type="submit">Add</button>
      </form>

      <p className="question">¿Qué vehículo te gustaría ver en nuestra web?</p>
      <div className="vehicles-container">
        {vehicle.map((b) => (
          <div className="vehicle" key={b.key}>
            <p>
              {b.brand} {b.model}
            </p>
            <button onClick={() => removeVehicle(b.key)}>Delete</button>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default WhishList;
