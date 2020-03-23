import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView
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
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "80%",
    borderRadius: 5,
    color: "blue",
    paddingLeft: 10
  },
  label: {
    color: "black",
    width: "35%"
  },
  textInputAndLabelContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    marginTop: 50
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
      price: 0
    };
    this.focusNextField = this.focusNextField.bind(this);
    this.inputs = {};
  }
  static navigationOptions = {
    title: "Repositories"
  };

  componentDidMount() {}

  focusNextField(key) {
    this.inputs[key].focus();
  }

  renderShirtQuantity() {
    return (
      <View style={styles.textInputAndLabelContainer}>
        <Text style={styles.label}>Shirt Quantity</Text>
        <TextInput
          autoFocus={true}
          returnKeyType={"next"}
          blurOnSubmit={false}
          onSubmitEditing={() => {
            this.focusNextField("two");
          }}
          ref={input => {
            this.inputs["one"] = input;
          }}
          style={styles.textInput}
          label={"Shirt Quantity"}
          onChangeText={text =>
            this.setState({ shirtQuantity: parseInt(text) })
          }
          value={this.state.shirtQuantity}
        />
      </View>
    );
  }

  renderPrintSideOneQuantity() {
    return (
      <View style={styles.textInputAndLabelContainer}>
        <Text style={styles.label}>Print Side One Quantity</Text>
        <TextInput
          style={styles.textInput}
          returnKeyType={"next"}
          blurOnSubmit={false}
          onSubmitEditing={() => {
            this.focusNextField("three");
          }}
          ref={input => {
            this.inputs["two"] = input;
          }}
          label={"Print Side One Quantity"}
          onChangeText={text =>
            this.setState({ printSideOneQuantity: parseInt(text) })
          }
          value={this.state.printSideOneQuantity}
        />
      </View>
    );
  }

  renderPrintSideTwoQuantity() {
    return (
      <View style={styles.textInputAndLabelContainer}>
        <Text style={styles.label}>Print Side Two Quantity</Text>
        <TextInput
          style={styles.textInput}
          returnKeyType={"next"}
          onSubmitEditing={() => {
            this.focusNextField("four");
          }}
          ref={input => {
            this.inputs["three"] = input;
          }}
          blurOnSubmit={false}
          label={"Print Side Two Quantity"}
          onChangeText={text =>
            this.setState({ printSideTwoQuantity: parseInt(text) })
          }
          value={this.state.printSideTwoQuantity}
        />
      </View>
    );
  }

  renderShirtCost() {
    return (
      <View style={styles.textInputAndLabelContainer}>
        <Text style={styles.label}>Shirt Cost</Text>
        <TextInput
          style={styles.textInput}
          returnKeyType={"next"}
          onSubmitEditing={() => {
            this.focusNextField("five");
          }}
          ref={input => {
            this.inputs["four"] = input;
          }}
          blurOnSubmit={false}
          label={"Shirt Cost"}
          onChangeText={text => this.setState({ shirtCost: parseInt(text) })}
          value={this.state.shirtCost}
        />
      </View>
    );
  }

  renderMarkUp() {
    return (
      <View style={styles.textInputAndLabelContainer}>
        <Text style={styles.label}>Mark Up</Text>
        <TextInput
          style={styles.textInput}
          returnKeyType={"done"}
          ref={input => {
            this.inputs["five"] = input;
          }}
          blurOnSubmit={true}
          label={"Mark Up"}
          onChangeText={text => this.setState({ markUp: parseInt(text) })}
          value={this.state.markUp}
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
      type: "lightShirt"
    };
    const result = calculatedPrice(request);
    this.setState({ price: result });
  }

  renderResults() {
    return this.state.price === 0 ? null : (
      <View>
        <Text>Price: {this.state.price}</Text>
      </View>
    );
  }

  render() {
    return (
      <KeyboardAvoidingView>
        <View style={styles.container}>
          {this.renderShirtQuantity()}
          {this.renderPrintSideOneQuantity()}
          {this.renderPrintSideTwoQuantity()}
          {this.renderShirtCost()}
          {this.renderMarkUp()}
          {this.renderGetResultsButton()}
          {this.renderResults()}
        </View>
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
