import Image from "next/image";
import { H2 } from "../common/Heading";
import cardData from "../common/Helper";

const Opinion = () => {
    return (
        <section className="bg-gray">
            <div className="max-w-[1164px] px-3 mx-auto pt-24">
                <H2 heading={"Allan’s Unpopular Opinions"} className={"text-center"} />
                <div className="flex flex-row flex-wrap items-center md:justify-start md:items-start  justify-center pt-[61px] !pb-[54px]">
                    {cardData.map((card) => (
                        <div key={card.id} className="w-full sm:w-1/2 lg:w-1/3 pb-10">
                            <Image
                                src={card.image}
                                alt={card.title}
                                width={64}
                                height={64}
                                className="pb-4 md:pb-6"
                            />
                            <p className="text-2xl1 font-bold mb-2.5 leading-120 text-lightBlack">
                                {card.title}
                            </p>
                            <p className="text-2xl text-lightBlack opacity-80 mb-0 font-medium leading-130 sm:max-w-[325px]">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Opinion;
