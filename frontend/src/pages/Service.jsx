import React from "react";
import { useEffect } from "react";

import Helmet from "../components/Helmet";
import BannerTop from "../components/BannerTop";

import Grid from "../components/Grid";
import Section, { SectionBody } from "../components/Section";
import ServiceInfo from "../components/Services/ServiceInfo";

import serviceData from "../assets/fake-data/service-cate";
import bgservice from "../assets/images/banner-service.jpg";

const Service = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Helmet title="Services">
      <BannerTop img={bgservice} title="Our Services" />
      <Section>
        <div className="service-info__title">
          At Enternal Charm Nails salons, we enjoy finding new ways to help you
          fall in love with your hands, feet, and self-pampering. Each service
          is enriched with world-class products and Artists that care and are
          attentive. We believe health and beauty are inseparable. Indulge in
          our services.
        </div>
        <SectionBody>
          <Grid col={2} mdCol={2} smCol={1} gap={80}>
            {serviceData.getAllCateServices().map((item, index) => (
              <ServiceInfo
                key={index}
                img={item.img}
                name={item.name}
                description={item.description}
                slug={item.slug}
                color={item.color}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  );
};

export default Service;
