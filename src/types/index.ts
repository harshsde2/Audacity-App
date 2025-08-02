// types/index.ts
export interface App {
  id: number;
  name: string;
  category: string;
  rating: number;
  price: string;
  image: string;
  color: string;
}

export interface CardLayout {
  x: number;
  y: number;
  width: number;
  height: number;
}

export type RootStackParamList = {
  Home: undefined;
  Detail: {
    app: App;
    cardLayout: CardLayout;
  };
};
