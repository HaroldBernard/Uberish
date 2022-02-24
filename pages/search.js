import React, { useState } from 'react'
import tw from "tailwind-styled-components"
import { BackButton, BackButtonImg } from '../components/backButton'
import SearchScreenWrapper from '../tsComponents/searchScreenWrapper'
import SearchInputContainer from '../tsComponents/searchInputContainer'
import { FromToIcon } from '../components/fromToIcon'
import {SearchPageInput, BoxInputContainer} from '../components/searchPageInput'
import { AddStopButtonImg } from '../components/addStopButton'
import SavedPlaces from '../components/savedPlaces'
import Link from 'next/link';
import ConfirmButtonContainer from '../components/ConfirmBottonContainer'

const search = () => {
    const [pickup, setPickup] = useState();
    const [dropoff, setDropoff] = useState()
  return (
   <SearchScreenWrapper>
    <Link href="/">
        <BackButton>
            <BackButtonImg/>
        </BackButton>
    </Link>
    <SearchInputContainer>
        <FromToIcon/>
        <BoxInputContainer>
            <SearchPageInput onChange={(e) => setPickup(e.target.value)} value={pickup} placeholder="Enter Pickup Location"/>
            <SearchPageInput onChange={(e) => setDropoff(e.target.value)} value={dropoff} placeholder="Where To?"/>
        </BoxInputContainer>
        <AddStopButtonImg/>
    </SearchInputContainer>
    <SavedPlaces src="https://img.icons8.com/ios/344/star--v1.png" header="Saved Places" footer="" cost=""></SavedPlaces>
    <Link href={{
        pathname: "/confirm", 
        query: {
            pickup: pickup,
            dropoff: dropoff  
        }
    }}>
        <div>
            <ConfirmButtonContainer>Confirm Locations</ConfirmButtonContainer>
        </div>
    </Link>
   </SearchScreenWrapper>
  )
}

export default search