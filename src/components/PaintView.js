import React, { Component } from 'react';

class PaintView extends Component {
  constructor(props){
    super(props);
    this.state = {
      nada: true,
    }
  }

  componentDidMount(){
    console.log("hello from PaintView");
  }

  render(){
    return (
      <div>HELLO FROM PAINTViEW</div>
    )
  }
}

export default PaintView;