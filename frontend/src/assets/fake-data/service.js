const auramani = require("../images/aura-mani.jpg").default;
const basicmani = require("../images/basic-mani.jpeg").default;
const shellacmani = require("../images/shellac-mani.jpg").default;
const kidmani = require("../images/kid-mani.jpg").default;
const expressmani = require("../images/express-mani.jpg").default;
const signmani = require("../images/sign-mani.jpg").default;
const gelmani = require("../images/gel-mani.jpg").default;
const snsmani = require("../images/sns-mani.jpg").default;

const islandpedi = require("../images/island-pedi.jpg").default;
const orangepedi = require("../images/orange-pedi.jpg").default;
const pumpkinpedi = require("../images/pumpkin-pedi.jpg").default;
const aurapedi = require("../images/aura-pedi.jpg").default;
const stonepedi = require("../images/stone-pedi.jpg").default;
const basicpedi = require("../images/basic-pedi.jpg").default;
const expresspedi = require("../images/express-pedi.jpg").default;
const kidpedi = require("../images/kid-pedi.jpg").default;

const combo1 = require("../images/basic-combo.jpg").default;
const combo2 = require("../images/basic-express-combo.jpg").default;
const combo3 = require("../images/orange-basic-combo.jpg").default;
const combo4 = require("../images/shellac-basic-combo.jpg").default;
const combo5 = require("../images/shellac-express-combo.jpg").default;
const combo6 = require("../images/kid-combo.jpg").default;

const nail1 = require("../images/nail1.jpg").default;
const nail2 = require("../images/nail2.jpg").default;
const nail3 = require("../images/nail3.jpg").default;
const nail4 = require("../images/nail4.jpg").default;
const nail5 = require("../images/nail5.jpg").default;
const nail6 = require("../images/nail6.jpg").default;
const nail7 = require("../images/nail7.jpg").default;
const nail8 = require("../images/nail8.jpg").default;
const nail9 = require("../images/nail9.jpg").default;
const nail10 = require("../images/nail10.jpg").default;

