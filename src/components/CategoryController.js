import React from "react";
import CategorySelector from "../components/CategorySelector";

class CategoryController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  updateBtnActive = (event) => {
    this.setState(prevState => ({
      btnActive: !prevState.btnActive
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.updateBtnActive} className={this.state.btnActive === true ? "hamburgerMenuBtn tab-button" : "hamburgerMenuBtn tab-active"} >☰</button>
        <div id="categories" className="container" style={{ display: this.state.btnActive === true ? "none" : "block" }}>
          <CategorySelector title="Pictures" categories={this.props.categoryTypes.find(item => item.title === "Pictures")} updateSelectedCategory={this.props.updateSelectedCategory} />
          <CategorySelector title="Audio" categories={this.props.categoryTypes.find(item => item.title === "Audio")} updateSelectedCategory={this.props.updateSelectedCategory} />
          <CategorySelector title="Text" categories={this.props.categoryTypes.find(item => item.title === "Text")} updateSelectedCategory={this.props.updateSelectedCategory} />
        </div>
      </div>
    );
  }
}

export default CategoryController;