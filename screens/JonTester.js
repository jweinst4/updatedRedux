import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

class JonTester extends Component {
  static navigationOptions = {
    title: "Tester"
  };

  render() {
    return (
      <View>
        <Text>Name</Text>
        <TouchableOpacity onPress={() => this.props.decrement()}>
          <Text>Decrement</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = ({ currentColor }) => ({
  currentColor
});

const mapDispatchToProps = dispatch => ({
  decrement: () => {
    dispatch({ type: "DECREMENT" });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JonTester);
