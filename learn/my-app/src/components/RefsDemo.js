import React, { Component } from 'react'

export class RefsDemo extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef()
      this.cbRef = null
      this.setcBRef = (element) => {
          this.cbRef = element
      }
      }
      componentDidMount() {
          if(this.cbRef) {
              this.cbRef.focus()
          }

        //   this.inputRef.current.focus()
        //   console.log('this.inputRef');
      }
      clickHandler = () => {
          alert(this.inputRef.current.value)
      }

  render() {
    return (
      <div>
          <input type = 'text' ref= {this.inputRef} />
          <input type = 'text' ref= {this.setcBRef} />
          <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default RefsDemo