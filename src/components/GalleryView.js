import React from "react";

class GalleryView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  updateImage = (category, index) => {
    let url = "./img/" + category.value + "/" + (index + 1) + ".svg";
    this.props.fetchData(url, false);
    this.setState({
      img: {
        url: url,
        name: category.value + this.props.tabIndex
      }
    });
  };

  updateText = (category, index) => {
    let url = "./text/" + category.value + "/" + (index + 1) + ".json";
    this.props.fetchData(url, true);
    this.setState({
      text: {
        url: url,
        name: category.value + this.props.tabIndex
      }
    });
  };

  updateSound = (category, index) => {
    // Denne skulle ikke fetche via ajax.
    this.setState({
      sound: {
        url: "./sound/" + category.value + "/" + (index + 1) + ".mp3",
        name: category.value + this.props.tabIndex
      }
    });
  };

  componentDidMount() {
    this.componentDidUpdate();
  }

  componentDidUpdate() {
    if (!this.state.img || this.state.img.name !== this.props.imgCategory.value + this.props.tabIndex) {
      if (typeof this.props.imgCategory !== "undefined") {
        // Hvis du har valgt en kategori for bildene. Så kjøres denne.
        this.updateImage(this.props.imgCategory, this.props.tabIndex);
      }
    }
    if (!this.state.text || this.state.text.name !== this.props.textCategory.value + this.props.tabIndex) {
      if (typeof this.props.textCategory !== "undefined") {
        this.updateText(this.props.textCategory, this.props.tabIndex);
      }
    }
    if (!this.state.sound || this.state.sound.name !== this.props.soundCategory.value + this.props.tabIndex) {
      if (typeof this.props.soundCategory !== "undefined") {
        this.updateSound(this.props.soundCategory, this.props.tabIndex);
      }
    }
  }

  toggleMusic = () => {
    this.setState(prevState => ({
      playingMusic: !prevState.playingMusic
    }));
    if (this.state.playingMusic) {
      this.audio_tag.play();
    } else {
      this.audio_tag.pause();
    }
  }

  render() {
    return (
      <div className="galleryView container">
        <h2>Gallery</h2>
        {this.state.img && <div className="imageContainer" dangerouslySetInnerHTML={{ __html: this.props.fetchedData[this.state.img.url] }} />}
        {this.state.text && this.props.fetchedData[this.state.text.url] && <p>{this.props.fetchedData[this.state.text.url].text}</p>}
        {this.state.text &&
          this.props.fetchedData[this.state.text.url] && (
            <a href={this.props.fetchedData[this.state.text.url].source}> Source: {this.props.fetchedData[this.state.text.url].source}</a>
          )}
        {this.state.sound && (
          <div className="audioBox">
            <div className="audioItem">
              <button className="tab-button" onClick={this.playMusic}>
                Play sound
              </button>
              <button className="tab-button" onClick={this.pauseMusic}>
                Pause sound
              </button>
              <audio
                ref={input => {
                  this.audio_tag = input;
                }}
                src={this.state.sound.url}
                autoPlay
                type="audio/mpeg"
                id="audioPlayer"
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default GalleryView;
