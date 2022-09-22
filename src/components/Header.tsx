import React, { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/all";
import { Image } from "@chakra-ui/react";

const Links = ["Juegos", "Eventos", "Encontranos", "Gift Card", "FAQs"];

const NavLink2 = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    color="gray.200"
    _hover={{
      textDecoration: "none",
      bg: "gray.700",
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg="black" px={4}>
        <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            bg="gray.900"
            color="white"
            _hover={{
              bg: "gray.500",
            }}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box maxW="100px" mr="50px" ml="10px">
              <Image src="logo.png" />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink2 key={link}>{link}</NavLink2>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Button
              variant={"solid"}
              colorScheme={"red"}
              size={"sm"}
              mr={4}
              leftIcon={<AddIcon />}
            >
              <NavLink to="/booking" className="flex items-center mb-4 sm:mb-0">
                Reservar
              </NavLink>
            </Button>
            <Menu>
              <IconButton
                variant="outline"
                colorScheme="teal"
                size={"sm"}
                mr={4}
                aria-label="Twitter"
                icon={<FaTwitter />}
              />
              <IconButton
                variant="outline"
                colorScheme="teal"
                size={"sm"}
                mr={4}
                aria-label="Facebook"
                icon={<FaFacebook />}
              />
              <IconButton
                variant="outline"
                colorScheme="teal"
                size={"sm"}
                mr={4}
                aria-label="Instagram"
                icon={<FaInstagram />}
              />
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink2 key={link}>{link}</NavLink2>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
