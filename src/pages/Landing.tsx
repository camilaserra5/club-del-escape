import React from "react";
import LandingLayout from "../components/LandingLayout";
import Hero from "../components/Hero";
import { Text } from "@chakra-ui/react";
import RoomsListing from "../components/RoomsListing";

export default function Landing() {
  return (
    <LandingLayout>
      <Hero></Hero>

      <Text align="center" fontSize="3xl" color="tomato">
        SEDE COLEGIALES
      </Text>
      <Text align="center" fontSize="xl" color="white">
        Giribone 1041
      </Text>
      <RoomsListing sede="COLEGIALES"></RoomsListing>
      <br />
      <br />
      <br />
      <Text align="center" fontSize="3xl" color="tomato">
        SEDE PALERMO
      </Text>
      <Text align="center" fontSize="xl" color="white">
        Avenida Córdoba 4265
      </Text>
      <RoomsListing sede="PALERMO"></RoomsListing>
    </LandingLayout>
  );
}
