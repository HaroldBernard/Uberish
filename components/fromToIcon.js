import tw from "tailwind-styled-components"

const Circle = tw.img`
h-2.5
`
const Line = tw.img`
h-1o
`
const Square = tw.img`
h-3
`
const Wrapper = tw.div`
w-10 flex flex-col mr-2 items-center
`
const FromToIcon = () => {
  return (
    <Wrapper>
        <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png"></Circle>
        <Line src="https://img.icons8.com/ios-filled/344/vertical-line.png"></Line>
        <Square src="https://img.icons8.com/windows/344/square-full.png"></Square>
    </Wrapper>
  
    )
}

export {FromToIcon}