import React from "react";
import { Link } from "react-router-dom";

import Helmet from "../components/Helmet";
import ServiceBox from "../components/Services/ServiceBox";
import Grid from "../components/Grid";
import BannerTop from "../components/BannerTop";
import TopSection from "../components/Services/TopSection";
import Button from "../components/Button";

import serviceData from "../assets/fake-data/service";
import bannerData from "../assets/fake-data/banner-top";
import topSectionData from "../assets/fake-data/top-section";

const DetailService = (props) => {
  const service = serviceData.getServiceBySlug(props.match.params.slug);

  const banner = bannerData.getBannerBySlug(props.match.params.slug);

  const topSection = topSectionData.getTopSectionBySlug(
    props.match.params.slug
  );

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [service]);

  return (
    <Helmet title={banner.title}>
      {bannerData
        .getAllBanners()
        .filter((item) => item.slug === banner.slug)
        .map((item, index) => (
          <BannerTop
            key={index}
            img={item.img}
            title={item.title}
            slug={item.slug}
          />
        ))}
      {topSectionData
        .getAllTopSections()
        .filter((item) => item.slug === topSection.slug)
        .map((item, index) => (
          <TopSection
            key={index}
            img={item.img}
            description={item.description}
            title={item.title}
            slug={item.slug}
          />
        ))}
      <Grid col={1} mdCol={1} smCol={1} gap={10}>
        {serviceData
          .getAllServices()
          .filter((item) => item.slug === service.slug)
          .map((item, index) => (
            <ServiceBox
              key={index}
              img={item.img}
              name={item.name}
              description={item.description}
              price={item.price}
              time={item.time}
              slug={item.slug}
            />
          ))}
      </Grid>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Link to="/booking">
          <Button>Book now</Button>
        </Link>
      </div>
    </Helmet>
  );
};

export default DetailService;
