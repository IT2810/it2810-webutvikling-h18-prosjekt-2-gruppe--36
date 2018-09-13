import React, { Component } from "react";
import "./App.css";
import CategorySelector from "./components/CategorySelector";
import TabController from "./components/TabController";
import GalleryView from "./components/GalleryView";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      tabIndex: 0
    };
  
  }

  updateSelectedCategory = (category, value) => {
    let categories = this.state.categories.filter(item => {
      return item.category != category;
    });
    categories.push({ category: category, value: value });
    this.setState({ categories: categories });
  };

  updateSelectedTab = tabIndex => {
    this.setState({ tabIndex: tabIndex });
  };

  render() {
    return (
      <div>
        <div>
          <TabController tabs={["Tab1", "Tab2", "Tab3", "Tab4"]} updateSelectedTab={this.updateSelectedTab} />
          <GalleryView tabIndex={this.state.tabIndex}  />
        </div>

        <div>
          <CategorySelector title="Bilder" categories={["Test1", "Test2", "Test3"]} updateSelectedCategory={this.updateSelectedCategory} />
          <CategorySelector title="Lyd" categories={["xxx", "yy", "zzz"]} updateSelectedCategory={this.updateSelectedCategory} />
          <CategorySelector title="Tekst" categories={["dfd", "aa", "Testfddf3"]} updateSelectedCategory={this.updateSelectedCategory} />
        </div>
      </div>
    );
  }
}

export default App;
