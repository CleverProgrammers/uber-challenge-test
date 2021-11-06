import React from 'react'
import { useEffect } from "react";
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoibmF6YXJpeTE5OTUiLCJhIjoiY2t2bGlmdW12MHZlcDJ1bzA5OHh3NDIxeCJ9.li8l-1u52aCFd2ZdW-1IaA';

const Map = (props) => {

    useEffect(()=>{
        const map = new mapboxgl.Map({
          container: "map",
          style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
          center: [-99.29011, 39.39172],
          zoom: 3
          });

        if(props.pickUpCoordinates){
            addToMap(map, props.pickUpCoordinates);
        }

        if(props.dropoffCoordinates){
            addToMap(map, props.dropoffCoordinates);
        }

        if(props.pickUpCoordinates && props.dropoffCoordinates){
            map.fitBounds([
                props.pickUpCoordinates,
                props.dropoffCoordinates
            ], {
                padding: 60
            })
        }
      }, [props.pickUpCoordinates, props.dropoffCoordinates])

    const addToMap = (map, coordinates) => {
        const marker = new mapboxgl.Marker()
        .setLngLat(coordinates)
        .addTo(map)
    }

    return (
        <Wrapper id="map">
            
        </Wrapper>
    )
}

export default Map

const Wrapper = tw.div`
flex-1 h-1/2
`
