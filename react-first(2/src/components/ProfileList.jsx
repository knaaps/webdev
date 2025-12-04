import Profile from './Profile'
import contacts from '../data/contact'

const ProfileList = () => {
console.log(contacts)
  return (
    <div> 
        {
            contacts.map((item)=> (
                <Profile key={item.id} person={item} />
            ))

        }
    </div>
  )
}

export default ProfileList