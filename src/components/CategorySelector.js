import React from "react";

class CategorySelector extends React.Component {
  updateSelectedCategory = value => {
    this.props.updateSelectedCategory(this.props.title, value.target.value);
  };

  render() {
    let categories = this.props.categories.categories.map((category, index) => {
      let key = this.props.title + index;
      return (
        <div key={key}>
          <input onChange={this.updateSelectedCategory} defaultChecked={this.props.selectedCategory.find(item => item.category === this.props.title && item.value === category.catalogName)} type="radio" id={key} className="form-radio" name={this.props.title} value={category.catalogName} />
          <label htmlFor={key}>{category.displayName}</label>
        </div>
      );
    });

    return (
      <div>
        <h2> {this.props.title} </h2>
        <div>{categories}</div>
      </div>
    );
  }
}

export default CategorySelector;
