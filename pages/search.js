import { useState } from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/link'

const Search = () => {
    const [ pickUplocation, setpickUpLocation ] = useState("");
    const [ dropOffLocation, setDropOffLocation] = useState("");

    return (
        <Wrapper>
            <ButtonContainer>
                <Link href="/">
                    <BackButton
                        src='https://img.icons8.com/ios-filled/50/000000/left.png'
                    />
                </Link>
            </ButtonContainer>
            <InputContainer>
                <FromToIcon>
                    <Circle src='https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png' />
                    <Line
                        src='https://img.icons8.com/ios/50/9CA3AF/vertical-line.png'
                    />
                    <Square
                        src='https://img.icons8.com/windows/50/000000/square-full.png'
                    /> 
                </FromToIcon>
                <InputBoxes>
                    <Input
                        placeholder='Enter pickup location'
                        value={pickUplocation}
                        onChange={(e)=>setpickUpLocation(e.target.value)}
                    />
                    <Input
                        placeholder='Where to?'
                        value={dropOffLocation}
                        onChange={(e)=>setDropOffLocation(e.target.value)}
                    />
                </InputBoxes>
                <PlusIcon src='https://img.icons8.com/ios/50/000000/plus-math.png' />
            </InputContainer>
            <SavedPlaces>
                <StarIcon src='https://img.icons8.com/ios-filled/50/ffffff/star--v1.png' />
                Saved Places
            </SavedPlaces>
            <Link href={{ 
                pathname: "/confirm", 
                query: {
                    pickup: pickUplocation,
                    dropoff: dropOffLocation
                }
            }}>
                <ConfirmButtonContainer>
                    Confirm Locations
                </ConfirmButtonContainer>
            </Link>
        </Wrapper>
    )
}

export default Search

const ConfirmButtonContainer = tw.div`
bg-black mx-4 mt-2 text-white px-4 py-3 flex justify-center text-2xl cursor-pointer
`

const Wrapper = tw.div`
bg-gray-200 flex flex-col h-screen
`

const ButtonContainer = tw.div`
h-10 px-4 bg-white
`

const BackButton = tw.img`
h-12 object-contain
`

const InputContainer = tw.div`
flex px-4 bg-white items-center
`

const FromToIcon = tw.div`
flex flex-col items-center justify-center
`

const Circle = tw.img`
h-2.5 object-contain 
`

const Line = tw.img`
h-10
`

const Square = tw.img`
h-3
`

const InputBoxes = tw.div`
flex flex-col flex-1 
`

const Input = tw.input`
my-2 h-10 rounded-2 border-none outline-none bg-gray-200 rounded p-2
`

const PlusIcon = tw.img`
w-10 h-10 ml-3 rounded-full object-contain bg-gray-200 p-1
`

const SavedPlaces = tw.div`
bg-white px-4 flex py-2 items-center  mt-2
`

const StarIcon = tw.img`
h-10 w-10 bg-gray-400 p-2 rounded-full mr-1
`


