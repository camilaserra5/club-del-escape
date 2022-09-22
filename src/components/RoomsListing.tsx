import {
  Box,
  Button,
  Image,
  ModalFooter,
  ModalOverlay,
  ModalContent,
  ModalBody,
  SimpleGrid,
  useDisclosure,
  ModalCloseButton,
  Text,
  ModalHeader,
  Modal,
  Flex,
  HStack,
  Link,
} from "@chakra-ui/react";

import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import data from "../data/data.json";
import { VStack } from "@chakra-ui/react";
import {
  AiFillStar,
  AiOutlineStar,
  BsArrowRight,
  BsArrowRightShort,
  IoMdInformationCircleOutline,
} from "react-icons/all";
import { AddIcon } from "@chakra-ui/icons";

const OverlayOne = () => (
  <ModalOverlay
    bg="blackAlpha.300"
    backdropFilter="blur(10px) hue-rotate(90deg)"
  />
);

type Game = {
  title: string;
  description: string;
  img: string;
  participantsMin: number;
  participantsMax: number;
  difficulty: number;
  ageLimit: number;
};

const RoomsListing = ({ sede }: { sede: string }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  const [gameSelected, setGameSelected] = useState<Game | null>(null);
  return (
    <SimpleGrid minChildWidth="150px" spacing="40px" mr={10} ml={10}>
      {data
        .filter((game) => game.local === sede)
        .map((game) => (
          <Box maxH="400px">
            <VStack spacing={2} align="stretch">
              <Image maxH="400px" src={"juegos/" + game.img} />
              <Button
                onClick={() => {
                  setOverlay(<OverlayOne />);
                  setGameSelected(game);
                  onOpen();
                }}
                variant={"outline"}
                colorScheme={"teal"}
                size={"sm"}
                mr={4}
                rightIcon={<IoMdInformationCircleOutline />}
              >
                Más información
              </Button>
            </VStack>
          </Box>
        ))}

      {gameSelected != null && (
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent bg="gray.700" color="white">
            <ModalHeader>{gameSelected!.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack>
                <HStack spacing={8} pb={10}>
                  <Image maxH="200px" src={"juegos/" + gameSelected!.img} />
                  <Text fontSize="sm">{gameSelected!.description}</Text>
                </HStack>

                <Text fontSize="sm" as="b">
                  Participantes: {gameSelected!.participantsMin} a{" "}
                  {gameSelected!.participantsMax}
                </Text>
                <Text fontSize="sm" as="b">
                  Dificultad: {gameSelected!.difficulty}/10{" "}
                </Text>
                <Text fontSize="sm" as="b">
                  Edad: {gameSelected!.ageLimit}+
                </Text>
                <Text fontSize="sm" as="b">
                  Tiempo de juego: 60 minutos
                </Text>
                <HStack mt={4}>
                  {[...Array(gameSelected!.difficulty)].map((elem, index) => (
                    <AiFillStar color={"yellow"} />
                  ))}
                  {[...Array(10 - gameSelected!.difficulty)].map(
                    (elem, index) => (
                      <AiOutlineStar />
                    )
                  )}
                </HStack>
              </VStack>
            </ModalBody>
            <ModalFooter>
              <Button
                variant={"solid"}
                colorScheme={"red"}
                size={"sm"}
                mr={4}
                rightIcon={<BsArrowRight />}
              >
                <NavLink
                  to="/booking"
                  className="flex items-center mb-4 sm:mb-0"
                >
                  Reservar
                </NavLink>
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </SimpleGrid>
  );
};

export default RoomsListing;
