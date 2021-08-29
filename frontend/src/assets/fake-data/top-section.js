const topmani = require("../images/top-mani.jpg").default;
const toppedi = require("../images/top-pedi.jpg").default;
const topnail = require("../images/top-nail.jpg").default;
const topcombo = require("../images/top-combo.jpg").default;

const topSection = [
  {
    img: topcombo,
    title: "Both far more convenient and saving",
    description:
      "Treat yourself to a manicure and a pedicure at a savings with one of our Manicure/Pedicure Combos.  Choose our our Shortcut Combo, a Princess Combo for your little one. Our combos do not include Acrylic or Gel Removal.",
    slug: "combo",
  },
  {
    img: topmani,
    title: "Keep your hands supple + healthy",
    description:
      "Our manicure services are nourishing and hydrating, giving your hands the ultimate renewal. The signature manicure not only treats your nails, it also incorporates an aromatic + replenishing hand lotion that hydrates and firm the skin. This keeps your hands supple and healthy.",
    slug: "manicures",
  },
  {
    img: topnail,
    title: "Giving time for your nail",
    description:
      "Our nail services are nourishing and hydrating, giving your hands the ultimate renewal. The signature manicure not only treats your nails, it also incorporates an aromatic + replenishing hand lotion that hydrates and firm the skin. This keeps your hands supple and healthy.",
    slug: "nails",
  },
  {
    img: toppedi,
    title: "Keep your feet nourished + hydrated",
    description:
      "Our pedicure services are the best way to decompress after a long day. Each service includes exfoliation of the heels and relieves pressure in your legs and feet. The signature pedicure is the ultimate relaxation time. As you sit comfortably in our plush chairs, our Artists will work on smoothing out your heels all the way to a light leg + foot massage.",
    slug: "pedicures",
  },
];

const getAllTopSections = () => topSection;

const getTopSectionBySlug = (slug) => topSection.find((e) => e.slug === slug);

const topSectionData = {
  getAllTopSections,
  getTopSectionBySlug,
};

export default topSectionData;
