import { Box, Button, Center, Flex, Heading } from '@chakra-ui/react'
import { useState } from 'react'
import './App.css'
import random_hobby from './lib/hobbies';
import Suggestion from './components/Suggestion';

function App() {
  const [suggestion, setSuggestion] = useState<string|undefined>();

  return (
    <>
      <Center h="100vh" id="landing">
        <Box justifyContent={"center"}>
          <Heading textAlign={"center"} size="2xl">Find a Hobby</Heading>
          {suggestion ? <Suggestion hobby={suggestion} spinTime={5000} key={suggestion}/> : <br/>}
          <Flex justifyContent="center" alignItems="center">
            <Button textAlign={"center"} colorScheme={"blue"} onClick={()=>setSuggestion(random_hobby())}>Get a new Suggestion! 🔨</Button>
          </Flex>
        </Box>
      </Center>
    </>
  )
}

export default App
