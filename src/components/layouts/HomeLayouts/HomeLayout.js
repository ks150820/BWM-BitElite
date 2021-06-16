import React from "react";
import Head from "next/head";
import { HeroCarousel } from "../../widget/ui/WidgetCarousel";
import ServiceBlocks from "./components/ServiceBlocks";
import ShippingExperienceBlock from "./components/ShippingExperienceBlock";
import BiggestFanBlock from "./components/BiggestFanBlock";
import TeamBlock from "./components/TeamBlock";
import GalleryBlock from "./components/GalleryBlock";
import LatestStoriesBlock from "./components/LatestStoriesBlock";
import JobpositionBlock from "./components/JobpositionBlock";
import LocationAndContactBlock from "./components/LocationAndContactBlock";

const HomeLayout = () => {
  return (
    <div>
      <Head>
        <title>Blue Whale Maritime - Home</title>
      </Head>
      <HeroCarousel />
      <ServiceBlocks />
      <ShippingExperienceBlock />
      <BiggestFanBlock />
      <TeamBlock />
      <GalleryBlock />
      <LatestStoriesBlock />
      <JobpositionBlock />
      <LocationAndContactBlock />
    </div>
  );
};

export default HomeLayout;
