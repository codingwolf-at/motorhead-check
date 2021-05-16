import {HeaderProps} from "./HeaderProps.types"
import {Container, Heading, Text} from "@chakra-ui/react";


export function Header({userName, userScore, currentQueNo}: HeaderProps) {
  return (
    <Container p={3} maxW="container.lg" bg="gray.100">
      <Heading align="center" mb={2}>Motor-Head Check ✔</Heading>
      <Text fontSize="xl" align="right">
        Hello {userName}!
      </Text>
      <Text fontSize="xl" align="right">
        Your Score: {userScore}
      </Text>
      <Text fontSize="xl" align="right">
        Current Question: {currentQueNo}
      </Text>
    </Container>
  )
}
