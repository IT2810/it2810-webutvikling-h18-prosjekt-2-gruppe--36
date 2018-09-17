import React, { Component } from "react";
import "./App.css";
import CategorySelector from "./components/CategorySelector";
import TabController from "./components/TabController";
import GalleryView from "./components/GalleryView";
import 'typeface-lato';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      tabIndex: 0
    };
    this.fetchedData = {}
    this.categoryTypes = [
      { title: "Pictures", categories: [{displayName: "Car", catalogName: "car"},{displayName: "Nature", catalogName: "nature"}, {displayName: "Optical illusion", catalogName: "optical_illusion"}] },
      { title: "Text", categories: [{displayName: "Cake", catalogName: "cake"},{displayName: "Cars", catalogName: "cars"}, {displayName: "Fish", catalogName: "fish"}] },
      { title: "Audio", categories: [{displayName: "Human", catalogName: "human"},{displayName: "Music", catalogName: "music"}, {displayName: "Nature", catalogName: "nature"}] }
    ];


  }

   fetchData = async (url) => {
    let fetchedData = this.fetchedData[url]
    if(fetchedData){
      return fetchedData
    }
    let response =(await fetch(url));
    return response;

  }

  updateSelectedCategory = (category, value) => {
    let categories = this.state.categories.filter(item => {
      return item.category !== category;
    });
    categories.push({ category: category, value: value });
    this.setState({ categories: categories });
  };

  updateSelectedTab = tabIndex => {
    this.setState({ tabIndex: parseInt(tabIndex, 10) });
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
        <TabController tabs={["Art Piece 1", "Art Piece 2", "Art Piece 3", "Art Piece 4"]} selectedIndex={this.state.tabIndex} updateSelectedTab={this.updateSelectedTab} />
        <div id="container">
          <div id="categories" className="container">
            <CategorySelector title="Pictures" categories={this.categoryTypes.find(item => item.title === "Pictures")} updateSelectedCategory={this.updateSelectedCategory} />
            <CategorySelector title="Audio" categories={this.categoryTypes.find(item => item.title === "Audio")} updateSelectedCategory={this.updateSelectedCategory} />
            <CategorySelector title="Text" categories={this.categoryTypes.find(item => item.title === "Text")} updateSelectedCategory={this.updateSelectedCategory} />
          </div>
          <GalleryView imgCategory={imgCategory} textCategory={textCategory} soundCategory={soundCategory} tabIndex={this.state.tabIndex} fetchData={this.fetchData}/>
        </div>
      </div>
    );
  }
}

export default App;
