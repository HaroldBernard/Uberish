import tw from "tailwind-styled-components"
const Name = tw.div`
mr-4 w-20 text-sm
`
const User = (props) => {
    return (
          <Name>{props.user}</Name>
    )
  }

export default User