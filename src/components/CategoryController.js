import React from "react";
import CategorySelector from "../components/CategorySelector";

class CategoryController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btnActive: true
    }
  }

  updateBtnActive = (event) => {
    // Når du trykker på hamburger knappen så blir btnActive togglet. Og så endret om categories div'en blir synlig eller ikke (i cssen) med å endre klassen. 
    this.setState(prevState => ({
      btnActive: !prevState.btnActive
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.updateBtnActive} className={this.state.btnActive === true ? "hamburgerMenuBtn tab-button" : "hamburgerMenuBtn tab-active"} >☰</button>
        <div id="categories" className={this.state.btnActive === true ? "container hideCategories" : "container"} >
          <CategorySelector title="Pictures" selectedCategory={this.props.selectedCategory}  categories={this.props.categoryTypes.find(item => item.title === "Pictures")} updateSelectedCategory={this.props.updateSelectedCategory} />
          <CategorySelector title="Audio" selectedCategory={this.props.selectedCategory} categories={this.props.categoryTypes.find(item => item.title === "Audio")} updateSelectedCategory={this.props.updateSelectedCategory} />
          <CategorySelector title="Text" selectedCategory={this.props.selectedCategory} categories={this.props.categoryTypes.find(item => item.title === "Text")} updateSelectedCategory={this.props.updateSelectedCategory} />
        </div>
      </div>
    );
  }
}

export default CategoryController;