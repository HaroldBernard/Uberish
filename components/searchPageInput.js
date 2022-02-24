import tw from "tailwind-styled-components"
const Inputs = tw.input`
h-10 bg-gray-200 my-2 rounded-2 p-2
`
const BoxInputContainer = tw.div`
flex flex-col flex-1 
`
const SearchPageInput = (props) => {
  return (
        <Inputs onChange={props.onChange} value={props.value} placeholder={props.placeholder}/>

  )
}

export {SearchPageInput, BoxInputContainer}