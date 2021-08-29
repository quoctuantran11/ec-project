const bgmani = require("../images/bgmani.jpg").default;
const bgpedi = require("../images/bgpedi.jpg").default;
const bgnail = require("../images/bgnail.jpg").default;
const bgcombo = require("../images/bgcombo.jpg").default;

const bannerTop = [
  {
    img: bgcombo,
    title: "Combo Mani-Pedi",
    slug: "combo",
  },
  {
    img: bgmani,
    title: "Manicures",
    slug: "manicures",
  },
  {
    img: bgnail,
    title: "Nail Services",
    slug: "nails",
  },
  {
    img: bgpedi,
    title: "Pedicures",
    slug: "pedicures",
  },
];

const getAllBanners = () => bannerTop;

const getBannerBySlug = (slug) => bannerTop.find((e) => e.slug === slug);

const bannerData = {
  getAllBanners,
  getBannerBySlug,
};

export default bannerData;
