// import Greetings from "./components/Greetings"
// import Profile from "./components/Profile"
// import ProfileList from "./components/ProfileList"
// import Events from "./components/Events"
// import Counter from "./components/Counter"
import Users from "./components/Users"

function App(){

  const person1={
    name:"Angel",
    img:"https://thumbs.web.sapo.io/?W=1200&H=627&delay_optim=1&tv=1&crop=center&epic=NGQ5JjjBb65HU7Fn4U41JFgJpuQ6I8RJPChINqsUmb8256jfJfFyy82iodLu7L0Ruo2kGAE/xcJVEZlmhL3gHY9H/0z+sRUIUVD2baHTPE11u2g=&.jpg",
    phone:"9876543210",
    email:"angel@dimaria.com"
  }
  return(
    <>
      {/* <Greetings text="dinesh" />
      <h3 style={{color:'red', backgroundColor:"black"}}>testing 1, 2, 3)</h3> */}
{/* 
      <Profile person={person1}/> */}

      {/* <ProfileList /> */}
      {/* <Events/> */}
      {/* <Counter/> */}
      <Users/>
    </>
  )
}

//setting export-default  i.e named export means no need to specify 
//which function to be called using '{}'
export default App