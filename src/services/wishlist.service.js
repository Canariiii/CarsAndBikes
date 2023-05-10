import { ref, get, remove, push } from "firebase/database";
import database from "../Firebase";

const rideref = ref(database, "/ride");

const getAllVehicles = () => {
  return get(rideref);
}

const removeVehicle = (key) => {
  const vehicleToDeleteRef = ref(database, `/ride/${key}`);
  return remove(vehicleToDeleteRef);
}

const addVehicle = (brand, model) => {
  return push(rideref, {
    brand: brand,
    model: model
  });
}

export default { getAllVehicles, removeVehicle, addVehicle };