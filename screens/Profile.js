import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { getUser, changeColorFunction } from "../reducers/reducer";

class Profile extends Component {
  static navigationOptions = {
    title: "Profile"
  };
  componentDidMount() {
    this.props.getUser("relferreira");
  }

  render() {
    const { user, loadingProfile, currentColor } = this.props;

    if (loadingProfile) return <Text>Loading...</Text>;

    const { name, login } = user;
    return (
      <View>
        <Text>Name: {name}</Text>
        <Text>Login: {login}</Text>
        <Text>Current Color: {currentColor}</Text>
        <TouchableOpacity onPress={() => this.props.changeColorFunction("red")}>
          <Text>Change to red</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = ({ user, loadingProfile, currentColor }) => ({
  user,
  loadingProfile,
  currentColor
});

const mapDispatchToProps = {
  getUser,
  changeColorFunction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