const services = [
  {
    img: auramani,
    name: "Aura Manicure",
    description:
      "Our “Spa” Manicure.  You choose your intent…Relax, Uplift, Inspire or Connect.  Micro Algae and minseral salt infused with Organic Ginger essential oil will gently slough away dry skin.  The properties of ginger are deepened with a hand massage using a hydrating therapy blend of organic essential oils, Aloe, Shea butter, Sesame oil, Olive oil, Avocado and vitaminss A & E. Includes all nail details and your choice of polish.",
    price: "$30.00",
    time: "50mins",
    slug: "manicures",
  },
  {
    img: basicmani,
    name: "Basic Manicure",
    description:
      "Our “Basic” Manicures.  A swift route to ultimate relaxation. Includes a bloominsg bath of Italian Mandarin and a focused hand & arm massage, with a blend of Essential oils, will restore vitality. This basic manicure includes all nail details and your choice of polish.",
    price: "$15.00",
    time: "25mins",
    slug: "manicures",
  },
  {
    img: expressmani,
    name: "Express Manicure",
    description:
      "Our Express Manicure offers a quick lacquer removal, filing + buffing before cuticles are pushed back and nails are perfectly polished.",
    price: "$22.00",
    time: "30mins",
    slug: "manicures",
  },
  {
    img: shellacmani,
    name: "Shellac Manicure",
    description:
      "Imagine worry free, beautiful glossy nails that will not chip or dull for up to 2 weeks. Perfect for the holidays, vacation, weddings, events, parties, or just busy people who don’t have time to fuss over their nails.  This overlay treatment strengthens and beautifies your natural nails. No odor, harsh acrylics, or invasive drills. Your beautiful, glossy nails are completely dry and smudge-free before you leave the salon!",
    price: "$37.00",
    time: "45mins",
    slug: "manicures",
  },
  {
    img: signmani,
    name: "Signature Manicure",
    description:
      "Our Signature manicure includes lacquer removal, nail shaping, cuticle maintenance, light hand and arm massage using an aromatic + nourishing hand lotion to hydrate and firm the skin. Nails are polished to perfection.",
    price: "$25.00",
    time: "40mins",
    slug: "manicures",
  },
  {
    img: gelmani,
    name: "Signature Gel Manicure",
    description:
      "Enjoy our long-lasting gel service. Treatment includes nail shaping, cuticle maintenance, light hand and arm massage and gel polish that cures in minsutes.",
    price: "$40.00",
    time: "55mins",
    slug: "manicures",
  },
  {
    img: snsmani,
    name: "Signature Dip Manicure (SNS)",
    description:
      "Our Powder Dip Manicures are performed by SNS-Certified Artists. Choose the perfect long-lasting powder to strengthen your nails and provide a beautifully durable finish.",
    price: "$50.00",
    time: "65mins",
    slug: "manicures",
  },
  {
    img: kidmani,
    name: "Little Princess Manicure",
    description:
      "Manicure for girls up to 11 years old. Created especially for our younger girls. These minsi rituals include a bubbly hand or foot soak, nail trimminsg and shaping, light massage, and a polish of choice.",
    price: "$9.00",
    time: "15mins",
    slug: "manicures",
  },
  {
    img: islandpedi,
    name: "Island Pedicure",
    description:
      "Feeling fatigued? Disconnected? Fearful? Disorganized? Reconnect with The Island Pedicure! A Relaxing Leg Massage with Ginger Essential Oils that encourage a positive attitude about life, vitality, feeling stable, safe & secure.   Includes all nail details and your choice of polish.",
    price: "$40.00",
    time: "60mins",
    slug: "pedicures",
  },
  {
    img: orangepedi,
    name: "Orange Peel Pedicure",
    description:
      "Remove callus’ just like an orange peel!  This gentle yet effective treatment provides thorough removal of your all hard skin on your feet, callus and cracked heals without using blades or excessive filing. You get great results after just 1 treatment and it’s completely painless and leaves no sensitivity. Skin feels so soft and smooth you’ll have this done time and time again.",
    price: "$45.00",
    time: "60mins",
    slug: "pedicures",
  },
  {
    img: pumpkinpedi,
    name: "Pumpkin Pedicure",
    description:
      "Our Pumpkin Pedicure is made with REAL Pumpkin & 30% Multi Fruit Complex Peel.  Alpha-hydroxy acids have been shown to promote smoother younger looking skin by increasing the rate of cell renewal. Pumpkin Services offer antioxidants & enzymes that act like alpha-hydroxy acids Pumpkin contains more than 100 beneficial nutrients, which may be used to help reverse the signs of aging.   Includes all nail details and your choice of polish.",
    price: "$32.00",
    time: "45mins",
    slug: "pedicures",
  },
  {
    img: aurapedi,
    name: "Aura Pedicure",
    description:
      "Our “Spa” Pedicure.  You choose your intent…Relax, Uplift, Inspire or Connect.  Micro Algae and mineral salt infused with Organic Ginger essential oil will gently slough away dry skin.  The properties of ginger are deepened with a foot & leg massage using a hydrating therapy blend of organic essential oils, Aloe, Shea butter, Sesame oil, Olive oil, Avocado and vitamins A & E. Includes all nail details and your choice of polish.",
    price: "$45.00",
    time: "60mins",
    slug: "pedicures",
  },
  {
    img: stonepedi,
    name: "The Journey—Hot Stone Pedicure",
    description:
      "During this “Hot Stone Pedicure”, Energy blocks are removed and tension is melted away by using warm stone massage therapy. The relaxing foot bath and sea salt exfoliation incorporate herbs and essences such as Geranium, Wildcrafted Ginger, Tea Tree, and Jasmine. Inner peace and balance is achieved with this ritual.",
    price: "$50.00",
    time: "60mins",
    slug: "pedicures",
  },
  {
    img: basicpedi,
    name: "Basic Pedicure",
    description:
      "Our Basic Pedicures include a blooming bath of Italian Mandarin and a relaxing foot & leg massage, with a blend of Essential oils, will restore vitality. Basic manicures and pedicures include all nail details and your choice of polish.  Pedicure include “Callus Remover” for those dry heels.",
    price: "$28.00",
    time: "45mins",
    slug: "pedicures",
  },
  {
    img: expresspedi,
    name: "Express Pedicure",
    description:
      "Our “Express” Pedicure.  For the client who gets regular pedicures.  Includes a blooming bath of Italian Mandarin and application lotion.  This express pedicure includes all nail details and your choice of polish.  Does not include Callus Remover.",
    price: "$23.00",
    time: "30mins",
    slug: "pedicures",
  },
  {
    img: kidpedi,
    name: "Little Princess Pedicure",
    description:
      "Pedicure for girls up to 11 years old. Created especially for our younger girls. These mini rituals include a bubbly hand or foot soak, nail trimming and shaping, light massage, and a polish of choice.",
    price: "$12.00",
    time: "15mins",
    slug: "pedicures",
  },
  {
    img: combo1,
    name: "Basic Mani / Basic Pedi Combo",
    description:
      "A swift route to ultimate relaxation!  Includes a blooming bath of Italian Mandarin and a focused hand, foot & leg massage, with a blend of Essential oils, will restore vitality.  This basic mani/pedi combo includes all nail details and your choice of polish.  Includes Callus Remover for dry, cracked heels.",
    price: "$47.00",
    time: "75mins",
    slug: "combo",
  },
  {
    img: combo2,
    name: "Basic Mani / Express Pedi Combo",
    description:
      "A swift route to ultimate relaxation. Includes a blooming bath of Italian Mandarin and a short hand, foot & leg massage, with a blend of Essential oils, will restore vitality.  This basic mani/pedi includes all nail details and your choice of polish.  Does not include Callus Remover.",
    price: "$40.00",
    time: "60mins",
    slug: "combo",
  },
  {
    img: combo3,
    name: "Orange Peel Pedicure & Basic Manicure",
    description:
      "Remove callus’ just like an orange peel!  This gentle yet effective treatment provides thorough removal of your all hard skin on your feet, callus and cracked heals without using blades or excessive filing.  You get great results after just 1 treatment and it’s completely painless and leaves no sensitivity.  Skin feels so soft and smooth you’ll have this done time and time again.  We added a Basic Manicure to this great Pedicure for a complete service!",
    price: "$73.00",
    time: "90mins",
    slug: "combo",
  },
  {
    img: combo4,
    name: "Shellac Mani / Basic Pedi Combo",
    description:
      "The best of both worlds. Get a Shellac Manicure and a Basic Pedicure in one appt. Pedicure includes Callus Remover for Dry, cracked heels.   Includes all nail details and your choice of polish.",
    price: "$72.00",
    time: "90mins",
    slug: "combo",
  },
  {
    img: combo5,
    name: "Shellac Mani / Express Pedi Combo",
    description:
      "A Shellac Manicure and an Express Pedicure in one appt. Pedicure does not include Callus Remover.",
    price: "$67.00",
    time: "75mins",
    slug: "combo",
  },
  {
    img: combo6,
    name: "Little Princess Manicure & Pedicure",
    description:
      "Manicure & Pedicure Combo for girls up to 11 years old. Created especially for our younger girls. These mini rituals include a bubbly hand or foot soak, nail trimming and shaping, light massage, and a polish of choice.",
    price: "$25.00",
    time: "30mins",
    slug: "combo",
  },
  {
    img: nail1,
    name: "Full Set Regular",
    description: "",
    price: "$35.00",
    time: "40mins",
    slug: "nails",
  },
  {
    img: nail2,
    name: "Full Set Gel",
    description: "",
    price: "$38.00",
    time: "45mins",
    slug: "nails",
  },
  {
    img: nail3,
    name: "Fill In Regular",
    description: "",
    price: "$25.00",
    time: "30mins",
    slug: "nails",
  },
  {
    img: nail4,
    name: "Fill In Gel",
    description: "",
    price: "$32.00",
    time: "35mins",
    slug: "nails",
  },
  {
    img: nail5,
    name: "Pink & White New Set",
    description: "",
    price: "$55.00",
    time: "60mins",
    slug: "nails",
  },
  {
    img: nail6,
    name: "Fill Pink",
    description: "",
    price: "$58.00",
    time: "60mins",
    slug: "nails",
  },
  {
    img: nail7,
    name: "Acrylic Glitter Gel",
    description: "",
    price: "$65.00",
    time: "60mins",
    slug: "nails",
  },
  {
    img: nail8,
    name: "Polish Change",
    description: "Polish application, buff out rough edges.",
    price: "$7-$17",
    time: "15-30mins",
    slug: "nails",
  },
  {
    img: nail9,
    name: "Gel Polish Change",
    description:
      "Long wear, high shine, rich color gel polish application. Buff out rough edges.",
    price: "$10-$20",
    time: "15-30mins",
    slug: "nails",
  },
  {
    img: nail10,
    name: "Acrylic or Gel Removal",
    description:
      "We can remove your Acrylic or Gel Nails for you even if you do not want a manicure.   If you have acrylic or gels and want a manicure, choose one of our manicures or gels “With Removal”.   If you simply wan them removed, choose this service.",
    price: "$12.00",
    time: "20-30mins",
    slug: "nails",
  },
];

const getAllServices = () => services;

const getServices = (count) => {
  const max = services.length - count;
  const min = 0;
  const start = Math.floor(Math.random() * (max - min) + min);
  return services.slice(start, start + count);
};

const getServiceBySlug = (slug) => services.find((e) => e.slug === slug);

const serviceData = {
  getAllServices,
  getServices,
  getServiceBySlug,
};

export default serviceData;
