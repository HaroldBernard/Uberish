import mapboxgl from 'mapbox-gl'
import {useEffect} from 'react'
import tw from "tailwind-styled-components"

mapboxgl.accessToken = 'pk.eyJ1IjoiaGIyOCIsImEiOiJja3p5eG81OHUwNHgzM2pxd3hydjJpc3plIn0.ZQFIBlRJxOpT_ZRbRatRqQ';
const Wrapper = tw.div`
flex-1
`
function Map() {
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/hb28/ckzz56v2100cl15n7yk6g6eba',
            center: [-100, 40],
            zoom: 3
        });
    });

   return <Wrapper id='map'></Wrapper>
   
}
export default Map