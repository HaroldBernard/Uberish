import tw from "tailwind-styled-components"
const Inputs = tw.input`
flex h-20 bg-gray-200 text-2xl p-4 items-center mt-8 m-4
`
const Input = (props) => {
  return (
    <Inputs placeholder={props.placeholder}/>
  )
}

export default Input