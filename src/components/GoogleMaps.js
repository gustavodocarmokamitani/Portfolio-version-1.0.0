import React, { Component } from "react";

import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class GoogleMaps extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},

        mapCenter: {
            lat: -23.561306847073755,
            lng: -46.53013953255348
        }
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };

    render() {
        return (
            <Map google={this.props.google}
                initialCenter={{
                    lat: this.state.mapCenter.lat,
                    lng: this.state.mapCenter.lng
                }}
                center={{
                    lat: this.state.mapCenter.lat,
                    lng: this.state.mapCenter.lng
                }}
            >
                <Marker
                    position={{
                        lat: this.state.mapCenter.lat,
                        lng: this.state.mapCenter.lng
                    }}
                />
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyBhzoSqNdeKkCzFjXk9HBzW1Fcy6J0N0IE")
})(GoogleMaps)