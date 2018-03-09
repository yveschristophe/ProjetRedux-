import React, { Component } from 'react';
import './CartesProduits.css';

class footer extends Component {
    render() {
        return (
            <div className="theFooter">
                <div className="theFooterDiv">
                    <img className="theFooterDivButton1" alt="Reso sociaux" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/1000px-F_icon.svg.png" height="20px" width="20px" />
                    <img className="theFooterDivButton1" alt="Reso sociaux" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Instagram.pn.png/240px-Instagram.pn.png" height="20px" width="20px" />
                    <img className="theFooterDivButton1" alt="Reso sociaux" src="https://upload.wikimedia.org/wikipedia/fr/thumb/c/c8/Twitter_Bird.svg/1259px-Twitter_Bird.svg.png" height="20px" width="20px" />
                </div>
                <div className="theFooterDiv theFooterDivButton2">
                <a href="https://github.com/yveschristophe/ProjetRedux-" target="_blank" >
                    <p className="hColor">Made with love by team: Boonk Gom</p>
                </a>
                </div>

            </div>
        );
    }
}

export default footer;