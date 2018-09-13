import React, { Component } from "react";
import "./App.css";
import CategorySelector from "./components/CategorySelector";
import TabController from "./components/TabController";
import GalleryView from "./components/GalleryView";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
    this.categoryTypes = [
      { title: "Bilder", categories: [{displayName: "Car", catalogName: "car"},{displayName: "Nature", catalogName: "nature"}, {displayName: "Optical illusion", catalogName: "optical_illusion"}] },
      { title: "Tekst", categories: [{displayName: "Cake", catalogName: "cake"},{displayName: "Cars", catalogName: "cars"}, {displayName: "Fish", catalogName: "fish"}] },
      { title: "Lyd", categories: [{displayName: "Human", catalogName: "human"},{displayName: "Music", catalogName: "music"}, {displayName: "Nature", catalogName: "nature"}] }
    ];
  }


  updateSelectedCategory = (category, value) => {
    let categories = this.state.categories.filter(item => {
      return item.category != category;
    });
    categories.push({ category: category, value: value });
    this.setState({ categories: categories });
  };

  render() {
    console.log(this.state.categories);
    let imgCategory = this.state.categories.find(item => {
      return item.category == this.categoryTypes[0];
    });

    let textCategory = this.state.categories.find(item => {
      return item.category == this.categoryTypes[1];
    });

    let soundCategory = this.state.categories.find(item => {
      return item.category == this.categoryTypes[2];
    });

    return (
      <div>
        <div>
          <TabController tabs={["Tab1", "Tab2", "Tab3", "Tab4"]} />
          <GalleryView imgCategory={imgCategory} textCategory={textCategory} soundCategory={soundCategory}/>
        </div>

        <div>
          <CategorySelector title="Bilder" categories={this.categoryTypes.find(item => item.title == "Bilder")} updateSelectedCategory={this.updateSelectedCategory} />
          <CategorySelector title="Lyd" categories={this.categoryTypes.find(item => item.title == "Lyd")} updateSelectedCategory={this.updateSelectedCategory} />
          <CategorySelector title="Tekst" categories={this.categoryTypes.find(item => item.title == "Tekst")} updateSelectedCategory={this.updateSelectedCategory} />
        </div>
      </div>
    );
  }
}

export default App;
