const vip1 = require("../images/VIP.png").default;
const vip2 = require("../images/VIP.png").default;
const vip3 = require("../images/VIP.png").default;

const topMemSection = [
  {
    img: vip1,
    title: "VIP 1",
    description: "",
    slug: "vip1",
  },
  {
    img: vip2,
    title: "VIP 2",
    description: "",
    slug: "vip2",
  },
  {
    img: vip3,
    title: "VIP 3",
    description: "",
    slug: "vip3",
  },
];

const getAllTopMemSections = () => topMemSection;

const getTopMemSectionBySlug = (slug) =>
  topMemSection.find((e) => e.slug === slug);

const topMemSectionData = {
  getAllTopMemSections,
  getTopMemSectionBySlug,
};

export default topMemSectionData;
