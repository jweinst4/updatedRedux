import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

import { connect } from "react-redux";

const styles = StyleSheet.create({
  resultContainer: {
    flexDirection: "row"
  },
  resultLabel: {
    width: "75%"
  },
  resultValue: {
    width: "25%"
  }
});

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderScreenPrintResults() {
    return (
      <View>
        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Quantity:</Text>
          <Text style={styles.resultValue}>{this.props.shirtQuantity}</Text>
        </View>
        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Print Side One Quantity:</Text>
          <Text style={styles.resultValue}>
            {this.props.printSideOneQuantity}
          </Text>
        </View>
        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Print Side Two Quantity:</Text>
          <Text style={styles.resultValue}>
            {this.props.printSideTwoQuantity}
          </Text>
        </View>
        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Print Side One Cost</Text>
          <Text style={styles.resultValue}>${this.props.printSideOneCost}</Text>
        </View>
        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Print Side Two Cost:</Text>
          <Text style={styles.resultValue}>${this.props.printSideTwoCost}</Text>
        </View>
        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Shirt Cost:</Text>
          <Text style={styles.resultValue}>${this.props.shirtCost}</Text>
        </View>
        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Net Cost:</Text>
          <Text style={styles.resultValue}>
            ${parseFloat(this.props.netCost).toFixed(2)}
          </Text>
        </View>
        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Mark Up:</Text>
          <Text style={styles.resultValue}>
            {parseFloat(this.props.markUp).toFixed(2)}%
          </Text>
        </View>
        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Profit:</Text>
          <Text style={styles.resultValue}>
            ${parseFloat(this.props.profit).toFixed(2)}
          </Text>
        </View>
        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Total Cost:</Text>
          <Text style={styles.resultValue}>
            ${parseFloat(this.props.totalCost).toFixed(2)}
          </Text>
        </View>
        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Total Profit:</Text>
          <Text style={styles.resultValue}>
            ${parseFloat(this.props.totalProfit).toFixed(2)}
          </Text>
        </View>
      </View>
    );
  }

  renderEmbroideryResults() {
    return (
      <View>
        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Quantity:</Text>
          <Text style={styles.resultValue}>{this.props.shirtQuantity}</Text>
        </View>

        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Location 1 Stitch Price:</Text>
          <Text style={styles.resultValue}>
            ${parseFloat(this.props.location1StitchCost).toFixed(2)}
          </Text>
        </View>

        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Location 2 Stitch Price:</Text>
          <Text style={styles.resultValue}>
            ${parseFloat(this.props.location2StitchCost).toFixed(2)}
          </Text>
        </View>

        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Location 3 Stitch Price:</Text>
          <Text style={styles.resultValue}>
            ${parseFloat(this.props.location3StitchCost).toFixed(2)}
          </Text>
        </View>

        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Location 4 Stitch Price:</Text>
          <Text style={styles.resultValue}>
            ${parseFloat(this.props.location4StitchCost).toFixed(2)}
          </Text>
        </View>

        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Location 5 Stitch Price:</Text>
          <Text style={styles.resultValue}>
            ${parseFloat(this.props.location5StitchCost).toFixed(2)}
          </Text>
        </View>

        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Location 6 Stitch Price:</Text>
          <Text style={styles.resultValue}>
            ${parseFloat(this.props.location6StitchCost).toFixed(2)}
          </Text>
        </View>

        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Shirt Cost:</Text>
          <Text style={styles.resultValue}>${this.props.shirtCost}</Text>
        </View>

        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Net Cost:</Text>
          <Text style={styles.resultValue}>
            ${parseFloat(this.props.netCost).toFixed(2)}
          </Text>
        </View>

        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Mark Up:</Text>
          <Text style={styles.resultValue}>
            {parseFloat(this.props.markUp).toFixed(2)}%
          </Text>
        </View>

        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Profit:</Text>
          <Text style={styles.resultValue}>
            ${parseFloat(this.props.profit).toFixed(2)}
          </Text>
        </View>

        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Total Cost:</Text>
          <Text style={styles.resultValue}>
            ${parseFloat(this.props.totalCost).toFixed(2)}
          </Text>
        </View>

        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Total Profit:</Text>
          <Text style={styles.resultValue}>
            ${parseFloat(this.props.totalProfit).toFixed(2)}
          </Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View>
        {this.props.shirtType === "lightShirt" ||
        this.props.shirtType === "darkShirt"
          ? this.renderScreenPrintResults()
          : this.renderEmbroideryResults()}
      </View>
    );
  }
}

export default connect()(Results);
