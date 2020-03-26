import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

import { connect } from "react-redux";

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "25%",
    borderRadius: 5,
    color: "blue",
    paddingLeft: 10
  },
  label: {
    color: "black",
    width: "25%"
  },
  output: {
    color: "black",
    width: "50%",
    marginLeft: 10
  },
  textInputAndLabelContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    marginTop: 20,
    width: "100%"
  }
});

class ShirtCost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.textInputAndLabelContainer}>
        <Text style={styles.label}>Shirt Cost</Text>
        <TextInput
          style={styles.textInput}
          label={"Shirt Cost"}
          keyboardType={"decimal-pad"}
          onChangeText={text => this.props.handleShirtCostInput(text)}
          value={this.props.shirtCost}
        />
        <Text style={styles.output}>Shirt Cost:$ {this.props.shirtCost}</Text>
      </View>
    );
  }
}

export default connect()(ShirtCost);
