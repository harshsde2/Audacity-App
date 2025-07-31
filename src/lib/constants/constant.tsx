import ChatScreen from "@/src/components/screens/ChatScreen";
import HomeScreen from "@/src/components/screens/HomeScreen";
import PortfolioScreen from "@/src/components/screens/PortfolioScreen";

export const DashboardScreens = [
  {
    id: 0,
    title: "Home",
    component: <HomeScreen />,
  },
  {
    id: 1,
    title: "Chat",
    component: <ChatScreen />,
  },
  {
    id: 2,
    title: "Portfolio",
    component: <PortfolioScreen />,
  },
];
