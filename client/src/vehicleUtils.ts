import { MOVEMENT_VELOCITY } from "./constants";
import { MovementAction } from "./models/MovementAction";
import { PlayerVehicle } from "./models/PlayerVehicle";

export const moveVehicle = (vehicle: PlayerVehicle): PlayerVehicle => {
  const angleInRadians = vehicle.angleInDegrees * (Math.PI / 180);

  switch (vehicle.movementAction) {
    case MovementAction.MOVE_FORWARD:
      return {
        ...vehicle,
        xPosition:
          vehicle.xPosition +
          Math.round(Math.cos(angleInRadians) * MOVEMENT_VELOCITY),
        yPosition:
          vehicle.yPosition +
          Math.round(Math.sin(angleInRadians) * MOVEMENT_VELOCITY),
        movementAction: MovementAction.DO_NOTHING,
      };
    case MovementAction.TURNING_LEFT:
      return {
        ...vehicle,
        angleInDegrees: degreesWithinCircle(vehicle.angleInDegrees + 45),
        movementAction: MovementAction.DO_NOTHING,
      };
    case MovementAction.TURNING_RIGHT:
      return {
        ...vehicle,
        angleInDegrees: degreesWithinCircle(vehicle.angleInDegrees - 45),
        movementAction: MovementAction.DO_NOTHING,
      };
    case MovementAction.DO_NOTHING:
      return vehicle;
    default:
      throw new Error("Invalid movement action");
  }
};

const degreesWithinCircle = (degree: number): number => {
  while (degree < 0) {
    degree += 360;
  }
  return degree % 360;
};
