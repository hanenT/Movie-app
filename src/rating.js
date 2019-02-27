import React from "react";

import "./rating.css";


const Star = ({ onClickStar, isChecked }) => {
  return (
    <div
      className={"fa fa-star the-star " + (isChecked ? "checked" : "")}
      onClick={onClickStar}
    />
  );
};

class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.starsNumber = 5;
    this.state = {
      indexChecked: this.props.indexChecked
    };
  }

  /*setIndexStars = i => {
    this.setState({
      indexChecked: i
    });
  };*/

  render() {
    let array = [];
    for (let i = 0; i < this.starsNumber; i++) {
      array.push(
        <Star
          isChecked={i < this.props.indexChecked + 1}
          //onClickStar={() => this.setIndexStars(i + 1)}
          onClickStar={() => this.props.onClickFn({ i })}
        />
      );
    }
    return (
      <div className="rating">
        {array}
        {console.log("indexx", this.props.indexChecked)}
      </div>
    );
  }
}

export default Rating;
