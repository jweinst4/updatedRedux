import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

import { connect } from "react-redux";

const styles = StyleSheet.create({
  textInputAndLabelContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    marginTop: 20,
    width: "100%"
  },
  label: {
    color: "black",
    width: "25%"
  },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "25%",
    borderRadius: 5,
    color: "blue",
    paddingLeft: 10
  },
  output: {
    color: "black",
    width: "50%",
    marginLeft: 10
  }
});

class EmbroideryStitchCountInputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <View style={styles.textInputAndLabelContainer}>
          <Text style={styles.label}>Location 1 Stitches</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text =>
              this.props.handleEmbroideryStitchCountInputs(text, 1)
            }
            value={this.props.location1Stitches}
          />
          <Text style={styles.output}>
            Location 1 Stitches: {this.props.location1Stitches}
          </Text>
        </View>

        <View style={styles.textInputAndLabelContainer}>
          <Text style={styles.label}>Location 2 Stitches</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text =>
              this.props.handleEmbroideryStitchCountInputs(text, 2)
            }
            value={this.props.location2Stitches}
          />
          <Text style={styles.output}>
            Location 2 Stitches: {this.props.location2Stitches}
          </Text>
        </View>

        <View style={styles.textInputAndLabelContainer}>
          <Text style={styles.label}>Location 3 Stitches</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text =>
              this.props.handleEmbroideryStitchCountInputs(text, 3)
            }
            value={this.props.location3Stitches}
          />
          <Text style={styles.output}>
            Location 3 Stitches: {this.props.location3Stitches}
          </Text>
        </View>

        <View style={styles.textInputAndLabelContainer}>
          <Text style={styles.label}>Location 4 Stitches</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text =>
              this.props.handleEmbroideryStitchCountInputs(text, 4)
            }
            value={this.props.location4Stitches}
          />
          <Text style={styles.output}>
            Location 4 Stitches: {this.props.location4Stitches}
          </Text>
        </View>

        <View style={styles.textInputAndLabelContainer}>
          <Text style={styles.label}>Location 5 Stitches</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text =>
              this.props.handleEmbroideryStitchCountInputs(text, 5)
            }
            value={this.props.location5Stitches}
          />
          <Text style={styles.output}>
            Location 5 Stitches: {this.props.location5Stitches}
          </Text>
        </View>

        <View style={styles.textInputAndLabelContainer}>
          <Text style={styles.label}>Location 6 Stitches</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text =>
              this.props.handleEmbroideryStitchCountInputs(text, 6)
            }
            value={this.props.location6Stitches}
          />
          <Text style={styles.output}>
            Location 6 Stitches: {this.props.location6Stitches}
          </Text>
        </View>
      </View>
    );
  }
}

export default connect()(EmbroideryStitchCountInputs);
