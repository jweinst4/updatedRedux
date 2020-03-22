import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";
import { colors } from "../constants/colors";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import { listRepos, getStateFunction, changeColorFunction } from "../reducer";

class RepoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    title: "Repositories"
  };

  componentDidMount() {
    this.props.listRepos("relferreira");
  }

  renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() =>
        this.props.navigation.navigate("Detail", { name: item.name })
      }
    >
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );
  render() {
    const { repos } = this.props;
    return (
      <View>
        <Text>Current Color: {this.props.currentColor}</Text>
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
        <TouchableOpacity
          style={styles.item}
          onPress={() => this.props.getStateFunction()}
        >
          <Text>Click to get state</Text>
        </TouchableOpacity>
        {/* <FlatList
        styles={styles.container}
        data={repos}
        renderItem={this.renderItem}
      /> */}
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
  let storedRepositories = state.repos.map(repo => ({ key: repo.id, ...repo }));
  let currentColor = state.currentColor;
  return {
    repos: storedRepositories,
    currentColor: currentColor
  };
};

const mapDispatchToProps = {
  listRepos,
  getStateFunction,
  changeColorFunction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoList);
