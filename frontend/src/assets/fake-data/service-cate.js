const combo = require("../images/combo.png").default;
const mani = require("../images/mani.jpg").default;
const pedi = require("../images/pedi.jpg").default;
const nails = require("../images/nails.jpg").default;

const serviceCate = [
  {
    img: combo,
    name: "Combo",
    quantity: "6 services",
    description:
      "Treat yourself to a manicure and a pedicure at a savings with one of our Manicure/Pedicure Combos.  Choose our our Shortcut Combo, a Princess Combo for your little one. Our combos do not include Acrylic or Gel Removal.",
    slug: "combo",
    color: "#f2f6f5",
  },
  {
    img: mani,
    name: "Manicures",
    quantity: "8 services",
    description:
      "It’s time to give your hands the Enternal Charm Nails renewal. Our manicure services are customized to nourish and hydrate your nails and leave them polished to perfection.",
    slug: "manicures",
    color: "#a6c8bb",
  },
  {
    img: pedi,
    name: "Pendicures",
    quantity: "8 services",
    description:
      "Your feet deserve to be pampered too. Our pedicure services will exfoliate your heels to relieve pressure in your legs and feet. Find out which pedicure service will bring you comfort.",
    slug: "pedicures",
    color: "#98f1d0",
  },
  {
    img: nails,
    name: "Nail Services",
    quantity: "10 services",
    description:
      "Our Nail Enhancement Services has services to full set, fill in, polish change and removal. Find out which service will give you the volume you desire.",
    slug: "nails",
    color: "#fef3d5",
  },
];

const getAllCateServices = () => serviceCate;

const getCateServiceBySlug = (slug) => serviceCate.find((e) => e.slug === slug);

const serviceCateData = {
  getAllCateServices,
  getCateServiceBySlug,
};

export default serviceCateData;
