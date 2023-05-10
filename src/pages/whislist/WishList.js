import { useEffect, useState } from "react";
import RideService from "../../services/wishlist.service";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./WhishList.css";


function WhishList() {

  const [vehicle, setVehicle] = useState([]);

  const getAllVehicles = () => {
    RideService.getAllVehicles().then(data => {
      let allVehicles = [];
      data.forEach(item => {
        allVehicles.push({
          key: item.key,
          brand: item.val().brand,
          model: item.val().model
        })
        setVehicle(allVehicles);
      });
    });
  }

  useEffect(() => {
    getAllVehicles();
  }, []);

  const removeVehicle = (key) => {
    RideService.removeVehicle(key).then(() => {
      getAllVehicles();
    });
  }

  const addVehicle = (e) => {
    e.preventDefault();
    const brand = e.target.brand.value;
    const model = e.target.model.value;
    RideService.addVehicle(brand, model).then(() => {
      getAllVehicles();
    });
  }

  return (

    <>
      <div>
        <Header />
      </div>
      <h1>Home</h1>
      <form onSubmit={addVehicle}>
        <input type="text" name="brand" />
        <input type="text" name="model" />
        <button type="submit">Add</button>
      </form>

      {
        vehicle.map(b => <p key={b.key}>{b.brand} {b.model}<button onClick={() => removeVehicle(b.key)}>Delete</button></p>)
      }
      < Footer />
    </>

  );
}

export default WhishList;