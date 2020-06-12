import React, { Component } from 'react';
import Carousel from 'nuka-carousel';

const SingleWork = ({ work }) => {
  return (
    <a href={work.url} target="_blank" rel="noopener noreferrer">
      <div className="smallWork">
        <div className="image">
          <img src={process.env.REACT_APP_BACKEND_URL + work.logo[0].url} alt={work.logo.url} />
        </div>
        <div className="content">
          <h3>
            {work.siteName}
          </h3>
          <p className="techies">
            <span>Main tech</span>
            :&nbsp;
            {work.main_teches.map((main) => {
              return `${main.name} `;
            })}
          </p>
          <p className="techies">
            <span>Support tech</span>
            :&nbsp;
            {work.other_teches.map((other) => {
              return `${other.name} `;
            })}
          </p>
        </div>
      </div>
    </a>
  );
};

class Works extends Component {
  buttonStyle = {
    background: 'linear-gradient(to bottom, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    padding: 0,

  };

  constructor(props) {
    super(props);
    this.state = {
      carouselNr: 2,
      sliderWidth: 1.3,
    };
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
    this.updateDimensions();
  }

  updateDimensions() {
    if (window.innerWidth >= 768) {
      this.setState({ carouselNr: 3, sliderWidth: 1 });
    } else {
      this.setState({ carouselNr: 2, sliderWidth: 1.3 });
    }
  }

  render() {
    return (
      <section className="homeWorksContainer">
        <h2>Last projects</h2>
        <div className="homeWorks">
          <Carousel
            slidesToShow={this.state.carouselNr}
            defaultControlsConfig={{
              nextButtonText: '>',
              prevButtonText: '<',
              prevButtonStyle: this.buttonStyle,
              nextButtonStyle: this.buttonStyle,
              pagingDotsStyle: { fill: '#fff' },
            }}
            transitionMode="scroll3d"
            wrapAround
            slideWidth={this.state.sliderWidth}
          >
            {this.props.works.map((work) => {
              return <SingleWork key={work.id} work={work} />;
            })}
          </Carousel>
        </div>
      </section>
    );
  }
}

export default Works;
