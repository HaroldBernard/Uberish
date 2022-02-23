import tw from "tailwind-styled-components"
const Image = tw.img`
h-12 w-12 rounded-full border boarder-gray-200 p-px 
`
const UserImage = (props) => {
  return <Image src={props.src}></Image>

}

export default UserImage