import { CustomIcon } from "@/components";
import { RootDrawerParamList, RootStackParamList } from "@/routes";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { PieChart } from "react-native-gifted-charts";
import * as S from "./styles";

export const HomeScreen: React.FC<{
  navigation: DrawerNavigationProp<RootStackParamList & RootDrawerParamList>;
}> = (props) => {
  const { navigate } =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList & RootDrawerParamList>
    >();
  const { navigation } = props;

  const chart = () => {
    const pieData = [
      {
        value: 47,
        color: "#009FFF",
        gradientCenterColor: "#006DFF",
        onPress: () => {
          console.log("onPress");
        },
      },
      { value: 40, color: "#93FCF8", gradientCenterColor: "#3BE9DE" },
      { value: 16, color: "#BDB2FA", gradientCenterColor: "#8F80F3" },
      { value: 3, color: "#FFA5BA", gradientCenterColor: "#FF7F97" },
    ];

    const renderDot = (color) => {
      return (
        <View
          style={{
            height: 10,
            width: 10,
            borderRadius: 5,
            backgroundColor: color,
            marginRight: 10,
          }}
        />
      );
    };

    const renderLegendComponent = () => {
      return (
        <>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginBottom: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                // width: "100%",
                flex: 1,
                marginRight: 20,
              }}
            >
              {renderDot("#006DFF")}
              <Text style={{ color: "white" }}>Excellent: 47%</Text>
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", flex: 1 }}
            >
              {renderDot("#8F80F3")}
              <Text style={{ color: "white" }}>Okay: 16%</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                flex: 1,
                marginRight: 20,
              }}
            >
              {renderDot("#3BE9DE")}
              <Text style={{ color: "white" }}>Good: 40%</Text>
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", flex: 1 }}
            >
              {renderDot("#FF7F97")}
              <Text style={{ color: "white" }}>Poor: 3%</Text>
            </View>
          </View>
        </>
      );
    };

    return (
      <View
        style={{
          margin: 20,
          padding: 16,
          borderRadius: 20,
          backgroundColor: "#232B5D",
        }}
      >
        <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
          Performance
        </Text>
        <View style={{ padding: 20, alignItems: "center" }}>
          <PieChart
            data={pieData}
            donut
            showGradient
            sectionAutoFocus
            radius={90}
            innerRadius={60}
            innerCircleColor={"#232B5D"}
            centerLabelComponent={() => {
              return (
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Text
                    style={{
                      fontSize: 22,
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    47%
                  </Text>
                  <Text style={{ fontSize: 14, color: "white" }}>
                    Excellent
                  </Text>
                </View>
              );
            }}
          />
        </View>
        {renderLegendComponent()}
      </View>
    );
  };

  return (
    <S.Container>
      <S.Header>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <CustomIcon name="Menu" />
        </TouchableOpacity>
        <S.HeaderButtonsContainer>
          <TouchableOpacity onPress={() => {}}>
            <CustomIcon name="Bell" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <CustomIcon name="User" />
          </TouchableOpacity>
        </S.HeaderButtonsContainer>
      </S.Header>
      <S.Body>
        {/* <TouchableOpacity
          onPress={() => {
            // navigate("Login");
          }}
        >
          <S.Text>Home</S.Text>
        </TouchableOpacity> */}
        <S.Card></S.Card>
        <S.ContainerMiniCards>
          <S.MiniCard></S.MiniCard>
          <S.MiniCard></S.MiniCard>
          <S.MiniCard></S.MiniCard>
          <S.MiniCard></S.MiniCard>
        </S.ContainerMiniCards>
        {/* {chart()} */}
      </S.Body>
    </S.Container>
  );
};
