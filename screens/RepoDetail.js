import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

class RepoDetail extends Component {
  static navigationOptions = {
    title: "RepoDetail"
  };
  componentDidMount() {}
  render() {
    return (
      <View>
        <Text>Placeholder</Text>
      </View>
    );
  }
}

export default RepoDetail;
