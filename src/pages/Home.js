import React from "react";

import {
  Grid,
} from "semantic-ui-react";

import "../assets/css/style.css";
import JobAdvertisements from "../components/layouts/JobAdvertisementLayout/JobAdvertisements";

export default function Home() {
  return (
    <>
      <JobAdvertisements />
    </>
  );
}
