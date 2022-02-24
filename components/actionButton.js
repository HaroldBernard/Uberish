import tw from "tailwind-styled-components"
const ActionButton = tw.div`
flex bg-gray-200 m-1 flex-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl
`
const ActionButtonImage = tw.img`
h-3/5
`
const ActionButtonImg = (props) => {
  return (
    <ActionButtonImage src={props.pic}/>
  )
}

export {ActionButtonImg, ActionButton}