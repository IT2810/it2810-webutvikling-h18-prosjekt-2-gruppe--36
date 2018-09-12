import React from "react";

class TabController extends React.Component {

    render() {
        let tabButtons = this.props.tabs.map((tabName, index) => {
            return (<button key={tabName + index}>{tabName}</button>)
        })
        return (
            <div>
                {tabButtons}
            </div>
        )
    }



}

export default TabController;
