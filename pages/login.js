import {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import tw from 'tailwind-styled-components'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../firebase'
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Login = () => {
    const router = useRouter()

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                router.push("/")
            }
        });
    }, [])


    return (
        <Wrapper>
            <UberLogo src='https://i.ibb.co/n6LWQM4/Post.png' />
            <TopSection>
                <Title>Log in to access yor account</Title> 
                <HeadImage src='https://i.ibb.co/CsV9RYZ/login-image.png'/>
                <SignInButton onClick={()=>signInWithPopup(auth, provider)}>
                    Sign in with Google
                </SignInButton>
            </TopSection>
        </Wrapper>
    )
}

export default Login

const Wrapper = tw.div`
flex flex-col h-screen w-screen bg-gray-200 p-4
`

const UberLogo = tw.img`
h-8 object-contain self-start
`

const TopSection = tw.div`
flex  flex-col flex-grow
`

const Title = tw.div`
text-5xl pt-4 text-gray-500
`
const HeadImage = tw.img`

`
const SignInButton = tw.button`
bg-black text-white text-center py-4 mt-8 self-center w-full cursor-pointer
`