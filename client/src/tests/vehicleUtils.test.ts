import { expect, test } from "vitest";
import { PlayerVehicle } from "../models/PlayerVehicle";
import { MovementAction } from "../models/MovementAction";
import { ColorOption } from "../models/ColorOption";
import { moveVehicle } from "../vehicleUtils";

const baseVehicle = {
  id: 0,
  xPosition: 0,
  yPosition: 0,
  angleInDegrees: 0,
  movementAction: MovementAction.MOVE_FORWARD,
  color: ColorOption.PURPLE,
};

test("A user can turn the vehicle left", () => {
  const startingVehicle: PlayerVehicle = {
    ...baseVehicle,
    movementAction: MovementAction.TURNING_LEFT,
  };
  const expectedVehicle: PlayerVehicle = {
    ...baseVehicle,
    angleInDegrees: 45,
  };
  expect(moveVehicle(startingVehicle)).toStrictEqual(expectedVehicle);
});
