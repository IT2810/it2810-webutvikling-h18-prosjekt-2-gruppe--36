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
          <input onChange={this.updateSelectedCategory} type="radio" id={key} name={this.props.title} value={category.catalogName} />
          <label htmlFor={key}>{category.displayName}</label>
        </div>
      );
    });

    return (
      <form>
        <h2> {this.props.title} </h2>
        <div>{categories}</div>
      </form>
    );
  }
}

export default CategorySelector;
