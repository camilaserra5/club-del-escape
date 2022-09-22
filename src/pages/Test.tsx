import React, { useState } from "react";
import HorizontalScroll from "react-horizontal-scrolling";
import { Image } from "@chakra-ui/react";
// @ts-ignore
import Carousel from "react-grid-carousel";

export default function Test() {
  return (
    // @ts-ignore
    <HorizontalScroll>
      <Image maxH="400px" src={"juegos/orfanato.jpeg"} />
      <Image maxH="400px" src={"juegos/orfanato.jpeg"} />
      <Image maxH="400px" src={"juegos/orfanato.jpeg"} />
      <Image maxH="400px" src={"juegos/orfanato.jpeg"} />
      <Image maxH="400px" src={"juegos/orfanato.jpeg"} />
      <Image maxH="400px" src={"juegos/orfanato.jpeg"} />
      <Image maxH="400px" src={"juegos/orfanato.jpeg"} />
      <Image maxH="400px" src={"juegos/orfanato.jpeg"} />
      <Image maxH="400px" src={"juegos/orfanato.jpeg"} />
      <Image maxH="400px" src={"juegos/orfanato.jpeg"} />
    </HorizontalScroll>
  );
}
