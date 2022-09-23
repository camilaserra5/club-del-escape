import { VisibilityContext } from "react-horizontal-scrolling-menu";
import React from "react";
import {
  Box,
  Button,
  Center,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  Select,
  ModalHeader,
  ModalOverlay,
  StackDivider,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import Moment from "moment";
import { AddIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import {
  AiFillCheckCircle,
  AiFillStar,
  AiOutlineStar,
  BsArrowRight,
} from "react-icons/all";
import { BsCheckCircle } from "react-icons/bs";
import data from "../data/data.json";

const OverlayOne = () => (
  <ModalOverlay
    bg="blackAlpha.300"
    backdropFilter="blur(10px) hue-rotate(90deg)"
  />
);

export default function Card({
  onClick,
  selected,
  title,
  startTime,
  venue,
  itemId,
  numSeatsAvailable,
}: {
  onClick: any;
  selected: any;
  title: any;
  venue: any;
  startTime: any;
  itemId: any;
  numSeatsAvailable: any;
}) {
  const visibility = React.useContext(VisibilityContext);
  const roomName = data.filter((d) => d.productId == title).at(0)!.title;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  const [slotSelected, setSlotSelected] = React.useState([]);
  return (
    <div
      onClick={() => onClick(visibility)}
      style={{
        width: "160px",
      }}
      tabIndex={0}
    >
      {numSeatsAvailable == 0 && (
        <Center
          borderRadius={"5px"}
          ml={"10px"}
          h="160px"
          color="white"
          bg={"#FFB6B3"}
        >
          <VStack
            divider={<StackDivider borderColor="black" />}
            spacing={2}
            align="stretch"
          >
            <Box h="25px">
              <Text color="black">{Moment(startTime).format("HH:mm")}</Text>
            </Box>
            <Box h="40px">
              <Text color="black"> OCUPADO </Text>
            </Box>
          </VStack>
        </Center>
      )}

      {numSeatsAvailable > 0 && (
        <Center
          borderRadius={"5px"}
          ml={"10px"}
          h="160px"
          color="white"
          bg={"#BDE7BD"}
        >
          <VStack
            divider={<StackDivider borderColor="black" />}
            spacing={2}
            align="stretch"
          >
            <Box h="25px">
              <Text color="black">{Moment(startTime).format("HH:mm")}</Text>
            </Box>
            <Box h="40px">
              <Text color="black" mb={2}>
                {" "}
                DISPONIBLE{" "}
              </Text>
              <Button
                variant={"solid"}
                colorScheme={"green"}
                size={"sm"}
                mr={4}
                onClick={() => {
                  setOverlay(<OverlayOne />);
                  onOpen();
                }}
                rightIcon={<BsCheckCircle />}
              >
                <NavLink
                  to="/booking"
                  className="flex items-center mb-4 sm:mb-0"
                >
                  Reservar
                </NavLink>
              </Button>
            </Box>
          </VStack>
        </Center>
      )}
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent bg="gray.700" color="white">
          <ModalHeader>
            <Text fontSize="3xl" as="b">
              {roomName} - {venue}
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4} align="stretch">
              <Box h="40px" bgColor="green.700">
                <Text color="white" fontSize="xl" as="b">
                  Viernes, 23 septiembre 2022
                </Text>
              </Box>
              <Box h="40px" bgColor="green.700">
                <Text color="white" fontSize="xl" as="b">
                  {Moment(startTime).format("HH:mm")}
                </Text>
              </Box>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="brand" size={"sm"} mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button
              variant={"solid"}
              colorScheme={"red"}
              size={"sm"}
              mr={4}
              rightIcon={<BsArrowRight />}
            >
              <NavLink to="/booking">Reservar</NavLink>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
