import '../styles/Greeting.css'
import cat from '../assets/cat.jpg'


const t= new Date().getHours()
var greet= 0
  if(t<12){
    greet="Morning"
  }
  else if(t>=12 && t<18){
    greet="Afternoon"
  }
  else{
    greet="Evening"
  }

const Greetings=({text})=>{
  
  return (
    <>
      <h1>{greet} {text}, welcome to React</h1>
      <h2>This is meant to greet the user as a custom component!</h2>
      <div className='gallery'>
        <img src={cat} alt='imageOfCat' />
        <img src={cat} alt='imageOfCat' />
      </div>
      
    </>
  )
}

export default Greetings
