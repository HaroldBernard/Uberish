import tw from "tailwind-styled-components"
const ConfirmButton = tw.div`
flex bg-black text-white m-1 flex-1 h-12 items-center flex-col justify-center  transform hover:scale-105 transition text-xl cursor-pointer

`
const ConfirmButtonContainer = (props) => {
  return (
    <ConfirmButton>{props.children}</ConfirmButton>
  )
}

export default ConfirmButtonContainer