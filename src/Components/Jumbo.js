import React, { Component } from 'react';
import Tacos from '../Images/Tacos.jpeg';

const JumboStyle = {
  backgroundImage: `url(${Tacos})`,
  backgroundSize:'cover',
  height: '350px',
}

class Jumbo extends Component {
  render() {
    return (
      <div className="Jumbo" style={JumboStyle}>
            <h1 className="TitreResto">Boonk Gom</h1>
      </div>
  );
  }
  }
  export default Jumbo;