import React from "react";
import { useEffect } from "react";

import Helmet from "../components/Helmet";
import BannerTop from "../components/BannerTop";

import Grid from "../components/Grid";
import MembershipInfo from "../components/Membership/MembershipInfo";

import membershipData from "../assets/fake-data/mebership_cate";

import bgmembership from "../assets/images/bg-membership.jpg";
import Section, { SectionBody } from "../components/Section";

const MemberShip = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Helmet title="Memberships">
      <BannerTop img={bgmembership} title="Charm Membership" />
      <Section>
        <div className="membership-info__title">
          Registering as a member, you will receive immediate benefits when
          using the service at Temp. Application period is 12 months from the
          time you register.
        </div>
        <SectionBody>
          <Grid col={2} mdCol={2} smCol={1} gap={80}>
            {membershipData.getAllCateMemberships().map((item, index) => (
              <MembershipInfo
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

export default MemberShip;
