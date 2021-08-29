import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import Helmet from "../components/Helmet";
import Banner from "../components/Home/Banner";
import ServiceCard from "../components/Home/ServiceCard";
import ThematicCard from "../components/Home/ThematicCard";

import BranchCard from "../components/Home/BranchCard";
import BookingBtn from "../components/Home/BookingBtn";

import Grid from "../components/Grid";
import Section, {
  SectionTitle,
  SectionSubTitle,
  SectionBody,
} from "../components/Section";

import service from "../assets/fake-data/service-cate";
import thematic from "../assets/fake-data/thematic";
import branches from "../assets/fake-data/branch-system";

import membership from "../assets/images/membership.png";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return (
    <Helmet title="Let the world see you">
      <Banner />
      <BookingBtn />
      {/* service section */}
      <Section>
        <SectionTitle>Our Services</SectionTitle>
        <SectionSubTitle>
          At Enternal Charm, we enjoy finding new ways to help you fall in love
          with your hands, feet, and self. Each service is enriched with
          world-class products and attentive Artists that care. We believe
          health and beauty are inseparable. Indulge in our services.
        </SectionSubTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={30}>
            {service.getAllCateServices().map((item, index) => (
              <ServiceCard
                key={index}
                img={item.img}
                name={item.name}
                quantity={item.quantity}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* end service section */}

      {/* thematic section */}
      <Section>
        <SectionTitle>Beauty Thematic</SectionTitle>
        <SectionBody>
          <Grid col={1} mdCol={1} smCol={1} gap={20}>
            {thematic.map((item, index) => (
              <ThematicCard
                key={index}
                img={item.img}
                title={item.title}
                description={item.description}
                cate={item.cate}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* end thematic section */}


      {/* branch system section */}
      <Section>
        <SectionTitle>Branch System</SectionTitle>
        <SectionBody>
          <SectionSubTitle>
            Open time: Mon - Fri (8:00AM - 6:30PM) <br /> Weekends (9:00AM -
            5:00PM)
          </SectionSubTitle>
          <Grid col={4} mdCol={4} smCol={2} gap={10}>
            {branches.map((item, index) => (
              <Link key={index} to="/">
                <BranchCard
                  img={item.img}
                  name={item.name}
                  description={item.description}
                />
              </Link>
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* end branch system section */}

      {/* membership section */}
      <Section>
        <SectionTitle>Membership</SectionTitle>
        <SectionBody>
          <SectionSubTitle>
            Become a member to get more discount vouchers and many other gifts
          </SectionSubTitle>
          <Link to="/membership">
            <img
              src={membership}
              alt="membership"
              style={{ marginLeft: "30%", width: "40%" }}
            />
          </Link>
        </SectionBody>
      </Section>
      {/* end membership section */}
    </Helmet>
  );
};
export default Home;
