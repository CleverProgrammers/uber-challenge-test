import { accessToken } from 'mapbox-gl'
import { useEffect, useState } from 'react'
import tw from "tailwind-styled-components"
import Map from './components/Map'
import RideSelector from './components/RideSelector'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Confirm = () => {
    const router = useRouter()
    const { pickup, dropoff } = router.query

    const [ pickUpCoordinates, setPickupCoordinates ] = useState();
    const [ dropoffCoordinates, setDropoffCoordinates] = useState();

    const getPickUpCoordinates = () => {
        const pickUp = "Santa Monica";
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickUp}.json?` + 
            new URLSearchParams({
                access_token: "pk.eyJ1IjoibmF6YXJpeTE5OTUiLCJhIjoiY2t2bGlmdW12MHZlcDJ1bzA5OHh3NDIxeCJ9.li8l-1u52aCFd2ZdW-1IaA",
                limit: 1
            })
        )
        .then((response)=>{
            return response.json();
        }).then(data => {
            setPickupCoordinates(data.features[0].center)
        })
    }

    const getDropoffCoodrinates = () => {
        const dropOff = "Los Angeles";
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropOff}.json?` + 
            new URLSearchParams({
                access_token: "pk.eyJ1IjoibmF6YXJpeTE5OTUiLCJhIjoiY2t2bGlmdW12MHZlcDJ1bzA5OHh3NDIxeCJ9.li8l-1u52aCFd2ZdW-1IaA",
                limit: 1
            })
        )
        .then((response)=>{
            return response.json();
        }).then(data => {
            setDropoffCoordinates(data.features[0].center)
        })
    }

    useEffect(()=>{
        if(pickup && dropoff){
            getPickUpCoordinates(pickup)
            getDropoffCoodrinates(dropoff);
        }
    }, [pickup, dropoff])

    return (
        <Wrapper>
            <ButtonContainer>
                <Link href="/search">
                    <BackButton
                        src='https://img.icons8.com/ios-filled/50/000000/left.png'
                    />
                </Link>
            </ButtonContainer>
            <Map 
                pickUpCoordinates={pickUpCoordinates}
                dropoffCoordinates={dropoffCoordinates}
            />
            <ConfirmRideContainer>
                <RideSelector 
                    pickUpCoordinates={pickUpCoordinates}
                    dropoffCoordinates={dropoffCoordinates}
                />
                <ConfirmButtonContainer>
                    <ConfirmButton>
                        Confirm UberX
                    </ConfirmButton>
                </ConfirmButtonContainer>
            </ConfirmRideContainer>
            {/* Confirm Ride Button */}
        </Wrapper>
    )
}

export default Confirm

const ButtonContainer = tw.div`
rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer
`

const BackButton = tw.img`
h-full object-contain 
`

const ConfirmButton = tw.div`
bg-black text-white text-center py-4 mx-4 my-4 text-xl
`

const ConfirmButtonContainer = tw.div`
border-t-2
`

const ConfirmRideContainer = tw.div`
flex-1 flex flex-col h-1/2
`

const Wrapper = tw.div`
h-screen flex flex-col
`
