import { useEffect } from "react";

const fetchSlots = (start: string, end: string) => {
  const apiKey = "AU63AAEP4RCTEHAXM9HXJ41558697WMR1777F47D4D4";
  const secret = "IPEwY87K3Eoskq4c2EiDQ0jP4RwM2P5A";
  return fetch(
    "https://api.bookeo.com/v2/availability/slots?apiKey" +
      apiKey +
      "=&secretKey=" +
      secret +
      "&startTime=" +
      start +
      "&endTime=" +
      end +
      "&itemsPerPage=300"
  )
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
};
