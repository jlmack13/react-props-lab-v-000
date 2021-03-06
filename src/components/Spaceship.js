// Code The Spaceship Component Here
import React from 'react';
import ReactDOM from 'react-dom';

class Spaceship extends React.Component {
    render () {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h2>{this.props.speed}</h2>
                <h3>{this.props.hasRockets}</h3>
                <p>{this.props.colors.join(', ')}</p>
            </div>
        );
    }
}

Spaceship.defaultProps = {
    speed: "slow",
    hasRockets: false,
    colors: ["black", "red"]
}

export default Spaceship;