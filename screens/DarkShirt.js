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
  },
  shirtTypeText: {
    width: "30%",
    textAlign: "center"
  }
});

class DarkShirt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shirtQuantity: 0,
      printSideOneQuantity: 0,
      printSideTwoQuantity: 0,
      shirtCost: 0,
      markUp: 0,
      price: 0,
      shirtType: "darkShirt",
      showResults: false,
      printSideOneCost: 0,
      printSideTwoCost: 0,
      netCost: 0,
      profit: 0,
      totalCost: 0,
      totalProfit: 0
    };
  }

  static navigationOptions = {
    title: "Dark Shirt"
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
    console.log("in clear entries");
    this.setState({ shirtQuantity: 0 }),
      this.setState({ printSideOneQuantity: 0 }),
      this.setState({ printSideTwoQuantity: 0 }),
      this.setState({ shirtCost: 0 }),
      this.setState({ markUp: 0 }),
      this.setState({ price: 0 }),
      this.setState({ showResults: false }),
      this.setState({ printSideOneCost: 0 }),
      this.setState({ printSideTwoCost: 0 }),
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

  renderPrintSideOneQuantity() {
    return (
      <View style={styles.textInputAndLabelContainer}>
        <Text style={styles.label}>Print Side One Quantity</Text>
        <TextInput
          style={styles.textInput}
          label={"Print Side One Quantity"}
          onChangeText={text => this.setState({ printSideOneQuantity: text })}
          value={this.state.printSideOneQuantity}
        />
        <Text style={styles.output}>
          Print Side One Quantity: {this.state.printSideOneQuantity}
        </Text>
      </View>
    );
  }

  renderPrintSideTwoQuantity() {
    return (
      <View style={styles.textInputAndLabelContainer}>
        <Text style={styles.label}>Print Side Two Quantity</Text>
        <TextInput
          style={styles.textInput}
          label={"Print Side Two Quantity"}
          onChangeText={text => this.setState({ printSideTwoQuantity: text })}
          value={this.state.printSideTwoQuantity}
        />
        <Text style={styles.output}>
          Print Side Two Quantity: {this.state.printSideTwoQuantity}
        </Text>
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
          Mark Up: {(this.state.markUp * 100).toFixed(2)}%
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
      printSideOneQuantity: this.state.printSideOneQuantity,
      printSideTwoQuantity: this.state.printSideTwoQuantity,
      shirtCost: this.state.shirtCost,
      markUp: this.state.markUp,
      type: this.state.shirtType
    };
    const result = calculatedPrice(request);

    console.log(result);

    this.setState({ printSideOneCost: result[0] });
    this.setState({ printSideTwoCost: result[1] });

    let netCostHere = parseFloat(this.state.shirtCost) + result[0] + result[1];
    let profitHere = netCostHere * parseFloat(this.state.markUp);
    let totalCostHere = netCostHere + profitHere;
    let totalProfitHere = profitHere * parseInt(this.state.shirtQuantity);

    this.setState({ netCost: netCostHere });
    this.setState({ profit: profitHere });
    this.setState({ totalCost: totalCostHere });
    this.setState({ totalProfit: totalProfitHere });
    this.setState({ showResults: true });
  }

  renderNormalShirt() {
    return (
      <View>
        {this.renderPrintSideOneQuantity()}
        {this.renderPrintSideTwoQuantity()}
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
          <Text style={styles.resultLabel}>Print Side One Quantity:</Text>
          <Text style={styles.resultValue}>
            {this.state.printSideOneQuantity}
          </Text>
        </View>
        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Print Side Two Quantity:</Text>
          <Text style={styles.resultValue}>
            {this.state.printSideTwoQuantity}
          </Text>
        </View>
        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Print Side One Cost</Text>
          <Text style={styles.resultValue}>${this.state.printSideOneCost}</Text>
        </View>
        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Print Side Two Cost:</Text>
          <Text style={styles.resultValue}>${this.state.printSideTwoCost}</Text>
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
            {this.renderNormalShirt()}
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
)(DarkShirt);
