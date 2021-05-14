import {HeaderProps} from "./HeaderProps.types"
import {Container, Heading, Text} from "@chakra-ui/react";


export function Header({userName, userScore}: HeaderProps) {
  return (
    <Container p={3} maxW="container.lg" bg="gray.100">
      <Heading align="center">Quiz</Heading>
      <Text fontSize="xl" align="right">
        Hello {userName}!
      </Text>
      <Text fontSize="xl" align="right">
        Your Score: {userScore}
      </Text>
    </Container>
  )
}
