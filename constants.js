import { Dimensions } from "react-native";

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
  Dimensions.get("window");
export const SQUARES_AMOUNT_HORIZONTAL = 8;
export const SQUARES_CONTAINER_SIZE = SCREEN_WIDTH / SQUARES_AMOUNT_HORIZONTAL;
export const PADDING = 20;
export const SQUARE_SIZE = SQUARES_CONTAINER_SIZE - PADDING;
export const SQUARES_AMOUNT_VERTICAL =
  Math.floor(SCREEN_HEIGHT / SQUARES_CONTAINER_SIZE) - 3;

export const CANVAS_WIDTH = SCREEN_WIDTH;
export const CANVAS_HEIGHT = SQUARES_AMOUNT_VERTICAL * SQUARES_CONTAINER_SIZE;
export const MAX_DISTANCE = Math.sqrt(CANVAS_WIDTH ** 2 + CANVAS_HEIGHT ** 2);
