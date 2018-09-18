import React from "react";

class GalleryView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  updateImage = (category, index) => {
    this.props.fetchData("./img/" + category.value + "/" + (index + 1) + ".svg")
    .then(data => {
      return data.text()
    }).then(data => {
      this.setState({
        img: {
          data: data,
          name: category.value + this.props.tabIndex
        }

      });
    }).catch((error) => {
      console.error(error);
    });
  }

  updateText = (category, index) => {
    this.props.fetchData("./text/" + category.value + "/" + (index + 1) + ".json")
      .then(data => {
        // Gjør det om til json.
        return data.json()
      })
      .then(data => {
        this.setState({
          text: {
            data: data,
            name: category.value + this.props.tabIndex
          }
        })
      }).catch((error) => {
        console.error(error);
      });
  }

  updateSound = (category, index) => {
    // Denne skulle ikke fetche via ajax.
    this.setState({
      sound: {
        data: "./sound/" + category.value + "/" + (index + 1) + ".mp3",
        name: category.value + this.props.tabIndex
      }
    });
  }

  componentDidUpdate() {
    if(!this.state.img || this.state.img.name !== this.props.imgCategory.value + this.props.tabIndex) {
      if (typeof this.props.imgCategory !== "undefined") {
        // Hvis du har valgt en kategori for bildene. Så kjøres denne.
        this.updateImage(this.props.imgCategory, this.props.tabIndex);
      }
    }
    if(!this.state.text || this.state.text.name !== this.props.textCategory.value + this.props.tabIndex) {
      if (typeof this.props.textCategory !== "undefined") {
        this.updateText(this.props.textCategory, this.props.tabIndex);
      }
    }
    if(!this.state.sound || this.state.sound.name !== this.props.soundCategory.value + this.props.tabIndex) {
      if (typeof this.props.soundCategory !== "undefined") {
        this.updateSound(this.props.soundCategory, this.props.tabIndex);
      }
    }
  }



  render() {
    return (
      <div className="galleryView container">
        <h2>Gallery</h2>
        {this.state.img && <div className="imageContainer" dangerouslySetInnerHTML={{ __html: this.state.img.data }} />}
        {this.state.text && <p>{this.state.text.data.text}</p>}
        {this.state.text && <a href={this.state.text.data.source}> Source: {this.state.text.data.source}</a>}
        {this.state.sound && <div className="audioBox"><div className="audioItem"><audio ref="audio_tag" src={this.state.sound.data} controls autoPlay type="audio/mpeg" /></div></div>}
      </div>
    );
  }
}

export default GalleryView;
