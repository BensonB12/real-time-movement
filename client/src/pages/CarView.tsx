import { CarIcon } from "../components/CarIcon";
import { PlayerVehicle } from "../models/PlayerVehicle";

export const CarView = (car: PlayerVehicle) => {
  return (
    <div
      style={{
        position: "fixed",
        rotate: `${car.angleInDegrees}deg`,
        fill: "#999999",
        width: `10px`,
        height: `10px`,
        top: `${car.xPosition}px`,
        left: `${car.yPosition}px`,
      }}
    >
      <CarIcon />
    </div>
  );
};
