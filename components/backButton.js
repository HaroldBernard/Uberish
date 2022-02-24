import tw from "tailwind-styled-components"
const BackButton = tw.div`
bg-white px-4
`
const BackButtonWrapper = tw.div`
bg-gray-200 h-screen
`
const Button = tw.img`
h-12 cursor-pointer
`
const BackButtonImg = () => {
  return <Button src="https://img.icons8.com/ios-filled/50/000000/left.png"></Button>

}

export {BackButtonImg, BackButton, BackButtonWrapper}