import React, {
  Component
} from 'react'
//import ImageCutter from './react-image-cutter'
import WaterFall from './react-waterfall-layout'
import ReactDOM from 'react-dom'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.data = []
    for ( let i = 0; i < 50; i++ ) {
      this.data.push({
        title: i,
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur beatae, cumque cupiditate ea, eius eveniet fuga harum labore laborum laudantium maxime molestias praesentium quae quisquam reiciendis ullam, veritatis? Optio.'.substr(Math.random() * 230 | 0)
      })
      
    }
  }
  
  renderItem = ({title,content}, index) => {
    return (
        <div key={index} style={{width:200,background:'#e3e3e3',marginBottom:20}}>
          <div style={{padding: '7px 20px'}}>{title}</div>
          <div style={{padding: 15}}>{content}</div>
        </div>
    )
  }
  
  render() {
    return (
        <div>
          <h1>test</h1>
          <WaterFall
              data={this.data}
              renderItem={this.renderItem}
              
          />
        </div>
    )
  }
}

Main.propTypes    = {}
Main.defaultProps = {}

export default Main
ReactDOM.render(<Main/>, document.getElementById('root'))