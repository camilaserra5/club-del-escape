import React, { useState } from "react";
import LandingLayout from "../components/LandingLayout";
import {
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  HStack,
  Image,
  Circle,
  Link,
  Text,
  StackDivider,
  VStack,
} from "@chakra-ui/react";
// @ts-ignore
import Carousel from "react-grid-carousel";

import Moment from "moment";
import data from "../data/slots.json";
import holi from "../data/data.json";
import { AiFillStar, IoMdInformationCircleOutline } from "react-icons/all";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import HorizontalScroll from "react-horizontal-scrolling";
export default function Booking() {
  Moment.locale("en");

  const elResplandor = data.data.filter(
    (slot) => slot.productId === "41558KL4J7F181FD0BC212"
  );
  const prohHablar = data.data.filter(
    (slot) => slot.productId === "41558XPA6XA17F0A6C0884"
  );
  const moneda1 = data.data.filter(
    (slot) => slot.productId === "41558H7PR731777FB9E84A"
  );
  const moneda2 = data.data.filter(
    (slot) => slot.productId === "41558LH7JWU1777FC2E463"
  );
  const jack = data.data.filter(
    (slot) => slot.productId === "41558KFTKKK1777FCE1B0B"
  );
  const miedo1 = data.data.filter(
    (slot) => slot.productId === "41558R4MJK71777F74646B"
  );
  const miedo2 = data.data.filter(
    (slot) => slot.productId == "415586X47JA1777F930DAA"
  );
  const listasCOLEGIALES = [
    elResplandor,
    prohHablar,
    moneda1,
    moneda2,
    jack,
    miedo1,
    miedo2,
  ];

  const orfanato = data.data.filter(
    (slot) => slot.productId === "41558AU966P17BC6F50BFA"
  );
  const robo1 = data.data.filter(
    (slot) => slot.productId === "415586YAU4X1777F5BC8A6"
  );
  const robo2 = data.data.filter(
    (slot) => slot.productId === "41558AAH4P31777F60C3C2"
  );
  const fuga = data.data.filter(
    (slot) => slot.productId === "4155864K6CR1777F6436F2"
  );
  const paranormal = data.data.filter(
    (slot) => slot.productId === "41558YJCRNY1777F4B61B7"
  );
  const listasPALERMO = [orfanato, robo1, robo2, fuga, paranormal];
  const [currentDay, setCurrentDay] = useState<string>(
    data.data.at(0)!.startTime
  );

  const [local, setLocal] = useState<string>("palermo");

  function find(productId: string) {
    const res = holi.find((d) => d.productId === productId);
    if (res == undefined) console.log(productId);
    return res;
  }

  return (
    <LandingLayout>
      <Center bg="black" h="100px" color="white">
        <HStack spacing={8}>
          <Link
            onClick={() => {
              setCurrentDay(Moment(currentDay).subtract(1, "d").format());
            }}
          >
            <ArrowLeftIcon />
          </Link>
          <Text fontSize="xl" as="b">
            {Moment(currentDay).format("DD/MM/YYYY")}
          </Text>
          <Link
            onClick={() => {
              setCurrentDay(Moment(currentDay).add(1, "d").format());
            }}
          >
            <ArrowRightIcon />
          </Link>
        </HStack>
      </Center>

      <Center mb={10}>
        {local == "palermo" && (
          <Button
            colorScheme="teal"
            onClick={() => {
              setLocal("colegiales");
            }}
          >
            Ver colegiales
          </Button>
        )}
        {local == "colegiales" && (
          <Button
            colorScheme="teal"
            onClick={() => {
              setLocal("palermo");
            }}
          >
            Ver palermo
          </Button>
        )}
      </Center>
    </LandingLayout>
  );
}
