import { ColorOption } from "./ColorOption";
import { MovementAction } from "./MovementAction";

export interface PlayerVehicle {
    id: number,
    xPosition: number,
    yPosition: number,
    angleInDegrees: number,
    movementAction: MovementAction,
    color?: ColorOption
}