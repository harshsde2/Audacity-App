import { useRef } from "react";
import { runOnJS, useSharedValue, withSpring } from "react-native-reanimated";

export const useSharedTransition = () => {
  const progress = useSharedValue(0);
  const cardRef = useRef<any>(null);

  const startTransition = (callback?: () => void) => {
    progress.value = withSpring(
      1,
      {
        damping: 20,
        stiffness: 90,
      },
      () => {
        if (callback) {
          runOnJS(callback)();
        }
      }
    );
  };

  const reverseTransition = (callback?: () => void) => {
    progress.value = withSpring(
      0,
      {
        damping: 20,
        stiffness: 90,
      },
      () => {
        if (callback) {
          runOnJS(callback)();
        }
      }
    );
  };

  return {
    progress,
    cardRef,
    startTransition,
    reverseTransition,
  };
};
