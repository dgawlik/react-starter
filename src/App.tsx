import { Flex, Text, Button, Container } from "@radix-ui/themes";
import * as Avatar from '@radix-ui/react-avatar';
import './App.css'


const MyImage = () => (
    <Avatar.Root>
      <Avatar.Image
        src="/Firefly.png"
        alt="DG"
        width="600px"
      />
      <Avatar.Fallback delayMs={600}>
        DG
      </Avatar.Fallback>
    </Avatar.Root>
  );


function App() {


  return (

    <Container p="4" width="70vw">
      <Flex direction="column" gap="2" align="center">
        <MyImage/>
        <Text>Hello from Radix Themes :)</Text>
        <Button>Let's go</Button>
      </Flex>
    </Container>

  )
}

export default App
