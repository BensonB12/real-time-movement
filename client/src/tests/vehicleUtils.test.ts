import { expect, test } from "vitest";
import { PlayerVehicle } from "../models/PlayerVehicle";
import { MovementAction } from "../models/MovementAction";
import { ColorOption } from "../models/ColorOption";
import { moveVehicle } from "../vehicleUtils";
import { MOVEMENT_VELOCITY } from "../constants";

const baseVehicle = {
  id: 0,
  xPosition: 0,
  yPosition: 0,
  angleInDegrees: 0,
  movementAction: MovementAction.DO_NOTHING,
  color: ColorOption.BLACK,
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

test("A user can turn the vehicle right", () => {
  const startingVehicle: PlayerVehicle = {
    ...baseVehicle,
    movementAction: MovementAction.TURNING_RIGHT,
  };
  const expectedVehicle: PlayerVehicle = {
    ...baseVehicle,
    angleInDegrees: 360 - 45,
  };
  expect(moveVehicle(startingVehicle)).toStrictEqual(expectedVehicle);
});

test("A user can choose not to turn the vehicle", () => {
  expect(moveVehicle(baseVehicle)).toStrictEqual(baseVehicle);
});

test("A user can Accelerate on the x axis", () => {
  const startingVehicle: PlayerVehicle = {
    ...baseVehicle,
    movementAction: MovementAction.MOVE_FORWARD,
  };
  const expectedVehicle: PlayerVehicle = {
    ...baseVehicle,
    xPosition: MOVEMENT_VELOCITY,
  };
  expect(moveVehicle(startingVehicle)).toStrictEqual(expectedVehicle);
});

test("A user can Accelerate on the y axis", () => {
  const startingVehicle: PlayerVehicle = {
    ...baseVehicle,
    angleInDegrees: 90,
    movementAction: MovementAction.MOVE_FORWARD,
  };
  const expectedVehicle: PlayerVehicle = {
    ...baseVehicle,
    angleInDegrees: 90,
    yPosition: MOVEMENT_VELOCITY,
  };
  expect(moveVehicle(startingVehicle)).toStrictEqual(expectedVehicle);
});

test("A user can move on a 45 degree angle", () => {
  const startingVehicle: PlayerVehicle = {
    ...baseVehicle,
    angleInDegrees: 45,
    movementAction: MovementAction.MOVE_FORWARD,
  };

  const movedVehicle = moveVehicle(startingVehicle);

  expect(movedVehicle.id).toStrictEqual(startingVehicle.id);
  expect(movedVehicle.angleInDegrees).toStrictEqual(
    startingVehicle.angleInDegrees
  );
  expect(movedVehicle.color).toStrictEqual(startingVehicle.color);
  expect(movedVehicle.movementAction).toStrictEqual(MovementAction.DO_NOTHING);
  expect(movedVehicle.xPosition).toStrictEqual(movedVehicle.yPosition);
  expect(movedVehicle.xPosition).greaterThan(startingVehicle.xPosition);
  expect(movedVehicle.yPosition).greaterThan(startingVehicle.yPosition);
});

test("A user can move on a 225 degree angle", () => {
  const startingVehicle: PlayerVehicle = {
    ...baseVehicle,
    angleInDegrees: 225,
    movementAction: MovementAction.MOVE_FORWARD,
  };

  const movedVehicle = moveVehicle(startingVehicle);

  expect(movedVehicle.id).toStrictEqual(startingVehicle.id);
  expect(movedVehicle.angleInDegrees).toStrictEqual(
    startingVehicle.angleInDegrees
  );
  expect(movedVehicle.color).toStrictEqual(startingVehicle.color);
  expect(movedVehicle.movementAction).toStrictEqual(MovementAction.DO_NOTHING);
  expect(movedVehicle.xPosition).toStrictEqual(movedVehicle.yPosition);
  expect(movedVehicle.xPosition).lessThan(startingVehicle.xPosition);
  expect(movedVehicle.yPosition).lessThan(startingVehicle.yPosition);
});

test("A user can move on a -45 degree angle", () => {
  const startingVehicle: PlayerVehicle = {
    ...baseVehicle,
    angleInDegrees: -45,
    movementAction: MovementAction.MOVE_FORWARD,
  };

  const movedVehicle = moveVehicle(startingVehicle);

  expect(movedVehicle.id).toStrictEqual(startingVehicle.id);
  expect(movedVehicle.angleInDegrees).toStrictEqual(
    startingVehicle.angleInDegrees
  );
  expect(movedVehicle.color).toStrictEqual(startingVehicle.color);
  expect(movedVehicle.movementAction).toStrictEqual(MovementAction.DO_NOTHING);
  expect(movedVehicle.xPosition).toStrictEqual(-1 * movedVehicle.yPosition);
  expect(movedVehicle.xPosition).greaterThan(startingVehicle.xPosition);
  expect(movedVehicle.yPosition).lessThan(startingVehicle.yPosition);
});
