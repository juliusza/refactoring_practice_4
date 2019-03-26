import React, { Component } from 'react';

class InfoBar extends Component {
    render() {
        return <div data-testid='infobar' className='infobar'>
            <p>{this.props.text}</p>
            {this.props.imageUrl &&
                <img alt='album art' src={this.props.imageUrl} />
            }
        </div>;
    }
}

export default InfoBar;
