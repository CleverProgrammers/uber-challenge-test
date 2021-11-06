import { useEffect, useState } from "react";
import tw from "tailwind-styled-components"
import Map from "./components/Map";
import Link from 'next/link'
import {auth} from '../firebase'
import { useRouter } from 'next/router'

import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Home() {
  const router = useRouter()
  const [user, setUser] = useState(null);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
          setUser({
            name: user.displayName,
            photoUrl: user.photoURL
          })
          console.log(user)
      } else {
        router.push("/login")
      }
    });

    return ()=> unsubscribe()
  }, [])



  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg"/>
           <Profile>
             <Name>{user && user.name}</Name>
             <UserImage src={user && user.photoUrl} onClick={()=>signOut(auth)}  >

             </UserImage>
           </Profile>
        </Header>
        <ActionButtons>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
              Ride
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
            Ride
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
            Ride
          </ActionButton>
        </ActionButtons>
      </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
flex flex-col h-screen
`

const ActionItems = tw.div`
flex-1 p-4
`

const Header = tw.div`
flex justify-between items-center
`

const ActionButtons = tw.div`
flex
`

const UberLogo = tw.img`
h-28
`

const Profile = tw.div`
flex
`

const Name = tw.div`
w-20 mr-4 text-sm
`

const UserImage = tw.img`
h-12 w-12 rounded-full border border-gray-200 p-px
`

const ActionButton = tw.div`
h-32 bg-gray-200 m-1 flex-1 flex flex-col items-center rounded-lg justify-center text-xl font-medium
`

const ActionButtonImage = tw.img`
h-3/5
`
