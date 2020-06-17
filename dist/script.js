function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const Point = ({
  className,
  animationDuration }) =>

React.createElement("div", {
  className: `${className} point`,
  style: { animationDuration: animationDuration } });


const Star = ({
  style,
  animationDuration }) =>

React.createElement("div", { class: "star", style: style },
React.createElement(Point, { className: "point-1", animationDuration: animationDuration }),
React.createElement(Point, { className: "point-2", animationDuration: animationDuration }),
React.createElement(Point, { className: "point-3", animationDuration: animationDuration }),
React.createElement(Point, { className: "point-4", animationDuration: animationDuration }),
React.createElement(Point, { className: "point-5", animationDuration: animationDuration }));


class App extends React.Component {
  constructor() {
    super();_defineProperty(this, "renderStars",


    () => {
      const stars = [];
      const body = document.getElementsByTagName('body')[0].getBoundingClientRect();
      const getN = () => Math.random().toFixed(2);
      const left = () => getN() * body.width;
      const top = () => getN() * body.height;
      const animationDuration = () => `${getN() * 200}s`;
      const scale = () => `scale(${getN() * 0.05})`;
      const rotate = () => `rotate(${getN() * 1000}deg)`;

      for (let i = 0; i < 20; i++) {
        const transform = `${scale()} ${rotate()}`;

        stars.push(
        React.createElement(Star, { style: {
            transform: transform,
            position: 'absolute',
            left: left(),
            top: top() },

          animationDuration: animationDuration() }));



        for (let i = 0; i < 20; i++) {
          const oneOrTwo = () => i % 2 === 0 ? '1px' : '2px';

          stars.push(
          React.createElement("div", {
            style: {
              height: oneOrTwo(),
              width: oneOrTwo(),
              borderRadius: '50%',
              background: 'white',
              position: 'absolute',
              left: left(),
              top: top() } }));



        }
      }

      return stars;
    });}

  render() {
    return [
    this.renderStars(),
    React.createElement(Star, null),
    React.createElement("button", {
      className: "button",
      onClick: () => this.forceUpdate() }, "Exploring More")];




  }}


ReactDOM.render(React.createElement(App, null), document.getElementById('app'));