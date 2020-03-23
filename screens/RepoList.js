import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { colors } from "../constants/colors";

import {
  getStateFunction,
  changeColorFunction,
  increaseCounter,
  decreaseCounter
} from "../reducers/reducer";

class RepoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    title: "Repositories"
  };

  componentDidMount() {}

  render() {
    return (
      <View>
        <Text>Current Color: {this.props.currentColor}</Text>
        <Text>Counter: {this.props.counter}</Text>
        <View>
          {colors.map(item => (
            <Text
              key={item}
              onPress={() => this.props.changeColorFunction(item)}
            >
              {item}
            </Text>
          ))}
        </View>
        <TouchableOpacity onPress={() => this.props.increaseCounter()}>
          <Text>INCREMENT</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.decreaseCounter()}>
          <Text>DECREMENT</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.item}
          onPress={() => this.props.getStateFunction()}
        >
          <Text>Click to get state</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  }
});

const mapStateToProps = state => {
  let currentColor = state.currentColor;
  let counter = state.counter;
  return {
    currentColor: currentColor,
    counter: counter
  };
};

const mapDispatchToProps = {
  getStateFunction,
  changeColorFunction,
  increaseCounter,
  decreaseCounter
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoList);
