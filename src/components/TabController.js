import React from "react";

class TabController extends React.Component {

  updateSelectedTab = (event) => {
      this.props.updateSelectedTab(event.target.value);
  }


  render() {
    let tabButtons = this.props.tabs.map((tabName, index) => {
      return <button onClick={this.updateSelectedTab} value={index} key={tabName + index}>{tabName}</button>;
    });
    return <div>{tabButtons}</div>;
  }
}

export default TabController;
