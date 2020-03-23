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

class RepoList extends React.Component {
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
      location1Stitches: 0,
      location2Stitches: 0,
      location3Stitches: 0,
      location4Stitches: 0,
      location5Stitches: 0,
      location6Stitches: 0,
      showResults: false,
      printSideOneCost: 0,
      printSideTwoCost: 0,
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
    title: "Repositories"
  };

  renderInputOutputHeader() {
    return (
      <View style={styles.inputOutputHeader}>
        <Text style={{ ...styles.output, textAlign: "center" }}>Input</Text>
        <Text style={{ ...styles.output, textAlign: "center" }}>Output</Text>
      </View>
    );
  }

  renderShirtType() {
    return (
      <View style={{ flexDirection: "row" }}>
        <Text
          style={
            this.state.shirtType === "lightShirt"
              ? { ...styles.shirtTypeText, backgroundColor: "pink" }
              : styles.shirtTypeText
          }
          onPress={() => {
            this.setState({ shirtType: "lightShirt" });
          }}
        >
          Light Shirt
        </Text>
        <Text
          style={
            this.state.shirtType === "darkShirt"
              ? { ...styles.shirtTypeText, backgroundColor: "pink" }
              : styles.shirtTypeText
          }
          onPress={() => {
            this.setState({ shirtType: "darkShirt" });
          }}
        >
          Dark Shirt
        </Text>
        <Text
          style={
            this.state.shirtType === "embroidery"
              ? { ...styles.shirtTypeText, backgroundColor: "pink" }
              : styles.shirtTypeText
          }
          onPress={() => {
            this.setState({ shirtType: "embroidery" });
          }}
        >
          Embroidery
        </Text>
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
          onChangeText={text =>
            this.setState({ shirtQuantity: parseInt(text) })
          }
          value={this.state.shirtQuantity}
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
          onChangeText={text =>
            this.setState({ printSideOneQuantity: parseInt(text) })
          }
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
          onChangeText={text =>
            this.setState({ printSideTwoQuantity: parseInt(text) })
          }
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
          onChangeText={text => this.setState({ shirtCost: parseFloat(text) })}
          value={this.state.shirtCost}
        />
        <Text style={styles.output}>Shirt Cost: {this.state.shirtCost}</Text>
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
          onChangeText={text => this.setState({ markUp: parseFloat(text) })}
          value={this.state.markUp}
        />
        <Text style={styles.output}>Mark Up: {this.state.markUp}</Text>
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
          <Text style={styles.label}>Get Price</Text>
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
      type: this.state.shirtType,
      location1Stitches: this.state.location1Stitches,
      location2Stitches: this.state.location2Stitches,
      location3Stitches: this.state.location3Stitches,
      location4Stitches: this.state.location4Stitches,
      location5Stitches: this.state.location5Stitches,
      location6Stitches: this.state.location6Stitches
    };
    const result = calculatedPrice(request);

    console.log("result at repo list");
    console.log(result);

    if (
      this.state.shirtType === "lightShirt" ||
      this.state.shirtType === "darkShirt"
    ) {
      this.setState({ printSideOneCost: result[0] });
      this.setState({ printSideTwoCost: result[1] });

      let netCostHere = this.state.shirtCost + result[0] + result[1];
      let profitHere = netCostHere * this.state.markUp;
      let totalCostHere = netCostHere + profitHere;
      let totalProfitHere = profitHere * this.state.shirtQuantity;

      this.setState({ netCost: netCostHere });
      this.setState({ profit: profitHere });
      this.setState({ totalCost: totalCostHere });
      this.setState({ totalProfit: totalProfitHere });
    } else if (this.state.shirtType === "embroidery") {
      this.setState({ location1StitchCost: result[0] });
      this.setState({ location2StitchCost: result[1] });
      this.setState({ location3StitchCost: result[2] });
      this.setState({ location4StitchCost: result[3] });
      this.setState({ location5StitchCost: result[4] });
      this.setState({ location6StitchCost: result[5] });

      let netCostHere =
        this.state.shirtCost +
        result[0] +
        result[1] +
        result[2] +
        result[3] +
        result[4] +
        result[5];
      let profitHere = netCostHere * this.state.markUp;
      let totalCostHere = netCostHere + profitHere;
      let totalProfitHere = profitHere * this.state.shirtQuantity;

      this.setState({ netCost: netCostHere });
      this.setState({ profit: profitHere });
      this.setState({ totalCost: totalCostHere });
      this.setState({ totalProfit: totalProfitHere });
    } else {
    }

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

  renderEmbroidery() {
    return (
      <View>
        <View style={styles.textInputAndLabelContainer}>
          <Text style={styles.label}>Location 1 Stitches</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text =>
              this.setState({ location1Stitches: parseInt(text) })
            }
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
            onChangeText={text =>
              this.setState({ location2Stitches: parseInt(text) })
            }
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
            onChangeText={text =>
              this.setState({ location3Stitches: parseInt(text) })
            }
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
            onChangeText={text =>
              this.setState({ location4Stitches: parseInt(text) })
            }
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
            onChangeText={text =>
              this.setState({ location5Stitches: parseInt(text) })
            }
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
            onChangeText={text =>
              this.setState({ location6Stitches: parseInt(text) })
            }
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
    if (
      this.state.shirtType === "lightShirt" ||
      this.state.shirtType === "darkShirt"
    ) {
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
            <Text style={styles.resultValue}>
              ${this.state.printSideOneCost}
            </Text>
          </View>
          <View style={styles.resultContainer}>
            <Text style={styles.resultLabel}>Print Side Two Cost:</Text>
            <Text style={styles.resultValue}>
              ${this.state.printSideTwoCost}
            </Text>
          </View>
          <View style={styles.resultContainer}>
            <Text style={styles.resultLabel}>Shirt Cost:</Text>
            <Text style={styles.resultValue}>${this.state.shirtCost}</Text>
          </View>
          <View style={styles.resultContainer}>
            <Text style={styles.resultLabel}>Net Cost:</Text>
            <Text style={styles.resultValue}>${this.state.netCost}</Text>
          </View>
          <View style={styles.resultContainer}>
            <Text style={styles.resultLabel}>Mark Up:</Text>
            <Text style={styles.resultValue}>{this.state.markUp * 100}%</Text>
          </View>
          <View style={styles.resultContainer}>
            <Text style={styles.resultLabel}>Profit:</Text>
            <Text style={styles.resultValue}>
              ${this.state.profit.toFixed(2)}
            </Text>
          </View>
          <View style={styles.resultContainer}>
            <Text style={styles.resultLabel}>Total Cost:</Text>
            <Text style={styles.resultValue}>
              ${this.state.totalCost.toFixed(2)}
            </Text>
          </View>
          <View style={styles.resultContainer}>
            <Text style={styles.resultLabel}>Total Profit:</Text>
            <Text style={styles.resultValue}>
              ${this.state.totalProfit.toFixed(2)}
            </Text>
          </View>
        </View>
      );
    } else {
      return (
        <View>
          <View style={styles.resultContainer}>
            <Text style={styles.resultLabel}>Quantity:</Text>
            <Text style={styles.resultValue}>{this.state.shirtQuantity}</Text>
          </View>

          <View style={styles.resultContainer}>
            <Text style={styles.resultLabel}>Location 1 Stitch Price:</Text>
            <Text style={styles.resultValue}>
              ${this.state.location1StitchCost}
            </Text>
          </View>

          <View style={styles.resultContainer}>
            <Text style={styles.resultLabel}>Location 2 Stitch Price:</Text>
            <Text style={styles.resultValue}>
              ${this.state.location2StitchCost}
            </Text>
          </View>

          <View style={styles.resultContainer}>
            <Text style={styles.resultLabel}>Location 3 Stitch Price:</Text>
            <Text style={styles.resultValue}>
              ${this.state.location3StitchCost}
            </Text>
          </View>

          <View style={styles.resultContainer}>
            <Text style={styles.resultLabel}>Location 4 Stitch Price:</Text>
            <Text style={styles.resultValue}>
              ${this.state.location4StitchCost}
            </Text>
          </View>

          <View style={styles.resultContainer}>
            <Text style={styles.resultLabel}>Location 5 Stitch Price:</Text>
            <Text style={styles.resultValue}>
              ${this.state.location5StitchCost}
            </Text>
          </View>

          <View style={styles.resultContainer}>
            <Text style={styles.resultLabel}>Location 6 Stitch Price:</Text>
            <Text style={styles.resultValue}>
              ${this.state.location6StitchCost}
            </Text>
          </View>

          <View style={styles.resultContainer}>
            <Text style={styles.resultLabel}>Shirt Cost:</Text>
            <Text style={styles.resultValue}>${this.state.shirtCost}</Text>
          </View>

          <View style={styles.resultContainer}>
            <Text style={styles.resultLabel}>Net Cost:</Text>
            <Text style={styles.resultValue}>${this.state.netCost}</Text>
          </View>

          <View style={styles.resultContainer}>
            <Text style={styles.resultLabel}>Mark Up:</Text>
            <Text style={styles.resultValue}>{this.state.markUp * 100}%</Text>
          </View>

          <View style={styles.resultContainer}>
            <Text style={styles.resultLabel}>Profit:</Text>
            <Text style={styles.resultValue}>
              {this.state.profit.toFixed(2)}
            </Text>
          </View>

          <View style={styles.resultContainer}>
            <Text style={styles.resultLabel}>Total Cost:</Text>
            <Text style={styles.resultValue}>
              ${this.state.totalCost.toFixed(2)}
            </Text>
          </View>

          <View style={styles.resultContainer}>
            <Text style={styles.resultLabel}>Total Profit:</Text>
            <Text style={styles.resultValue}>
              ${this.state.totalProfit.toFixed(2)}
            </Text>
          </View>
        </View>
      );
    }
  }

  render() {
    return (
      <KeyboardAvoidingView>
        <ScrollView>
          <View style={styles.container}>
            {this.renderShirtType()}
            {this.state.showResults ? this.renderResults() : null}
            {/* {this.renderInputOutputHeader()} */}
            {this.renderShirtQuantity()}
            {this.state.shirtType === "lightShirt" ||
            this.state.shirtType === "darkShirt"
              ? this.renderNormalShirt()
              : this.renderEmbroidery()}
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
)(RepoList);
