import React from "react";

class TabController extends React.Component {

  updateSelectedTab = (event) => {
      this.props.updateSelectedTab(event.target.value);
  }


  render() {
    let tabButtons = this.props.tabs.map((tabName, index) => {
      return <button onClick={this.updateSelectedTab} value={index} className={index === this.props.selectedIndex ? "tab-active" : "tab-button"} key={tabName + index}>{tabName}</button>;
    });
    return <div className="tabs">{tabButtons}</div>;
  }
}

export default TabController;
