import React from "react";

class CategorySelector extends React.Component {
  render() {
    let categories = this.props.categories.map((category, index) => {
        let key = this.props.title + index;
      return (
        <div key={key}>
          <input type="radio" id={key} name={this.props.title} value={category} />
          <label htmlFor={key}>{category}</label>
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
