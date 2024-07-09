import VideoEpisode145 from "../../../public/assets/images/webp/homePage/collageThumbnail.png"
import VideoEpisode146 from "../../../public/assets/images/webp/homePage/videoThumbnail146.png"
import VideoEpisode147 from "../../../public/assets/images/webp/homePage/videoThumbnail147.png"

// =============================ProdcastVideo data =============================//
export const ProdcastVideoData = [
  {
    img: VideoEpisode145,
    title: "Leadership Lessons From Legendary… College Coaches",
    description: "In today's episode, ESPN storyteller & interviewer Marty Smith chats with Allan about his new book, SIDELINE CEO: LEADERSHIP PRINCIPLES FROM…",
    episodeNumber: "S2 - Ep: 145",
    date: "Dec 4, 2023",
  },
  {
    img: VideoEpisode146,
    title: "Lead Generation Secrets For Success",
    description: "In today's episode, Allan speaks with Philip Smith, a serial entrepreneur, investor, and author. Smith has made the Inc. 5000 list of fastest growing private",
    episodeNumber: "S2 - Ep: 146",
    date: "Dec 4, 2023",
  },
  {
    img: VideoEpisode147,
    title: "From ‘Weakness’ To Superhero Skill",
    description: "In Today's episode, Allan speaks with multi platinum record producing DJ and Telzio Founder & CEO Peter Schroeder. Topics include: 1:22 Surviving a literal…",
    episodeNumber: "S2 - Ep: 147",
    date: "Dec 4, 2023",
  },
];
// ---=========================Allan_meet======================================== //

// Helper.js or appropriate file
export const BooksData = [
  {
    category: "Business Leadership/Management",
    items: [
      {
        src: "/assets/images/webp/meetAllan/greatBook.png",
        title: "Good to Great",
        author: "-Jim Collins"
      },
      {
        src: "/assets/images/webp/meetAllan/effectiveBook.png",
        title: "Seven Habits of Highly Effective People",
        author: "-Steven Covey"
      },
      {
        src: "/assets/images/webp/meetAllan/deliveringBook.png",
        title: "Delivering Happiness",
        author: "-Tony Hsieh"
      }
    ]
  },
  {
    category: "Personal Improvement",
    items: [
      {
        src: "/assets/images/webp/meetAllan/deepBook.png",
        title: "Deep Work",
        author: "-Cal Newport"
      },
      {
        src: "/assets/images/webp/meetAllan/simonBook.png",
        title: "Start with Why",
        author: "-Simon Sinek"
      },
      {
        src: "/assets/images/webp/meetAllan/purposeBook.png",
        title: "Procrastinate on Purpose",
        author: "-Rory Vaden"
      }
    ]
  },
  {
    category: "Inspirational/Motivational",
    items: [
      {
        src: "/assets/images/webp/meetAllan/dogBook.png",
        title: "Shoe Dog",
        author: "-Phil Knight"
      },
      {
        src: "/assets/images/webp/meetAllan/morrieBook.png",
        title: "Tuesday with Morrie",
        author: "-Mitch Albom"
      },
      {
        src: "/assets/images/webp/meetAllan/elonMusk.png",
        title: "Elon Musk",
        author: "-Walter Isaacson"
      }
    ]
  },
  {
    category: "Wealth Building",
    items: [
      {
        src: "/assets/images/webp/meetAllan/flowBook.png",
        title: "Cashflow Quadrant",
        author: "-Robert Kiyosaki"
      },
      {
        src: "/assets/images/webp/meetAllan/richBook.png",
        title: "Think and Grow Rich",
        author: "-Napoleon Hill"
      },
      {
        src: "/assets/images/webp/meetAllan/richBook.png",
        title: "Think and Grow Rich",
        author: "-Napoleon Hill"
      }
    ]
  }
];

// Exported from Helper.js
export const LawItem = ({ number, text, containerClass, numberClass, textClass }) => (
  <div className={`flex sm:gap-3.5 gap-2 p-4 mt-3 items-start border ${containerClass}`}>
    <span className={`md:w-[34px] md:min-w-[34px] md:h-[37px] min-w-[24px] h-6 flex justify-center items-center font-bold ${numberClass}`}>{number}</span>
    <p className={`font-bold leading-120 ${textClass}`}>{text}</p>
  </div>
);

export const Laws = [
  "In order to accumulate wealth you have to first believe that you are worthy of it.",
  "You must give away at least 10% of everything you make",
  "You must save at least 10% of everything you make and never spend it (investing is not spending)",
  "You must take risk.",
  "You must increase your ability to earn by creating passive income",
  "You must diversify your assets with a mix of high risk/high reward, medium risk/medium reward and low risk/low reward.",
  "You must buy low and sell high (“Be greedy when others are fearful and fearful when others are greedy.” -Warren Buffet)",
  "You must be able to put off short term satisfaction in exchange for long-term growth (and you must care less about what others think your financial status is than what it actually is)",
  "You must have multiple streams of income",
  "You must use debt wisely to make incremental growth"
];


// cardData.js

const cardData = [
  {
    id: 1,
    image: "/assets/images/svg/meetAllan/startNow.svg",
    title: "Start Now",
    description: "Don't wait until you know 100% of what you need, get started already.",
  },
  {
    id: 2,
    image: "/assets/images/svg/meetAllan/debt.svg",
    title: "Good vs Bad Debt",
    description: "Not all debt is bad debt. Know the difference",
  },
  {
    id: 3,
    image: "/assets/images/svg/meetAllan/cutTies.svg",
    title: "Cut Ties",
    description:
      "Get bad people out of your life, especially if they are related to you. The closer they are, the more damage you allow them to cause.",
  },
  {
    id: 4,
    image: "/assets/images/svg/meetAllan/college.svg",
    title: "College Myth",
    description: "In most cases, college is a waste of time and money.",
  },
  {
    id: 5,
    image: "/assets/images/svg/meetAllan/payFirst.svg",
    title: "Pay Yourself First",
    description: "Pay yourself 10% first. Even before paying off high interest debt. The lender will make you pay them either way. You have to be the one to make sure to pay yourself.",
  },
];

export default cardData;
