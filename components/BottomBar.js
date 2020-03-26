import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { connect } from "react-redux";

const styles = StyleSheet.create({
  bottomBar: {
    width: "100%",
    height: 50,
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    flexDirection: "row"
  }
});

class BottomBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.bottomBar}>
        <View style={{ marginLeft: "10%", width: "35%" }}>
          <TouchableOpacity
            onPress={() => {
              this.props.getResults();
            }}
          >
            <Text
              style={{
                textAlign: "center",
                borderWidth: 1,
                padding: 5,
                marginHorizontal: 15,
                borderRadius: 5,
                fontWeight: "600"
              }}
            >
              Get Price
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginRight: "10%", width: "35%" }}>
          <TouchableOpacity
            onPress={() => {
              this.props.clearEntries();
            }}
          >
            <Text
              style={{
                textAlign: "center",
                borderWidth: 1,
                padding: 5,
                borderRadius: 5,
                marginHorizontal: 15,
                fontWeight: "600"
              }}
            >
              Clear Entries
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default connect()(BottomBar);
