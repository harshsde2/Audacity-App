import { Key, ReactElement, ReactNode } from "react";
import { SharedValue } from "react-native-reanimated";

export type ShuffleCardItem = {
  id: Key;
  title: string;
  heading: string;
  percent: string;
  description: string;
};

export type ShuffleCardProps = {
  cardItem: ShuffleCardItem;
  id: number;
};
export type GestureCardProps = {
  children: ReactNode;
  id: any;
  positions: SharedValue<Positions>;
};

export type ShuffleCardListComponentProps = {
  children: ReactElement<{ id: string }>[];
};
export type Positions = {
  [id: string]: number;
};
