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
    const { currentColor } = this.props;
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.changeColorFunction("red")}>
          <Text>Change to red</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = ({ currentColor }) => ({
  currentColor
});

const mapDispatchToProps = {
  changeColorFunction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
