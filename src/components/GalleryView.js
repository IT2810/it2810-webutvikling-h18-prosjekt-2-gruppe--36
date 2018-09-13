import React from "react";
import AudioPlayer from "./AudioPlayer";

class GalleryView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  updateImage = (category, index) => {
    // Bruker fetch for å få tak i bildet med ajax.
    fetch("./img/" + category["value"] + "/" + (index + 1).toString() + ".svg")
      .then(response => {
        return response.text()
      })
      .then(response => {
        this.setState({
          // Setter img staten til svg-filen konvertert til base64 så vi kan lett sette den inn i src til img taggen.
          img: "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(response)))
        })
      }).catch(function (error) {
        console.error(error);
      });
  }
  componentWillReceiveProps() {
    // TODO: Denne får bare gamle updates fordi WILL receive, den har ikke fått nye props enda. Fiks det
    if (typeof this.props.imgCategory !== "undefined") {
      this.updateImage(this.props.imgCategory, this.props.tabIndex);
    }
  }
  render() {
    return (
      <div>
        {this.state.img && <img src={this.state.img}></img>}
        <p />
        <AudioPlayer />
      </div>
    );
  }
}

export default GalleryView;
