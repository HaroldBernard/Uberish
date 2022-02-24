import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import ConfirmButtonContainer from "../components/ConfirmBottonContainer"
import Map from "../components/map"
import SavedPlaces from "../components/savedPlaces"
import MainScreenWrapper from "../tsComponents/mainScreenWrapper"
import PriceContainer from "../tsComponents/priceContainer"
import {carlist} from "../pages/data/carList"

const confirm = () => {
    const router = useRouter()
    const {pickup, dropoff} = router.query

    const [pickupCoordinates, setPickupCoordinates] = useState()
    const [dropoffCoordinates, setDropoffCoordinates] = useState()
   

    const getCoordinates = (location, num) => {
      fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?` + 
        new URLSearchParams({
            access_token: "pk.eyJ1IjoiaGIyOCIsImEiOiJja3p5eG81OHUwNHgzM2pxd3hydjJpc3plIn0.ZQFIBlRJxOpT_ZRbRatRqQ",
            limit: 1,

        })
      )
      .then(response => response.json())
      .then((data) => {
        if (num == 1) {
            setPickupCoordinates(data.features[0].center)
        } else {
            setDropoffCoordinates(data.features[0].center)
        }
      })
    }
    useEffect(() => {
      getCoordinates(pickup, 1)
      getCoordinates(dropoff, 2)
    }, [pickup, dropoff])
    
  return (
    <MainScreenWrapper>
        <Map pickup={pickupCoordinates} dropoff={dropoffCoordinates} />
        <PriceContainer>
            <SavedPlaces src="https://i.ibb.co/cyvcpfF/uberx.png" header="UberX" footer="5 min Away" cost="$24.00" />
            <SavedPlaces src="https://i.ibb.co/YDYMKny/uberxl.png" header="UberXL" footer="5 min Away" cost="$24.00" />
            <SavedPlaces src="https://i.ibb.co/Xx4G91m/uberblack.png" header="UberBlack" footer="5 min Away" cost="$24.00" />
            <SavedPlaces src="https://i.ibb.co/cyvcpfF/uberx.png" header="Comfort" footer="5 min Away" cost="$24.00" />
            <SavedPlaces src="https://i.ibb.co/1nStPWT/uberblacksuv.png" header="SUV" footer="5 min Away" cost="$24.00" />
        </PriceContainer>  
        <div>
            <ConfirmButtonContainer>Confirm Locations</ConfirmButtonContainer>
        </div>    
    </MainScreenWrapper>
  )
}

export default confirm