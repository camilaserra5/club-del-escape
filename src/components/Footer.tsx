import {
  Box,
  Button,
  chakra,
  Container,
  IconButton,
  Image,
  Link,
  Menu,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { ReactNode } from "react";
import { FaFacebook } from "react-icons/all";

export default function Footer() {
  return (
    <Box bg="black" color="gray.200" mt="100px">
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Box maxW="200px">
          <Image src="logo.png" />
        </Box>
        <Text as="b" color="gray.400" fontSize="xl">
          Sede Palermo: Av Cordoba 4265
        </Text>
        <Text as="b" color="gray.400" fontSize="xl">
          Sede Colegiales: Giribone 1041
        </Text>
        <Text as="i" color="gray.400" fontSize="lg">
          Teléfono: 011-2255-4004
        </Text>
        <Text as="i" color="gray.400" fontSize="lg">
          Mail: buenosaires@clubdelescape.com
        </Text>
      </Container>

      <Box borderTopWidth={1} borderStyle={"solid"} borderColor={"gray.700"}>
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© 2022 Club del escape.</Text>{" "}
          <Stack direction={"row"} spacing={6}>
            <Button
              variant="outline"
              px={2}
              size={"sm"}
              py={1}
              rounded={"md"}
              color="gray.200"
              _hover={{
                textDecoration: "none",
                bg: "gray.700",
              }}
            >
              Juegos
            </Button>
            <Button
              variant="outline"
              px={2}
              size={"sm"}
              py={1}
              rounded={"md"}
              color="gray.200"
              _hover={{
                textDecoration: "none",
                bg: "gray.700",
              }}
            >
              Eventos
            </Button>
            <Button
              variant="outline"
              px={2}
              py={1}
              rounded={"md"}
              size={"sm"}
              color="gray.200"
              _hover={{
                textDecoration: "none",
                bg: "gray.700",
              }}
            >
              Gift Card
            </Button>
          </Stack>
          <Stack direction={"row"} spacing={6}>
            <IconButton
              variant="outline"
              colorScheme="teal"
              size={"sm"}
              aria-label="Twitter"
              icon={<FaTwitter />}
            />
            <IconButton
              variant="outline"
              colorScheme="teal"
              size={"sm"}
              aria-label="Facebook"
              icon={<FaFacebook />}
            />
            <IconButton
              variant="outline"
              colorScheme="teal"
              size={"sm"}
              aria-label="Instagram"
              icon={<FaInstagram />}
            />
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
