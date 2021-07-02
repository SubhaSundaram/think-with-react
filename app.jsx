// const container = document.getElementById('react-container')
// ReactDOM.render('Hello! Welcome to React', container)

// const Container = () => {
//   return React.createElement(
//     `div`,
//     null,
//     `Hey ProGrads! Welcome to React Learning`,
//     React.createElement(`div`, null, `Let's rock and roll`),
//   )
// }
// Render the Container

// class ReactContainer extends React.Component {
//   // constructor - to initialize the state
//   constructor() {
//     super()
//     this.state = {
//       name: 'Subha',
//     }
//   }
//   // render method to render the react dom
//   render() {
//     return React.createElement(
//       `div`,
//       null,
//       `Hey ProGrads`,
//       React.createElement(`div`, null, `Let's rock and roll`),
//     )
//   }
// }
// const container = document.getElementById('react-container')
// ReactDOM.render(React.createElement(ReactContainer), container)

class ReactContainer extends React.Component {
  // constructor - to initialize the state
  constructor() {
    super()
    this.state = {
      name: 'Subha',
    }
  }
  // render method to render the react dom
  render() {
    return (
      <div>
        Hey ProGrads
        <div>Let's rock and roll Subha</div>
      </div>
    )
  }
}
const container = document.getElementById('react-container')
ReactDOM.render(<ReactContainer />, container)
