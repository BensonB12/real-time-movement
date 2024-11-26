import { expect, test } from "vitest";
import { PlayerVehicle } from "../models/PlayerVehicle";
import { MovementAction } from "../models/MovementAction";
import { ColorOption } from "../models/ColorOption";
import { moveVehicle } from "../vehicleUtils";

test("A user can turn the vehicle left", () => {
  const startingVehicle: PlayerVehicle = {
    id: 0,
    xPosition: 0,
    yPosition: 0,
    angleInDegrees: 0,
    movementAction: MovementAction.TURNING_LEFT,
    color: ColorOption.PURPLE,
  };
  const expectedVehicle: PlayerVehicle = {
    id: 0,
    xPosition: 0,
    yPosition: 0,
    angleInDegrees: 45,
    movementAction: MovementAction.MOVE_FORWARD,
    color: ColorOption.PURPLE,
  };
  expect(moveVehicle(startingVehicle)).toStrictEqual(expectedVehicle);
});
