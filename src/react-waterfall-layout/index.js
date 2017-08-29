import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class WaterFall extends PureComponent {
  constructor() {
    super()
    this.state = {
      waterfall: []
    }
    
  }
  
  componentDidMount() {
    this.intialize()
    document.body.onresize = () => {
      this.resetWaterfall()
    }
  }
  
  componentWillUnmount() {
    document.body.onresize = null
  }
  
  intialize      = () => {
    const { itemWith } = this.props
    this.dataIndex     = 0
    let containerDOM   = ReactDOM.findDOMNode(this.refs.waterfall_container)
    let columns        = this.getColumn(containerDOM, itemWith || 200)
    console.log('columns', columns)
    this.setState({
      columns,
      waterfall: fillArray([], columns)
    })
  }
  resetWaterfall = () => {
    
    this.setState({
      columns  : 0,
      waterfall: []
    }, this.intialize)
    
  }
  startWaterFall = () => {
    const { data } = this.props
    
    this.setState(prevState => {
      let heightArr = this.getColumnHeight()
      console.log('heightArr', heightArr)
      let minHeightInArrIndex = getIndexFromArray(heightArr,
          Math.min.apply(this, heightArr))
      console.log('minHeightInArrIndex', minHeightInArrIndex)
      let newArr = [].concat(prevState.waterfall)
      
      let _willAdd = newArr.splice(minHeightInArrIndex, 1)[0]
      
      _willAdd = _willAdd.concat(data[this.dataIndex++])
      
      newArr.splice(minHeightInArrIndex, 0, _willAdd)
      
      return {
        waterfall: newArr
      }
      
    })
    
  }
  
  componentDidUpdate(prevProps, prevState, prevContext) {
    let { columns } = this.state
    const { data }  = this.props
    if (columns && this.dataIndex < data.length) {
      this.startWaterFall()
    }
  }
  
  getColumn       = (container, column_width) => {
    return (container.offsetWidth / column_width) | 0
  }
  getColumnHeight = () => {
    const { columns } = this.state
    return fillArray(1, columns).map((item, index) => {
      let ref     = this.refs[`columns_container_${index}`]
      let element = ReactDOM.findDOMNode(ref)
      return element.offsetHeight
    })
  }
  
  render() {
    const { data, renderItem, ...rest } = this.props
    const { columns, waterfall }        = this.state
    return (
        <div ref="waterfall_container"
             style={{ display: 'flex', justifyContent: 'space-around', overflow: 'auto', alignItems: 'flex-start' }}
             {...rest}
        >
          {columns &&
          fillArray(1, columns).map((item, index) => {
            return (
                <div key={index} id={index}
                     ref={`columns_container_${index}`}>
                  {waterfall[index].map((itemData, _index) => {
                    return renderItem(itemData, _index)
                  })}
                </div>
            )
          })}
        </div>
    )
  }
}

WaterFall.propTypes    = {
  data      : PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired
}
WaterFall.defaultProps = {}

function fillArray(item, length) {
  let result = []
  for ( let i = 0; i < length; i++ ) {
    result.push(item)
  }
  return result
}

function getIndexFromArray(targetArr, item) {
  let targetIndex
  targetArr.map((_item, index) => {
    if (_item === item && targetIndex === undefined) {
      targetIndex = index
    }
  })
  if (targetIndex !== undefined) {
    return targetIndex
  }
  throw Error(`can't find ${item} in ${targetArr}`)
}

export default WaterFall
