import React from "react";
import { Segment, Tab } from "semantic-ui-react";

import UserController from "../components/controllers/UserController";
import ResumeController from "../components/controllers/ResumeController";
import PositionController from "../components/controllers/PositionController";
import CityController from "../components/controllers/CityController";
import JobAdvertisementController from "../components/controllers/JobAdvertisementController";

export default function Dashboard() {
  const tabs = [
    {
      menuItem: "Kullanıcılar",
      render: () => <UserController />,
    },
    {
      menuItem: "Özgeçmiş",
      render: () => <ResumeController />,
    },
    {
      menuItem: "İş İlanı",
      render: () => <JobAdvertisementController />,
    },
    {
      menuItem: "İş Pozisyonu",
      render: () => <PositionController />,
    },
    {
      menuItem: "Şehir",
      render: () => <CityController />,
    },
  ];

  return (
    <div className="dashboard">
      <Segment raised>
        <Tab panes={tabs} menu={{ secondary: true }} />
        <br />
      </Segment>
    </div>
  );
}
