import React,{useEffect} from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';

const alanKey = '18acb3e9092eb713feaf239c4a2da25b2e956eca572e1d8b807a3e2338fdd0dc/stage'

const App = () => {

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command }) => {
        if(command === 'testCommand') {
          alert('This code was executed')
        }
      }
    })
  }, [])


  return (
    <div></div>
  )
}

export default App