import {
  Canvas,
  Group,
  Rect,
  RoundedRect,
  SweepGradient,
  useTouchHandler,
  useValue,
  vec,
} from "@shopify/react-native-skia";
import { StatusBar } from "expo-status-bar";
import { Dimensions, StyleSheet, View } from "react-native";
import RoundedItem from "./components/rounded-item";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
const SQUARES_AMOUNT_HORIZONTAL = 10;
const SQUARES_CONTAINER_SIZE = SCREEN_WIDTH / SQUARES_AMOUNT_HORIZONTAL;
const PADDING = 10;
const SQUARE_SIZE = SQUARES_CONTAINER_SIZE - PADDING;
const SQUARES_AMOUNT_VERTICAL =
  Math.floor(SCREEN_HEIGHT / SQUARES_CONTAINER_SIZE) - 3;

const CANVAS_WIDTH = SCREEN_WIDTH;
const CANVAS_HEIGHT = SQUARES_AMOUNT_VERTICAL * SQUARES_CONTAINER_SIZE;

export default function App() {
  const touchedPoint = useValue(null);

  const progress = useValue(0);

  const touchHandler = useTouchHandler({
    onStart: (event) => {
      runTiming(progress, 1, { duration: 300 });
      touchedPoint.current = { x: event.x, y: event.y };
    },
    onActive: (event) => {
      touchedPoint.current = { x: event.x, y: event.y };
    },
    onEnd: () => {
      runTiming(progress, 0, { duration: 300 });
      touchedPoint.current = null;
    },
  });

  return (
    <View style={styles.container}>
      <Canvas
        style={{
          width: CANVAS_WIDTH,
          height: CANVAS_HEIGHT,
        }}
        onTouch={touchHandler}
      >
        <Group>
          {new Array(SQUARES_AMOUNT_HORIZONTAL).fill(0).map((_, i) => {
            return new Array(SQUARES_AMOUNT_VERTICAL).fill(0).map((_, j) => {
              return (
                <RoundedItem
                  progress={progress}
                  point={touchedPoint}
                  key={`i${i}-j${j}`}
                  x={i * SQUARES_CONTAINER_SIZE + PADDING / 2}
                  y={j * SQUARES_CONTAINER_SIZE + PADDING / 2}
                  width={SQUARE_SIZE}
                  height={SQUARE_SIZE}
                />
              );
            });
          })}
          <SweepGradient
            c={vec(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2)}
            colors={["cyan", "magenta", "yellow", "cyan"]}
          />
        </Group>
      </Canvas>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
});
