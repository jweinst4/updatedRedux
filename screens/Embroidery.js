import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import { connect } from "react-redux";
import { calculatedPrice } from "../utilities/getResultsCalculator";

import {
  getStateFunction,
  changeColorFunction,
  increaseCounter,
  decreaseCounter
} from "../reducers/reducer";

const styles = StyleSheet.create({
  container: {
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: 10
  },
  resultContainer: {
    flexDirection: "row"
  },
  resultLabel: {
    width: "75%"
  },
  resultValue: {
    width: "25%"
  },
  inputOutputHeader: {
    flexDirection: "row",
    textAlign: "center"
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
  label: {
    color: "black",
    width: "25%"
  },
  output: {
    color: "black",
    width: "50%",
    marginLeft: 10
  },
  textInputAndLabelContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    marginTop: 20,
    width: "100%"
  }
});

class Embroidery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shirtQuantity: 0,
      shirtCost: 0,
      markUp: 0,
      price: 0,
      shirtType: "embroidery",
      location1Stitches: 0,
      location2Stitches: 0,
      location3Stitches: 0,
      location4Stitches: 0,
      location5Stitches: 0,
      location6Stitches: 0,
      showResults: false,
      location1StitchCost: 0,
      location2StitchCost: 0,
      location3StitchCost: 0,
      location4StitchCost: 0,
      location5StitchCost: 0,
      location6StitchCost: 0,
      netCost: 0,
      profit: 0,
      totalCost: 0,
      totalProfit: 0
    };
  }

  static navigationOptions = {
    title: "Embroidery"
  };

  renderInputOutputHeader() {
    return (
      <View style={styles.inputOutputHeader}>
        <Text style={{ ...styles.output, textAlign: "center" }}>Input</Text>
        <Text style={{ ...styles.output, textAlign: "center" }}>Output</Text>
      </View>
    );
  }

  clearEntries() {
    this.setState({ shirtQuantity: 0 }),
      this.setState({ shirtCost: 0 }),
      this.setState({ markUp: 0 }),
      this.setState({ price: 0 }),
      this.setState({ location1Stitches: 0 }),
      this.setState({ location2Stitches: 0 }),
      this.setState({ location3Stitches: 0 }),
      this.setState({ location4Stitches: 0 }),
      this.setState({ location5Stitches: 0 }),
      this.setState({ location6Stitches: 0 }),
      this.setState({ showResults: false }),
      this.setState({ location1StitchCost: 0 }),
      this.setState({ location2StitchCost: 0 }),
      this.setState({ location3StitchCost: 0 }),
      this.setState({ location4StitchCost: 0 }),
      this.setState({ location5StitchCost: 0 }),
      this.setState({ location6StitchCost: 0 }),
      this.setState({ netCost: 0 }),
      this.setState({ profit: 0 }),
      this.setState({ totalCost: 0 }),
      this.setState({ totalProfit: 0 });
  }

  renderClearEntriesButton() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.clearEntries()}>
          <Text
            style={{
              fontSize: 16,
              borderWidth: 1,
              borderRadius: 5,
              width: "50%",
              paddingLeft: 5
            }}
          >
            Clear Entry
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderShirtQuantity() {
    return (
      <View style={styles.textInputAndLabelContainer}>
        <Text style={styles.label}>Shirt Quantity</Text>
        <TextInput
          autoFocus={true}
          style={styles.textInput}
          label={"Shirt Quantity"}
          value={this.state.shirtQuantity}
          onChangeText={text => this.setState({ shirtQuantity: text })}
        />
        <Text style={styles.output}>Quantity: {this.state.shirtQuantity}</Text>
      </View>
    );
  }

  renderShirtCost() {
    return (
      <View style={styles.textInputAndLabelContainer}>
        <Text style={styles.label}>Shirt Cost</Text>
        <TextInput
          style={styles.textInput}
          label={"Shirt Cost"}
          onChangeText={text => this.setState({ shirtCost: text })}
          value={this.state.shirtCost}
        />
        <Text style={styles.output}>Shirt Cost:$ {this.state.shirtCost}</Text>
      </View>
    );
  }

  renderMarkUp() {
    return (
      <View style={styles.textInputAndLabelContainer}>
        <Text style={styles.label}>Mark Up</Text>
        <TextInput
          style={styles.textInput}
          label={"Mark Up"}
          onChangeText={text => this.setState({ markUp: text })}
          value={this.state.markUp}
        />
        <Text style={styles.output}>
          Mark Up: {parseFloat(this.state.markUp * 100).toFixed(2)}%
        </Text>
      </View>
    );
  }

  renderGetResultsButton() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.getResults();
        }}
      >
        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              fontSize: 16,
              borderWidth: 1,
              borderRadius: 5,
              width: "50%",
              paddingLeft: 5
            }}
          >
            Get Price
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  getResults() {
    const request = {
      shirtQuantity: this.state.shirtQuantity,
      shirtCost: this.state.shirtCost,
      markUp: this.state.markUp,
      type: this.state.shirtType,
      location1Stitches: this.state.location1Stitches,
      location2Stitches: this.state.location2Stitches,
      location3Stitches: this.state.location3Stitches,
      location4Stitches: this.state.location4Stitches,
      location5Stitches: this.state.location5Stitches,
      location6Stitches: this.state.location6Stitches
    };
    const result = calculatedPrice(request);

    this.setState({ location1StitchCost: result[0] });
    this.setState({ location2StitchCost: result[1] });
    this.setState({ location3StitchCost: result[2] });
    this.setState({ location4StitchCost: result[3] });
    this.setState({ location5StitchCost: result[4] });
    this.setState({ location6StitchCost: result[5] });

    let netCostHere =
      parseFloat(this.state.shirtCost) +
      result[0] +
      result[1] +
      result[2] +
      result[3] +
      result[4] +
      result[5];
    let profitHere = netCostHere * parseFloat(this.state.markUp);
    let totalCostHere = netCostHere + profitHere;
    let totalProfitHere = profitHere * parseInt(this.state.shirtQuantity);

    this.setState({ netCost: netCostHere });
    this.setState({ profit: profitHere });
    this.setState({ totalCost: totalCostHere });
    this.setState({ totalProfit: totalProfitHere });
    this.setState({ showResults: true });
  }

  renderEmbroidery() {
    return (
      <View>
        <View style={styles.textInputAndLabelContainer}>
          <Text style={styles.label}>Location 1 Stitches</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => this.setState({ location1Stitches: text })}
            value={this.state.location1Stitches}
          />
          <Text style={styles.output}>
            Location 1 Stitches: {this.state.location1Stitches}
          </Text>
        </View>

        <View style={styles.textInputAndLabelContainer}>
          <Text style={styles.label}>Location 2 Stitches</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => this.setState({ location2Stitches: text })}
            value={this.state.location2Stitches}
          />
          <Text style={styles.output}>
            Location 2 Stitches: {this.state.location2Stitches}
          </Text>
        </View>

        <View style={styles.textInputAndLabelContainer}>
          <Text style={styles.label}>Location 3 Stitches</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => this.setState({ location3Stitches: text })}
            value={this.state.location3Stitches}
          />
          <Text style={styles.output}>
            Location 3 Stitches: {this.state.location3Stitches}
          </Text>
        </View>

        <View style={styles.textInputAndLabelContainer}>
          <Text style={styles.label}>Location 4 Stitches</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => this.setState({ location4Stitches: text })}
            value={this.state.location4Stitches}
          />
          <Text style={styles.output}>
            Location 4 Stitches: {this.state.location4Stitches}
          </Text>
        </View>

        <View style={styles.textInputAndLabelContainer}>
          <Text style={styles.label}>Location 5 Stitches</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => this.setState({ location5Stitches: text })}
            value={this.state.location5Stitches}
          />
          <Text style={styles.output}>
            Location 5 Stitches: {this.state.location5Stitches}
          </Text>
        </View>

        <View style={styles.textInputAndLabelContainer}>
          <Text style={styles.label}>Location 6 Stitches</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => this.setState({ location6Stitches: text })}
            value={this.state.location6Stitches}
          />
          <Text style={styles.output}>
            Location 6 Stitches: {this.state.location6Stitches}
          </Text>
        </View>
      </View>
    );
  }

  renderResults() {
    return (
      <View>
        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Quantity:</Text>
          <Text style={styles.resultValue}>{this.state.shirtQuantity}</Text>
        </View>

        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Location 1 Stitch Price:</Text>
          <Text style={styles.resultValue}>
            ${parseFloat(this.state.location1StitchCost).toFixed(2)}
          </Text>
        </View>

        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Location 2 Stitch Price:</Text>
          <Text style={styles.resultValue}>
            ${parseFloat(this.state.location2StitchCost).toFixed(2)}
          </Text>
        </View>

        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Location 3 Stitch Price:</Text>
          <Text style={styles.resultValue}>
            ${parseFloat(this.state.location3StitchCost).toFixed(2)}
          </Text>
        </View>

        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Location 4 Stitch Price:</Text>
          <Text style={styles.resultValue}>
            ${parseFloat(this.state.location4StitchCost).toFixed(2)}
          </Text>
        </View>

        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Location 5 Stitch Price:</Text>
          <Text style={styles.resultValue}>
            ${parseFloat(this.state.location5StitchCost).toFixed(2)}
          </Text>
        </View>

        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Location 6 Stitch Price:</Text>
          <Text style={styles.resultValue}>
            ${parseFloat(this.state.location6StitchCost).toFixed(2)}
          </Text>
        </View>

        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Shirt Cost:</Text>
          <Text style={styles.resultValue}>${this.state.shirtCost}</Text>
        </View>

        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Net Cost:</Text>
          <Text style={styles.resultValue}>
            ${parseFloat(this.state.netCost).toFixed(2)}
          </Text>
        </View>

        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Mark Up:</Text>
          <Text style={styles.resultValue}>
            {(parseFloat(this.state.markUp) * 100).toFixed(2)}%
          </Text>
        </View>

        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Profit:</Text>
          <Text style={styles.resultValue}>
            ${parseFloat(this.state.profit).toFixed(2)}
          </Text>
        </View>

        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Total Cost:</Text>
          <Text style={styles.resultValue}>
            ${parseFloat(this.state.totalCost).toFixed(2)}
          </Text>
        </View>

        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Total Profit:</Text>
          <Text style={styles.resultValue}>
            ${parseFloat(this.state.totalProfit).toFixed(2)}
          </Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}
        behavior="padding"
        enabled
        keyboardVerticalOffset={100}
      >
        <ScrollView>
          <View style={styles.container}>
            {this.renderClearEntriesButton()}
            {this.state.showResults ? this.renderResults() : null}
            {/* {this.renderInputOutputHeader()} */}
            {this.renderShirtQuantity()}
            {this.renderEmbroidery()}
            {this.renderShirtCost()}
            {this.renderMarkUp()}
            {this.renderGetResultsButton()}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

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
)(Embroidery);
