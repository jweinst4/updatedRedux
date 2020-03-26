import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { connect } from "react-redux";

const styles = StyleSheet.create({
  clothingTypeContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center"
  },
  clothingTypeLabel: {
    width: "30%",

    borderWidth: 1,
    borderRadius: 5,
    margin: 5
  },
  clothingTypeLabel2: {
    width: "45%",
    borderWidth: 1,
    borderRadius: 5,
    margin: 5
  },
  clothingTypeText: {
    textAlign: "center",
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
          <TouchableOpacity
            onPress={() => {
              this.props.handleClothingType("Tee");
            }}
            style={
              this.props.clothingType === "Tee"
                ? {
                    ...styles.clothingTypeLabel,
                    backgroundColor: "lightblue"
                  }
                : styles.clothingTypeLabel
            }
          >
            <Text style={styles.clothingTypeText}>Tee</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.handleClothingType("Jersey");
            }}
            style={
              this.props.clothingType === "Jersey"
                ? {
                    ...styles.clothingTypeLabel,
                    backgroundColor: "lightblue"
                  }
                : styles.clothingTypeLabel
            }
          >
            <Text style={styles.clothingTypeText}>Jersey</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.handleClothingType("Polo");
            }}
            style={
              this.props.clothingType === "Polo"
                ? {
                    ...styles.clothingTypeLabel,
                    backgroundColor: "lightblue"
                  }
                : styles.clothingTypeLabel
            }
          >
            <Text style={styles.clothingTypeText}>Polo</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.clothingTypeContainer}>
          <TouchableOpacity
            onPress={() => {
              this.props.handleClothingType("Sweatshirt");
            }}
            style={
              this.props.clothingType === "Sweatshirt"
                ? {
                    ...styles.clothingTypeLabel2,
                    backgroundColor: "lightblue"
                  }
                : styles.clothingTypeLabel2
            }
          >
            <Text style={styles.clothingTypeText}>Sweatshirt</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.handleClothingType("Hooded Sweatshirt");
            }}
            style={
              this.props.clothingType === "Hooded Sweatshirt"
                ? {
                    ...styles.clothingTypeLabel2,
                    backgroundColor: "lightblue"
                  }
                : styles.clothingTypeLabel2
            }
          >
            <Text style={styles.clothingTypeText}>Hooded Sweatshirt</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default connect()(ClothingType);
