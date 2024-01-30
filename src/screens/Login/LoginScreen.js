import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

// import LoginSVG from '../../../assets/images/misc/login.svg';
// import GoogleSVG from '../../../assets/images/misc/google.svg';
// import FacebookSVG from '../../../assets/images/misc/facebook.svg';
// import TwitterSVG from '../../../assets/images/misc/twitter.svg';

import CustomButton from "../../components/CustomButton";
import InputField from "../../components/InputField";

import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../firebase";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(null);

  // const auth = getAuth()

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        setError("Please enter both email and password.");
        return;
      }

      await signInWithEmailAndPassword(auth, email, password);
      navigation.replace("Home");
      console.log("Login successful");
    } catch (error) {
      setError("Invalid email or password. Please try again.");
      console.error(error.message);
    }
  };

  const handleForgotPassword = async () => {
    try {
      if (!email) {
        setError('Please enter your email to reset the password.');
        return;
      }

      await sendPasswordResetEmail(auth, email);
      setError(null); // Clear any existing error
      Alert.alert('Password Reset Email Sent', 'Check your email for further instructions.');
    } catch (error) {
      setError('Failed to send password reset email. Please check your email and try again.');
      console.error(error.message);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <View style={{ paddingHorizontal: 25 }}>
        <View style={{ alignItems: "center" }}>
          {/* <LoginSVG
            height={300}
            width={300}
            style={{transform: [{rotate: '-5deg'}]}}
          /> */}
        </View>

        <Text
          style={{
            fontFamily: "Roboto-Medium",
            fontSize: 28,
            fontWeight: "500",
            color: "#333",
            marginBottom: 30,
          }}
        >
          Login
        </Text>

        {error && (
          <Text style={{ color: "red", textAlign: "center", marginBottom: 15 }}>
            {error}
          </Text>
        )}

        <InputField
          label={"Email ID"}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          keyboardType="email-address"
          onChangeText={setEmail}
        />

        <InputField
          label={"Password"}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          inputType="password"
          fieldButtonLabel={"Forgot?"}
          fieldButtonFunction={handleForgotPassword}
          onChangeText={setPassword}
        />
        <CustomButton label={"Login"} onPress={handleLogin} />
        <Text style={{ textAlign: "center", color: "#666", marginBottom: 30 }}>
          Or, login with ...
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 30,
          }}
        >
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: "#ddd",
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}
          >
            {/* <GoogleSVG height={24} width={24} /> */}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: "#ddd",
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}
          >
            {/* <FacebookSVG height={24} width={24} /> */}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: "#ddd",
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}
          >
            {/* <TwitterSVG height={24} width={24} /> */}
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 30,
          }}
        >
          <Text>New to the app?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={{ color: "#AD40AF", fontWeight: "700" }}>
              {" "}
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
