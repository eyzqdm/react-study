import React, { Component } from "react";
export default class LifeCyclePage extends Component {
    static defaultProps = {
       msg: "omg"
    };
    static propTypes = {
       msg: PropTypes.string.isRequired
    };
    constructor(props) {
      super(props);
      this.state = { count: 0 };
      console.log("constructor");
    }
  
    setCount = () => {
      this.setState({ count: this.state.count + 1 });
    };
    render() {
      console.log("render", this.props);
      const { count } = this.state;
      return (
        <div>
          <h3>LifeCyclePage</h3>
          <p>{count}</p>
          <button onClick={this.setCount}>改变count</button>
        </div>
      );
    }
  }
  