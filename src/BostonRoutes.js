import React from "react";
import useFetchSuspense from "./useFetchSuspense";

export default function BostonRoutes() {
  const data = useFetchSuspense("https://api-v3.mbta.com/routes", {
    query: { "filter[type]": "0,1" }
  });

  return (
    <ul>
      {data.data.map(route => (
        <li key={route.id}>{route.attributes.long_name}</li>
      ))}
    </ul>
  );
}
