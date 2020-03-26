import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";

import { connect } from "react-redux";
import { calculatedPrice } from "../utilities/getResultsCalculator";
import { parseResults } from "../utilities/parseResults";
import ShirtQuantity from "../components/ShirtQuantity";
import PrintSideOneQuantity from "../components/PrintSideOneQuantity";
import PrintSideTwoQuantity from "../components/PrintSideTwoQuantity";
import ShirtCost from "../components/ShirtCost";
import MarkUp from "../components/MarkUp";
import Results from "../components/Results";
import ClothingType from "../components/ClothingType";
import BottomBar from "../components/BottomBar";

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
    marginTop: 10,
    height: "100%"
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

class LightShirt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shirtQuantity: 0,
      printSideOneQuantity: 0,
      printSideTwoQuantity: 0,
      shirtCost: 0,
      markUp: 0,
      price: 0,
      shirtType: "lightShirt",
      showResults: false,
      printSideOneCost: 0,
      printSideTwoCost: 0,
      netCost: 0,
      profit: 0,
      totalCost: 0,
      totalProfit: 0,
      clothingType: "Tee"
    };
  }

  static navigationOptions = {
    title: "1) Light"
    // headerStyle: {
    //   backgroundColor: "yellow"
    // }
  };

  handleShirtQuantityInput = text => {
    this.setState({ shirtQuantity: text });
  };

  handlePrintSideOneQuantityInput = text => {
    this.setState({ printSideOneQuantity: text });
  };

  handlePrintSideTwoQuantityInput = text => {
    this.setState({ printSideTwoQuantity: text });
  };

  handleShirtCostInput = text => {
    this.setState({ shirtCost: text });
  };

  handleMarkUpInput = text => {
    this.setState({ markUp: text });
  };

  clearEntries() {
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

  renderClothingType() {
    return (
      <View style={{ width: "100%" }}>
        <ClothingType
          clothingType={this.state.clothingType}
          handleClothingType={this.handleClothingType.bind(this)}
        />
      </View>
    );
  }

  renderClearEntriesButton() {
    return (
      <View>
        <TouchableOpacity
          style={{ marginTop: 5 }}
          onPress={() => this.clearEntries()}
        >
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
      <View>
        <ShirtQuantity
          shirtQuantity={this.state.shirtQuantity}
          handleShirtQuantityInput={this.handleShirtQuantityInput}
        />
      </View>
    );
  }

  renderPrintSideOneQuantity() {
    return (
      <View>
        <PrintSideOneQuantity
          printSideOneQuantity={this.state.printSideOneQuantity}
          handlePrintSideOneQuantityInput={this.handlePrintSideOneQuantityInput}
        />
      </View>
    );
  }

  renderPrintSideTwoQuantity() {
    return (
      <View>
        <PrintSideTwoQuantity
          printSideTwoQuantity={this.state.printSideTwoQuantity}
          handlePrintSideTwoQuantityInput={this.handlePrintSideTwoQuantityInput}
        />
      </View>
    );
  }

  renderShirtCost() {
    return (
      <View>
        <ShirtCost
          shirtCost={this.state.shirtCost}
          handleShirtCostInput={this.handleShirtCostInput}
        />
      </View>
    );
  }

  renderMarkUp() {
    return (
      <View>
        <MarkUp
          markUp={this.state.markUp}
          handleMarkUpInput={this.handleMarkUpInput}
        />
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

  handleClothingType(value) {
    this.setState({ clothingType: value });
    this.setState({ showResults: false });
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

    const data = [result, this.state];

    const parsedResult = parseResults(data);

    this.setState({ printSideOneCost: result[0] });
    this.setState({ printSideTwoCost: result[1] });
    this.setState({ netCost: parsedResult[0] });
    this.setState({ profit: parsedResult[1] });
    this.setState({ totalCost: parsedResult[2] });
    this.setState({ totalProfit: parsedResult[3] });
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
        <Results
          shirtQuantity={this.state.shirtQuantity}
          printSideOneQuantity={this.state.printSideOneQuantity}
          printSideTwoQuantity={this.state.printSideTwoQuantity}
          printSideOneCost={this.state.printSideOneCost}
          printSideTwoCost={this.state.printSideTwoCost}
          shirtCost={this.state.shirtCost}
          netCost={this.state.netCost}
          markUp={this.state.markUp}
          profit={this.state.profit}
          totalCost={this.state.totalCost}
          totalProfit={this.state.totalProfit}
          shirtType={this.state.shirtType}
        />
      </View>
    );
  }

  renderExtraSpace() {
    return <View style={{ height: 320 }}></View>;
  }

  render() {
    return (
      <View>
        <ScrollView>
          <View style={styles.container}>
            {this.renderClothingType()}
            {this.state.showResults ? this.renderResults() : null}
            {this.renderShirtQuantity()}
            {this.renderNormalShirt()}
            {this.renderShirtCost()}
            {this.renderMarkUp()}
            {this.renderExtraSpace()}
          </View>
        </ScrollView>
        <BottomBar
          getResults={this.getResults.bind(this)}
          clearEntries={this.clearEntries.bind(this)}
        />
      </View>
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
)(LightShirt);
