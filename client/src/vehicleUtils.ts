import { MovementAction } from "./models/MovementAction";
import { PlayerVehicle } from "./models/PlayerVehicle";

export const moveVehicle = (vehicle: PlayerVehicle): PlayerVehicle => {
  const angleInRadians = vehicle.angleInDegrees * (Math.PI / 180);

  switch (vehicle.movementAction) {
    case MovementAction.MOVE_FORWARD:
      return {
        ...vehicle,
        xPosition: vehicle.xPosition + Math.cos(angleInRadians) * 10,
        yPosition: vehicle.yPosition + Math.sin(angleInRadians) * 10,
      };
    case MovementAction.TURNING_LEFT:
      return {
        ...vehicle,
        angleInDegrees: vehicle.angleInDegrees + 45,
        movementAction: MovementAction.MOVE_FORWARD,
      };
    case MovementAction.TURNING_RIGHT:
      return {
        ...vehicle,
        angleInDegrees: vehicle.angleInDegrees - 45,
        movementAction: MovementAction.MOVE_FORWARD,
      };
    default:
      throw new Error("Invalid movement action");
  }
};
