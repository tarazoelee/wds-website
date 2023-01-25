import AidanImg from "./pfps/Aidan.png"
import AlexImg from "./pfps/Alex.png"
import ArayanImg from "./pfps/Arayan.png"
import ArmaanImg from "./pfps/Armaan.png"
import JustinImg from "./pfps/Justin.png"
import LukeImg from "./pfps/Luke.png"
import RajahImg from "./pfps/Rajah.png"
import TaraImg from "./pfps/Tara.png"
import MaazImg from "./pfps/Maaz.png"
import SwathiImg from "./pfps/Swathi.png"
import UzairImg from "./pfps/Uzair.png"
import RoseGaoImg from "./pfps/RoseGao.png";
import ElaineLinImg from "./pfps/ElaineLin.png";
import ArnavGoyalImg from "./pfps/ArnavGoyal.png";
import BraydenThompsonImg from "./pfps/BraydenThompson.png";
import ClaireMcGuiganImg from "./pfps/ClaireMcGuigan.png";
import LeenAlJalladImg from "./pfps/LeenAl-Jallad.png";
import RoninWilliamsYoungImg from "./pfps/RoninWilliams-Young.png";
import TeddyNgoImg from "./pfps/TeddyN'go.png";

// NOTE: Imported images must be 250px by 250px

const PRESIDENTS = [
  {
    name: "Luke Blommestyn",
    role: "Co-President",
    image: LukeImg,
    socials: {
      linkedin: "https://www.linkedin.com/in/lukeblommesteyn/",
      github: "https://github.com/lblommesteyn",
      email: "mailto:lblommes@uwo.ca",
    },
  },
  {
    name: "Arayan Khurana",
    role: "Co-President",
    image: ArayanImg,
    socials: {
      linkedin: "https://linkedin.com/in/aryan-khurana",
      email: "mailto:akhura4@uwo.ca",
    },
  }
];

const MARKETING = [
  {
    name: "Alex Lee",
    role: "Co-VP Marketing",
    image: AlexImg,
    socials: {
      linkedin: "https://www.linkedin.com/in/alex-lee-a16a92172/",
      email: "mailto:llee297@uwo.ca",
    },
  },
  {
    name: "Rose Gao",
    role: "Co-VP Marketing",
    image: RoseGaoImg,
    socials: {
      email: "mailto:roseg.gao@gmail.com",
      linkedin: "https://www.linkedin.com/in/rose-gao-27240a200/",
      github: "https://github.com/MemoriaNoctis"
    },
  },
  {
    name: "Elaine Lin",
    role: "Co-Director Marketing",
    image: ElaineLinImg,
    socials: {
      email: "mailto:ylin767@uwo.ca",
      linkedin: "https://www.linkedin.com/in/yilei-elaine-lin/",
      github: "https://github.com/Elaine-lin-1"
    },
  },
  {
    name: "Arnav Goyal",
    role: "Co-Director Marketing",
    image: ArnavGoyalImg,
    socials: {
      email: "mailto:agoyal57@uwo.ca",
      linkedin: "https://www.linkedin.com/in/arnav-go/",
    },
  },
];

const INTERNAL = [
  {
    name: "Justin Tsang",
    role: "VP Internal",
    image: JustinImg,
    socials: {
      linkedin: "https://www.linkedin.com/in/justint-sang",
      email: "mailto:jtsang87@uwo.ca",
    },
  },
  {
    name: "Swathi Thushiyandan",
    role: "Director Internal",
    image: SwathiImg,
    socials: {
      linkedin: "https://www.linkedin.com/in/swathi-thushiyandan",
      email: "mailto:sthushi2@uwo.ca",
    },
  },
];

const EXTERNAL = [
  {
    name: "Aidan Lostracco",
    role: "VP External",
    image: AidanImg,
    socials: {
      linkedin: "https://www.linkedin.com/in/aidan-lostracco-1b815a222",
      email: "mailto:alostrac@uwo.ca",
    },
  },
];

const FINANCE = [
  {
    name: "Armaan Sandhu",
    role: "VP Finance",
    image: ArmaanImg,
    socials: {
      linkedin: "https://www.linkedin.com/in/armaan-sandhu",
      email: "mailto:asand24@uwo.ca",
    },
  },
];

const CAREERS = [
  {
    name: "Rajah Chari",
    role: "VP Careers",
    image: RajahImg,
    socials: {
      email: "mailto:rajahchari@gmail.com",
      linkedin: "https://www.linkedin.com/in/rajah-chari",
    },
  },
];

const DEVELOPMENT = [
  {
    name: "Tara Lee",
    role: "VP Development",
    image: TaraImg,
    socials: {
      linkedin: "https://www.linkedin.com/in/tara-zoe-lee/",
      github: "https://github.com/tarazoelee",
      email: "mailto:tlee379@uwo.ca",
    },
  },
  {
    name: "Ronin Williams-Young",
    role: "Tech Lead",
    image: RoninWilliamsYoungImg,
    socials: {
      linkedin: "https://www.linkedin.com/in/ronin-williams-young/",
      github: "https://github.com/rwill33",
      email: "mailto:ronin@williams-young.com",
    },
  },
  {
    name: "Maaz Siddiqi",
    role: "Tech Lead",
    image: MaazImg,
    socials: {
      linkedin: "https://www.linkedin.com/in/maaz-siddiqi",
      github: "https://github.com/MaazSiddiqi",
      email: "mailto:msidd54@uwo.ca",
    },
  },
  {
    name: "Teddy N'go",
    role: "Tech Lead",
    image: TeddyNgoImg,
    socials: {
      linkedin: "https://www.linkedin.com/in/teddy-n-go-5a2568176/",
      github: "https://github.com/27caribou",
      email: "mailto:tngo26@uwo.ca",
    },
  },
  {
    name: "Brayden Thompson",
    role: "Team Lead",
    image: BraydenThompsonImg,
    socials: {
      linkedin: "https://www.linkedin.com/in/brayden-thompson/",
      github: "https://github.com/bthomp89",
      email: "mailto:bthomp89@uwo.ca",
    },
  },
  {
    name: "Claire McGuigan",
    role: "Team Lead",
    image: ClaireMcGuiganImg,
    socials: {
      linkedin: "https://www.linkedin.com/in/claire-mcguigan/",
      github: "https://github.com/cmcguigan1",
      email: "mailto:mcguigan.claire@outlook.com",
    },
  },
  {
    name: "Leen Al-Jallad",
    role: "Team Lead",
    image: LeenAlJalladImg,
    socials: {
      linkedin: "https://www.linkedin.com/in/leen-al-jallad-0052b3208/",
      github: "https://github.com/jalladleen",
      email: "mailto:laljall@uwo.ca",
    },
  },
  {
    name: "Uzair Salim",
    role: "Team Lead",
    image: UzairImg,
    socials: {
      linkedin: "https://www.linkedin.com/in/uzair-salim-515b50230/",
      email: "mailto:usalim2@uwo.ca",
      github: "https://github.com/uzairsalim02",
    },
  },
];

export {PRESIDENTS, MARKETING, INTERNAL, EXTERNAL, FINANCE, CAREERS, DEVELOPMENT }
