import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { changeColorFunction } from "../reducers/reducer";

class Profile extends Component {
  static navigationOptions = {
    title: "Profile"
  };
  componentDidMount() {}

  render() {
    const { currentColor, counter } = this.props;
    return (
      <View>
        <Text>Current Color: {currentColor}</Text>
        <Text>Counter: {counter}</Text>
        <TouchableOpacity onPress={() => this.props.changeColorFunction("red")}>
          <Text>Change to red</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = ({ currentColor, counter }) => ({
  currentColor,
  counter
});

const mapDispatchToProps = {
  changeColorFunction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
