import React, { useEffect, useState } from "react";
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
  SimpleGrid,
  Link,
  Text,
  StackDivider,
  VStack,
} from "@chakra-ui/react";
// @ts-ignore
import Carousel from "react-grid-carousel";
import Test from "../components/Carousel";
import Moment from "moment";
import data from "../data/slots.json";
import holi from "../data/data.json";
import { Component } from "react";

import {
  AiFillRightCircle,
  AiFillStar,
  IoMdInformationCircleOutline,
} from "react-icons/all";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import HorizontalScroll from "react-horizontal-scrolling";
export default function Booking() {
  Moment.locale("en");
  const [currentDay, setCurrentDay] = useState<string>(
    Moment.utc().add(1, "d").format()
  );
  const [local, setLocal] = useState<string>("palermo");
  const [listaP, setListaP] = useState<any>([]);
  const [listaC, setListaC] = useState<any>([]);
  const [midata, setMiData] = useState<any>(null);

  useEffect(() => {
    console.log(Moment(currentDay).format("YYYY-MM-DD"));
    console.log(Moment(currentDay).add(1, "d").format("YYYY-MM-DD"));
    fetch(
      "https://club-del-escape-back-5f1q.vercel.app/slots?dateFrom=" +
        Moment(currentDay).format("YYYY-MM-DD") +
        "&dateTo=" +
        Moment(currentDay).add(1, "d").format("YYYY-MM-DD")
    )
      .then((res) => res.json())
      .then((json) => {
        setMiData({ json });
      });
  }, [currentDay]);

  useEffect(() => {
    if (midata != undefined) {
      const elResplandor = midata.json.data.filter(
        (slot: { productId: string }) =>
          slot.productId === "41558KL4J7F181FD0BC212"
      );
      const prohHablar = midata.json.data.filter(
        (slot: { productId: string }) =>
          slot.productId === "41558XPA6XA17F0A6C0884"
      );
      const moneda1 = midata.json.data.filter(
        (slot: { productId: string }) =>
          slot.productId === "41558H7PR731777FB9E84A"
      );
      const moneda2 = midata.json.data.filter(
        (slot: { productId: string }) =>
          slot.productId === "41558LH7JWU1777FC2E463"
      );
      const jack = midata.json.data.filter(
        (slot: { productId: string }) =>
          slot.productId === "41558KFTKKK1777FCE1B0B"
      );
      const miedo1 = midata.json.data.filter(
        (slot: { productId: string }) =>
          slot.productId === "41558R4MJK71777F74646B"
      );
      const miedo2 = midata.json.data.filter(
        (slot: { productId: string }) =>
          slot.productId == "415586X47JA1777F930DAA"
      );
      setListaC([
        elResplandor,
        prohHablar,
        moneda1,
        moneda2,
        jack,
        miedo1,
        miedo2,
      ]);

      const orfanato = midata.json.data.filter(
        (slot: { productId: string }) =>
          slot.productId === "41558AU966P17BC6F50BFA"
      );
      const robo1 = midata.json.data.filter(
        (slot: { productId: string }) =>
          slot.productId === "415586YAU4X1777F5BC8A6"
      );
      const robo2 = midata.json.data.filter(
        (slot: { productId: string }) =>
          slot.productId === "41558AAH4P31777F60C3C2"
      );
      const fuga = midata.json.data.filter(
        (slot: { productId: string }) =>
          slot.productId === "4155864K6CR1777F6436F2"
      );
      const paranormal = midata.json.data.filter(
        (slot: { productId: string }) =>
          slot.productId === "41558YJCRNY1777F4B61B7"
      );
      setListaP([orfanato, robo1, robo2, fuga, paranormal]);
    }
  });

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
            rightIcon={<AiFillRightCircle />}
          >
            Reservar en colegiales
          </Button>
        )}
        {local == "colegiales" && (
          <Button
            colorScheme="teal"
            onClick={() => {
              setLocal("palermo");
            }}
            rightIcon={<AiFillRightCircle />}
          >
            Reservar en palermo
          </Button>
        )}
      </Center>

      {local == "colegiales" &&
        !listaC.empty &&
        listaC.map((sala: any) => {
          return (
            <Grid
              h="160px"
              templateRows="repeat(1, 1fr)"
              templateColumns="repeat(11, 1fr)"
              gap={4}
              ml={5}
              mb={10}
            >
              <GridItem colSpan={1}>
                <Image
                  maxH="160px"
                  minH="160px"
                  minW="110px"
                  mr={10}
                  src={"juegos/" + find(sala.at(0)!.productId)!.img}
                />
              </GridItem>
              <GridItem colSpan={10}>
                <Test sala={sala} venue={"Colegiales"}></Test>
              </GridItem>
            </Grid>
          );
        })}

      {local == "palermo" &&
        !listaP.empty &&
        listaP.map((sala: any) => (
          <Grid
            h="160px"
            templateRows="repeat(1, 1fr)"
            templateColumns="repeat(11, 1fr)"
            gap={4}
            ml={5}
            mb={10}
          >
            <GridItem colSpan={1}>
              <Image
                maxH="160px"
                minH="160px"
                minW="110px"
                mr={10}
                src={"juegos/" + find(sala.at(0)!.productId)!.img}
              />
            </GridItem>
            <GridItem colSpan={10}>
              <Test sala={sala} venue={"Palermo"}></Test>
            </GridItem>
          </Grid>
        ))}
    </LandingLayout>
  );
}
