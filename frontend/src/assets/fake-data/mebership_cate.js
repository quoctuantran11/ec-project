const vip1 = require("../images/VIP.png").default;  
const vip2 = require("../images/VIP.png").default; 
const vip3 = require("../images/VIP.png").default; 


const membershipCate = [
    {
      img: vip1,
      name: "VIP 1",
      quantity: "1",
      description:
        "",
      slug: "vip1",
      color: "#f2f6f5",
    },
    {
        img: vip2,
        name: "VIP 2",
        quantity: "1",
        description:
          "",
        slug: "vip2",
        color: "#a6c8bb",
      },
      {
        img: vip3,
        name: "VIP 3",
        quantity: "1",
        description:
          "",
        slug: "vip3",
        color: "#98f1d0",
      },
];
const getAllCateMemberships = () => membershipCate;

const getCateMembershipBySlug = (slug) => membershipCate.find((e) => e.slug === slug);

const membershipCateData = {
  getAllCateMemberships,
  getCateMembershipBySlug,
};

export default membershipCateData;
