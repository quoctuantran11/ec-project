const vip1 = require("../images/VIP.png").default;
const vip2 = require("../images/VIP.png").default;
const vip3 = require("../images/VIP.png").default;

const memberships = [
    {
      img: vip1,
      name: "VIP 1",
      description:
        "15% discount for Combo on all weekends (Saturday, Sunday).  Pre-booking benefits - Book 4 days in advance.  Surprise offer - Get a surprise promo code every month",
      price: "$69.00",
      time: "3 months",
      slug: "vip1",
    },
    {
      img: vip2,
      name: "VIP 2",
      description:
        "15% off Combo 10 on all weekends (Saturday, Sunday) - 10% discount on Spa service every day of the week - Up to 30% discount when buying products at Charm Store according to the monthly program (applicable to online and in-store purchases).  Pre-booking benefits - Book 5 days in advance.  Surprise Offer - Get a surprise promo code every month.",
      price: "$99.00",
      time: "6 months",
      slug: "vip2",
    },
    {
      img: vip3,
      name: "VIP 3",
      description:
        "20% off Combo 10 on all weekends (Saturday, Sunday) - 15% discount on Spa service every day of the week - Up to 35% discount when buying products at Charm Store according to the monthly program (applicable to online and in-store purchases).  Pre-booking benefits - Book 7 days in advance.  Surprise Offer - Be one of the first to be invited to experience every new product/service launch.",
      price: "$139.00",
      time: "9 months",
      slug: "vip3",
    },
  ];
const getAllMembership = () => memberships;

const getMemberships = (count) => {
  const max = memberships.length - count;
  const min = 0;
  const start = Math.floor(Math.random() * (max - min) + min);
  return memberships.slice(start, start + count);
};

const getMembershipBySlug = (slug) => memberships.find((e) => e.slug === slug);

const membershipData = {
  getAllMembership,
  getMemberships,
  getMembershipBySlug,
};

export default membershipData;
