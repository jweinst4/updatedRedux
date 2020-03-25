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

class MarkUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.textInputAndLabelContainer}>
        <Text style={styles.label}>Mark Up</Text>
        <TextInput
          style={styles.textInput}
          label={"Mark Up"}
          onChangeText={text => this.props.handleMarkUpInput(text)}
          value={this.props.markUp}
        />
        <Text style={styles.output}>
          Mark Up: {parseFloat(this.props.markUp).toFixed(2)}%
        </Text>
      </View>
    );
  }
}

export default connect()(MarkUp);
