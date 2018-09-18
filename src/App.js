import React, { Component } from "react";
import "./App.css";
import TabController from "./components/TabController";
import GalleryView from "./components/GalleryView";
import 'typeface-lato';
import CategoryController from "./components/CategoryController";

class App extends Component {
  constructor(props) {
    super(props);
    this.fetchedData = {}
    this.categoryTypes = [
      { title: "Pictures", categories: [{displayName: "Car", catalogName: "car"},{displayName: "Nature", catalogName: "nature"}, {displayName: "Optical illusion", catalogName: "optical_illusion"}] },
      { title: "Text", categories: [{displayName: "Cake", catalogName: "cake"},{displayName: "Cars", catalogName: "cars"}, {displayName: "Fish", catalogName: "fish"}] },
      { title: "Audio", categories: [{displayName: "Human", catalogName: "human"},{displayName: "Music", catalogName: "music"}, {displayName: "Nature", catalogName: "nature"}] }
    ];
    this.state = {
      categories: [
        this.getRandomCategory("Pictures"),
        this.getRandomCategory("Text"),
        this.getRandomCategory("Audio")
      ],
      tabIndex: 0
    };
  }

  getRandomCategory = (category) =>{
    let values = this.categoryTypes.find(item => item.title === category).categories;
    return {category: category, value: values[Math.floor(Math.random()*values.length)].catalogName};
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
    if(this.state.categories.length === 0){
      this.setState({categories: [
        this.getRandomCategory("Pictures"),
        this.getRandomCategory("Text"),
        this.getRandomCategory("Audio")
      ]});
    }
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
        <h1>Art gallery</h1>
        <TabController tabs={["Art Piece 1", "Art Piece 2", "Art Piece 3", "Art Piece 4"]} selectedIndex={this.state.tabIndex} updateSelectedTab={this.updateSelectedTab} />
        <div id="container">
         <CategoryController categoryTypes={this.categoryTypes} selectedCategory={this.state.categories}  updateSelectedCategory={this.updateSelectedCategory}/>
          <GalleryView imgCategory={imgCategory} textCategory={textCategory} soundCategory={soundCategory} tabIndex={this.state.tabIndex} fetchData={this.fetchData}/>
        </div>
      </div>
    );
  }
}

export default App;
