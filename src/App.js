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
    this.categoryTypes = [
      { title: "Pictures", categories: [{displayName: "Car", catalogName: "car"},{displayName: "Nature", catalogName: "nature"}, {displayName: "Optical illusion", catalogName: "optical_illusion"}] },
      { title: "Text", categories: [{displayName: "Cake", catalogName: "cake"},{displayName: "Cars", catalogName: "cars"}, {displayName: "Fish", catalogName: "fish"}] },
      { title: "Audio", categories: [{displayName: "Human", catalogName: "human"},{displayName: "Music", catalogName: "music"}, {displayName: "Nature", catalogName: "nature"}] }
    ];
  }

  updateSelectedCategory = (category, value) => {
    let categories = this.state.categories.filter(item => {
      return item.category !== category;
    });
    categories.push({ category: category, value: value });
    this.setState({ categories: categories });
  };

  updateSelectedTab = tabIndex => {
    this.setState({ tabIndex: parseInt(tabIndex) });
  };

  render() {
    let imgCategory = this.state.categories.find(item => {
      return item.category === this.categoryTypes[0]["title"];
    });
    let textCategory = this.state.categories.find(item => {
      return item.category === this.categoryTypes[1]["title"];
    });

    let soundCategory = this.state.categories.find(item => {
      return item.category === this.categoryTypes[2]["title"];
    });
    return (
      <div>
        <div>
          <TabController tabs={["Tab1", "Tab2", "Tab3", "Tab4"]} updateSelectedTab={this.updateSelectedTab} />
          <GalleryView imgCategory={imgCategory} textCategory={textCategory} soundCategory={soundCategory} tabIndex={this.state.tabIndex}/>
        </div>

        <div>
          <CategorySelector title="Pictures" categories={this.categoryTypes.find(item => item.title === "Pictures")} updateSelectedCategory={this.updateSelectedCategory} />
          <CategorySelector title="Audio" categories={this.categoryTypes.find(item => item.title === "Audio")} updateSelectedCategory={this.updateSelectedCategory} />
          <CategorySelector title="Text" categories={this.categoryTypes.find(item => item.title === "Text")} updateSelectedCategory={this.updateSelectedCategory} />
        </div>
      </div>
    );
  }
}

export default App;
