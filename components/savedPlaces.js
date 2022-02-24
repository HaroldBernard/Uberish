import tw from "tailwind-styled-components"
const StarIcon = tw.img`
bg-gray-400 w-10 h-10 p-2 rounded-full mr-2
`
const SavedPlacesContainer = tw.div`
flex items-center bg-white px-4 py-2 overflow-y-scroll
`
const Contain = tw.div`
flex items-center
`
const Cost = tw.div`
flex items-center bg-white px-4 py-2
`
const Div = tw.div`
ml-2
`

function SavedPlaces(props) {
  return (
    <SavedPlacesContainer style={{justifyContent: "space-between"}}>
        <Contain>
            <StarIcon src={props.src}/>
            <Div>
                <Div>{props.header}</Div>
                <Div>{props.footer}</Div>
            </Div>
        </Contain>
        <><Cost>{props.cost}</Cost></>
    </SavedPlacesContainer>
  )
}

export default SavedPlaces