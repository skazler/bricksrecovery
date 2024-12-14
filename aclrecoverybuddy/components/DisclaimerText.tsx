import React from "react";
import "./../styles.css";
import { StyleSheet } from "react-native";

const DisclaimerText: React.FC = () => {
  return (
    <div style={styles.disclaimerTextbox}>
      Disclaimer: The material contained in this app is for informational purposes only. This is not intended to be a substitute for professional medical treatment. Never disregard professional medical advice because of something you have read on this app.
    </div>
  );
};

const styles = StyleSheet.create({
  disclaimerTextbox: {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    padding: 10,
    textAlign: "center",
    fontSize: 12,
    color: "#666",
  }
})

export default DisclaimerText;
