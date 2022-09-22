import { VisibilityContext } from "react-horizontal-scrolling-menu";
import React from "react";
import { Box, Center, StackDivider, Text, VStack } from "@chakra-ui/react";
import Moment from "moment";

export default function Card({
  onClick,
  selected,
  title,
  itemId,
  numSeatsAvailable,
}: {
  onClick: any;
  selected: any;
  title: any;
  itemId: any;
  numSeatsAvailable: any;
}) {
  const visibility = React.useContext(VisibilityContext);

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
              <Text color="black">{Moment(title).format("HH:mm")}</Text>
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
              <Text color="black">{Moment(title).format("HH:mm")}</Text>
            </Box>
            <Box h="40px">
              <Text color="black"> DISPONIBLE </Text>
            </Box>
          </VStack>
        </Center>
      )}
    </div>
  );
}
