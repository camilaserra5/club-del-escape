import * as React from "react";
import { ChakraProvider, Checkbox } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import theme from "./theme";
import Booking from "./pages/Booking";
import Test from "./pages/Test";
import Checkout from "./pages/Checkout";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/checkout/:productId/:" element={<Checkout />} />
      <Route path="/test" element={<Test />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </ChakraProvider>
);
