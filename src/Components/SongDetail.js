import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 

class SongDetail extends Component {
    render() {
    if (!this.props.song) {
    return (
            <div>Select Song</div>
        )
    } else {
        return (
        <>
            <h3>Title: {this.props.song.title}</h3>
            <h3>Duration: {this.props.song.duration}</h3>
        </>                    
        )
    }

    }
} 

const mapStateToProps = (state) => {
    return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail)