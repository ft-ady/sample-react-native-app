import React, { Component } from "react";
import {
  NavigationInjectedProps,
  NavigationEventSubscription
} from "react-navigation";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  StatusBar,
  TextInput,
  SafeAreaView,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image
} from "react-native";
interface Props extends NavigationInjectedProps {}
export default class Login extends Component<Props> {
  // keyboardDidShowListener: any;
  // keyboardDidHideListener: any;
  // keyboardPresent: Boolean;
  constructor(props: Props) {
    super(props);
    console.log(props);
    this.state = {};
    this._onPressFPButton = this._onPressFPButton.bind(this);
  }
  // componentWillMount() {
  //   this.keyboardDidShowListener = Keyboard.addListener(
  //     "keyboardDidShow",
  //     this._keyboardToggle(true)
  //   );
  //   this.keyboardDidHideListener = Keyboard.addListener(
  //     "keyboardDidHide",
  //     this._keyboardToggle(false)
  //   );
  // }

  // componentWillUnmount() {
  //   this.keyboardDidShowListener.remove();
  //   this.keyboardDidHideListener.remove();
  // }

  // _keyboardToggle(val) {
  //   this.keyboardPresent = val;
  // }
  _onPressFPButton() {
    console.log("Damn someone pressed me");
    console.log(this.props.navigation.navigate);

    this.props.navigation.navigate("ForgotPassword");
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <KeyboardAvoidingView style={styles.container}>
          <TouchableWithoutFeedback
            style={styles.container}
            onPress={Keyboard.dismiss}
          >
            <View style={styles.logoContainer}>
              <View style={styles.logoContainer}>
                <Image
                  source={require("./../../../static/img/rnicon.png")}
                  style={styles.logo}
                />
                <Text style={styles.title}>Manage your placements.</Text>
              </View>
              <View style={styles.infoContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your email"
                  placeholderTextColor="rgba(255,255,255, .8)"
                  keyboardType="email-address"
                  returnKeyType="next"
                  autoCorrect={false}
                  onSubmitEditing={() => this.refs.txtPassword.focus()}
                />

                <TextInput
                  style={styles.input}
                  placeholder="Enter password"
                  placeholderTextColor="rgba(255,255,255, .8)"
                  returnKeyType="go"
                  autoCorrect={false}
                  secureTextEntry
                  ref={"txtPassword"}
                />
                <TouchableOpacity style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.infoContainer}>
                <Text
                  style={styles.ForgotPassword}
                  onPress={this._onPressFPButton}
                >
                  Forgot password?
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(32,53, 70)",
    flexDirection: "column"
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  logo: {
    width: 108,
    height: 56
  },
  title: {
    color: "#f7c744",
    fontSize: 18,
    textAlign: "center",
    marginTop: 5,
    opacity: 0.9
  },
  infoContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 20,
    height: 200,
    padding: 20
    // backgroundColor: "red"
  },
  input: {
    height: 40,
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#fff",
    marginBottom: 20,
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: "#f7c744",
    paddingVertical: 15
  },
  buttonFP: {
    backgroundColor: "#f7c744"
    // paddingVertical:
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "rgb(32,53, 70)",
    fontSize: 18
  },
  ForgotPassword: {
    left: 0,
    right: 0,
    bottom: 20,
    color: "yellow"
  }
});
