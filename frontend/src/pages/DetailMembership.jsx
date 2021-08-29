import React from "react";
import { Link } from "react-router-dom";

import Helmet from "../components/Helmet";
import MembershipBox from "../components/Membership/MembershipBox";
import Grid from "../components/Grid";
// import BannerTop from "../components/BannerTop";
import MemTopSection from "../components/Membership/MemTopSection";
import Button from "../components/Button";

import membershipData from "../assets/fake-data/membership";
// import bannerData from "../assets/fake-data/banner-top";
import topMemSectionData from "../assets/fake-data/memtop-section";

const DetailMembership = (props) => {
  const membership = membershipData.getMembershipBySlug(
    props.match.params.slug
  );

  //   const banner = bannerData.getBannerBySlug(props.match.params.slug);

  const topMemSection = topMemSectionData.getTopMemSectionBySlug(
    props.match.params.slug
  );

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [membership]);

  return (
    <Helmet title={membership.name}>
      {/* {bannerData
        .getAllBanners()
        .filter((item) => item.slug === banner.slug)
        .map((item, index) => (
          <BannerTop
            key={index}
            img={item.img}
            title={item.title}
            slug={item.slug}
          />
        ))} */}
      {topMemSectionData
        .getAllTopMemSections()
        .filter((item) => item.slug === topMemSection.slug)
        .map((item, index) => (
          <MemTopSection
            key={index}
            img={item.img}
            description={item.description}
            title={item.title}
            slug={item.slug}
          />
        ))}
      <Grid col={1} mdCol={1} smCol={1} gap={10}>
        {membershipData
          .getAllMembership()
          .filter((item) => item.slug === membership.slug)
          .map((item, index) => (
            <MembershipBox
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
        <Link to="/login">
          <Button>Register</Button>
        </Link>
      </div>
    </Helmet>
  );
};

export default DetailMembership;
