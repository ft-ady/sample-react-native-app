import React from "react";
import {
  AppRegistry,
  Image,
  StatusBar,
  ImageBackground,
  StyleSheet,
  View
} from "react-native";
import {
  Container,
  Header,
  Title,
  Left,
  Icon,
  Right,
  Button,
  Body,
  Content,
  Text,
  Card,
  CardItem
} from "native-base";
import JobScreenSwitcher from "./../../Navigation/InnerScreenSwitcher/JobsScreenSwitcher/index";
class NewsFeedMain extends React.Component {
  changeHandler() {
    console.log("open");
  }
  render() {
    return (
      <Text style={{ color: "green", marginTop: 5, marginBottom: 5 }}>
        Setting
      </Text>
    );
  }
}
export default NewsFeedMain;
