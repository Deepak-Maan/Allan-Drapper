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
// ============
// Exported from Helper.js
export const LawItem = ({ number, text, containerClass, numberClass, textClass }) => (
    <div className={`flex sm:gap-3.5 gap-2 p-4 mt-3 items-start border ${containerClass}`}>
        <span className={`md:w-[34px] md:min-w-[34px] md:h-[37px] min-w-[24px] h-6 flex justify-center items-center font-bold ${numberClass}`}>
            {number}
        </span>
        <p className={`font-bold leading-120 ${textClass}`}>
            {text}
        </p>
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