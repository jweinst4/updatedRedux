import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

import { connect } from "react-redux";

const styles = StyleSheet.create({
  clothingTypeContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center"
  },
  clothingTypeLabel: {
    width: "30%",
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    fontWeight: "600"
  },
  clothingTypeLabel2: {
    width: "45%",
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    fontWeight: "600"
  }
});

class ClothingType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ width: "100%" }}>
        <View style={styles.clothingTypeContainer}>
          <Text
            style={
              this.props.clothingType === "Tee"
                ? {
                    ...styles.clothingTypeLabel,
                    backgroundColor: "lightblue"
                  }
                : styles.clothingTypeLabel
            }
            onPress={() => {
              this.props.handleClothingType("Tee");
            }}
          >
            Tee
          </Text>
          <Text
            style={
              this.props.clothingType === "Jersey"
                ? {
                    ...styles.clothingTypeLabel,
                    backgroundColor: "lightblue"
                  }
                : styles.clothingTypeLabel
            }
            onPress={() => {
              this.props.handleClothingType("Jersey");
            }}
          >
            Jersey
          </Text>
          <Text
            style={
              this.props.clothingType === "Polo"
                ? {
                    ...styles.clothingTypeLabel,
                    backgroundColor: "lightblue"
                  }
                : styles.clothingTypeLabel
            }
            onPress={() => {
              this.props.handleClothingType("Polo");
            }}
          >
            Polo
          </Text>
        </View>
        <View style={styles.clothingTypeContainer}>
          <Text
            style={
              this.props.clothingType === "Sweatshirt"
                ? {
                    ...styles.clothingTypeLabel2,
                    backgroundColor: "lightblue"
                  }
                : styles.clothingTypeLabel2
            }
            onPress={() => {
              this.props.handleClothingType("Sweatshirt");
            }}
          >
            Sweatshirt
          </Text>
          <Text
            style={
              this.props.clothingType === "Hooded Sweatshirt"
                ? {
                    ...styles.clothingTypeLabel2,
                    backgroundColor: "lightblue"
                  }
                : styles.clothingTypeLabel2
            }
            onPress={() => {
              this.props.handleClothingType("Hooded Sweatshirt");
            }}
          >
            Hooded Sweatshirt
          </Text>
        </View>
      </View>
    );
  }
}

export default connect()(ClothingType);
