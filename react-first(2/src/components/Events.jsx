import React from 'react'

const Events = () => {

    const clicker=(event)=>{
        console.log("clicked");
        console.log(event);
    }

    const fn1=()=>{
        console.log("pidiche!");
    }

    const fn2=()=>{
        console.log("oliche!");
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("form submitted!")
    }
    return (
    <div>
        <button onMouseEnter={fn1} onMouseLeave={fn2}> Hover </button>
        
        <button onClick={clicker}> Clicker </button>

        {/* react renders all components in compilation so passing any value
        thru functions would  just execute directly once and be static the rest*/}
        
        {/* we can resolve this using anonymous function:"()" */}
        <button onClick={()=>alert("okeda")}> Clicker </button>
        
        <form onSubmit={handleSubmit}>
            <input 
            type='text'
            placeholder="enter "
            onChange={(e)=>{

                console.log(e.target.value)
            }}/>

            <button type='submit'>Submit</button>
        </form>
    
    </div>
  )
}

export default Events