import '../styles/Profile.css'

const Profile = (props) => {
    console.log(props.person.name)

    //object de-construction
    const {name,img,phone,email}= props.person

    return (
    <div className='main'>
        <h1> MyContacts </h1>
        <div>
            <div>
                <h2>Person Name: {name}</h2>
                <img src={img} />
            </div>
            <div>
                <p>{phone}</p>
                <p>{email}</p>
            </div>
        </div>
    </div>
  )
}

export default Profile