import ScreenContainer from "@/src/components/common-components/ScreenContainer";
import ScreenIndicatorComponent from "@/src/components/common-components/ScreenIndicatorComponent";
import { DashboardScreens } from "@/src/lib/constants/constant";
import { useGlobalStyles } from "@/src/styles/GlobalStyles";
import React, { useState } from "react";
import { View } from "react-native";
import PagerView from "react-native-pager-view";

const home = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const styles = { ...useGlobalStyles() };

  return (
    <ScreenContainer
      scrollable
      padding={0}
      paddingHorizontal={10}
      paddingVertical={5}
    >
      <View style={[{ flex: 1 }]}>
        {/* Header  */}
        <View style={[styles.indicatorContainer]}>
          {DashboardScreens.map((screen, index) => {
            return (
              <ScreenIndicatorComponent
                title={screen.title}
                showTitle={index == pageIndex}
                key={index}
              />
            );
          })}
        </View>
        {/* Page View */}
        <PagerView
          style={{ flex: 1 }}
          initialPage={0}
          onPageSelected={(e) => setPageIndex(e.nativeEvent.position)}
        >
          {DashboardScreens.map((screen, index) => (
            <View style={{ flex: 1 }} key={index}>
              {screen.component}
            </View>
          ))}
        </PagerView>
      </View>
    </ScreenContainer>
  );
};

export default home;
