import React from "react";

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

  updateText = (category, index) => {
    fetch("./text/" + category["value"] + "/" + (index + 1).toString() + ".json")
      .then(response => {
        // Gjør det om til json.
        return response.json()
      })
      .then(response => {
        this.setState({
          text: response
        })
      }).catch(function (error) {
        console.error(error);
      });
  }

  updateSound = (category, index) => {
    // Denne skulle ikke fetche via ajax.
    this.setState({
      sound: "./sound/" + category["value"] + "/" + (index + 1).toString() + ".mp3"
    });
  }

  componentWillReceiveProps() {
    // TODO: Denne får bare gamle updates fordi WILL receive, den har ikke fått nye props enda. Fiks det
    if (typeof this.props.imgCategory !== "undefined") {
      // Hvis du har valgt en kategori for bildene. Så kjøres denne.
      this.updateImage(this.props.imgCategory, this.props.tabIndex);
    }
    if (typeof this.props.textCategory !== "undefined") {
      this.updateText(this.props.textCategory, this.props.tabIndex);
    }
    if (typeof this.props.soundCategory !== "undefined") {
      this.updateSound(this.props.soundCategory, this.props.tabIndex);
    }
  }
  render() {
    return (
      <div>
        {this.state.img && <img src={this.state.img} alt="A beautiful gallery"></img>}
        {this.state.text && <p>{this.state.text["text"]}</p>}
        {this.state.text && <p>{this.state.text["source"]}</p>}
        {this.state.sound && <audio ref="audio_tag" src={this.state.sound} controls autoPlay type="audio/mpeg" />}
      </div>
    );
  }
}

export default GalleryView;
