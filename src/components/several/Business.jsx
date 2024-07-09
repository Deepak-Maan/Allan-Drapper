import React from 'react'
import { H2 } from '../common/Heading'
import evaluateMan from '../../../public/assets/images/webp/several/evaluateMan.webp'
import analyzeMan from '../../../public/assets/images/webp/several/analyzeMan.webp'
import navigate from '../../../public/assets/images/webp/several/navigateMan.webp'
import rightClick from '../../../public/assets/images/svg/several/rightClickIcon.svg'
import Image from 'next/image'

const Business = () => {
        return (
                <div className='pt-[110px]'>
                        <div className='container max-w-[1140px] mx-auto px-3'>
                                <div className='flex flex-col min-[1100px]:flex-row gap-[32px] relative'>
                                        <div className='pt-[55px] order-2 lg:order-1'>
                                                <H2 className="!text-4xl1 !max-w-[653px]" heading="I Have Several Business Ideas. What Should I Do?" />
                                                <p className='pt-[32px] font-medium text-xl leading-130 mb-[71px]'>Published: 11 December, 2023</p>
                                                <div className='mb-[60px]'>
                                                        <Image src={evaluateMan} alt='analyzeMan' className='max-w-[758px] min-h-[393px]' />
                                                        <h4 className='text-lightBlack font-bold text-2xl1 leading-120 pt-[32px] pb-4'>Evaluate ideas by listing, researching, and assessing feasibility.</h4>
                                                        <p className='opacity-80 text-lightBlack font-medium text-2xl leading-130 max-w-[778px] mb-4'>Having several business ideas is an exciting position to be in, and there are several steps you can take to evaluate and pursue the most promising ones. Start by listing and categorizing your ideas based on industry, market, or other relevant criteria. Conduct initial research for each idea to understand the market demand, competition, and potential customer base, identifying trends and gaps your ideas might fill. Assess the feasibility of each idea by considering the required investment, technical skills, and resources needed, as well as your own expertise and passion for each one. Using a business model canvas for each idea can help you outline key customer segments, channels, and revenue streams.</p>
                                                        <p className='opacity-80 text-lightBlack font-medium text-2xl leading-130 mb-4'>1. List your ideas.</p>
                                                        <p className='opacity-80 text-lightBlack font-medium text-2xl leading-130 mb-4'>2. Research market demand and competition.</p>
                                                        <p className='opacity-80 text-lightBlack font-medium text-2xl leading-130 '>3. Assess feasibility based on investment and skills.</p>
                                                </div>
                                                <div className='mb-[60px]'>
                                                        <Image src={analyzeMan} alt='analyzeMan' className='max-w-[758px] min-h-[393px]' />
                                                        <h4 className='text-lightBlack font-bold text-2xl1 leading-120 pt-[32px] pb-4'>Analyze SWOT, get feedback, and prioritize ideas.</h4>
                                                        <p className='opacity-80 text-lightBlack font-medium text-2xl leading-130 max-w-[775px] mb-4'>Perform a SWOT analysis to identify the strengths, weaknesses, opportunities, and threats for each idea, helping you pinpoint those with the best potential for success. Seek feedback from trusted mentors, colleagues, or industry experts to refine your concepts and identify potential pitfalls. Rank your ideas based on market potential, alignment with your skills, and financial viability, focusing on the top one or two that stand out.</p>
                                                        <p className='opacity-80 text-lightBlack font-medium text-2xl leading-130 max-w-[775px] mb-3'>Develop detailed business plans for these top ideas, outlining your strategy, target market, financial projections, and marketing plan. Validate your idea with a minimum viable product (MVP) or prototype, collecting real-world feedback and iterating based on customer responses. Determine the funding needed for your business and explore options such as personal savings, loans, investors, or crowdfunding. Network with industry professionals and potential partners, and build a team with complementary skills to help execute your business idea. Start with a clear execution plan, set measurable goals, and continuously monitor progress, adapting your strategy as needed. </p>
                                                        <h4 className='text-lightBlack font-bold text-2xl1 leading-120 pb-4'>Stay adaptable for business success.</h4>
                                                        <p className='opacity-80 text-lightBlack font-medium text-2xl leading-130 max-w-[775px] mb-[60px]'>Stay flexible and persistent, ready to pivot based on market feedback and changing circumstances. By following these steps, you can systematically evaluate your business ideas and focus on the most promising ones, increasing your chances of success.</p>
                                                </div>
                                                <div className='mb-[60px]'>
                                                        <Image src={navigate} alt='analyzeMan' className='max-w-[758px] min-h-[393px]' />
                                                        <h4 className='text-lightBlack font-bold text-2xl1 leading-120 pt-[32px] pb-4'>Navigate with Flexibility and Perseverance</h4>
                                                        <p className='opacity-80 text-lightBlack font-medium text-2xl leading-130 max-w-[775px] mb-4'>Maintain flexibility and perseverance, remaining open to adjustments based on market responses and evolving conditions. By adhering to these steps diligently, you can systematically assess your array of business ideas, directing your efforts towards those with the greatest potential for success, thereby enhancing your likelihood of achieving your entrepreneurial goals.</p>
                                                        <p className='opacity-80 text-lightBlack font-medium text-2xl leading-130 max-w-[775px] mb-4'>In the dynamic landscape of entrepreneurship, the ability to adapt and persist is paramount. Embracing flexibility while staying resolute allows you to navigate the unpredictable currents of the market and respond effectively to emerging opportunities and challenges alike. </p>
                                                        <p className='opacity-80 text-lightBlack font-medium text-2xl leading-130 max-w-[775px] mb-4'>By fostering this mindset, you cultivate a culture of continuous improvement and innovation within your entrepreneurial journey. This approach enables you to refine your strategies, iterate on your ideas, and steer your business towards sustainable growth and success over time.</p>
                                                </div>
                                        </div>
                                        <div className='w-[330px] order-1 lg:order-2 h-full p-[32px] lg:sticky lg:top-0 border border-offGray '>
                                                <h5 className='text-lightBlack font-bold text-2xl1 leading-120 mb-4'>Table of Contents</h5>
                                                <div className='flex items-center gap-[10px] mb-6'>
                                                        <Image src={rightClick} alt='rightClick' />
                                                        <p className='font-medium text-lightBlack opacity-80 text-2xl leading-130'>Executive Summary</p>
                                                </div>
                                                <div className='flex items-center gap-[10px] mb-6'>
                                                        <Image src={rightClick} alt='rightClick' />
                                                        <p className='font-medium text-lightBlack opacity-80 text-2xl leading-130'>Business Description</p>
                                                </div>
                                                <div className='flex items-center gap-[10px] mb-6'>
                                                        <Image src={rightClick} alt='rightClick' />
                                                        <p className='font-medium text-lightBlack opacity-80 text-2xl leading-130'>Market Analysis</p>
                                                </div>
                                                <div className='flex items-center gap-[10px] mb-6'>
                                                        <Image src={rightClick} alt='rightClick' />
                                                        <p className='font-medium text-lightBlack opacity-80 text-2xl leading-130'>Marketing Strategy</p>
                                                </div>
                                                <div className='flex items-center gap-[10px] mb-6'>
                                                        <Image src={rightClick} alt='rightClick' />
                                                        <p className='font-medium text-lightBlack opacity-80 text-2xl leading-130'>Operational Plan</p>
                                                </div>
                                                <div className='flex items-center gap-[10px]'>
                                                        <Image src={rightClick} alt='rightClick' />
                                                        <p className='font-medium text-lightBlack opacity-80 text-2xl leading-130'>Financial Plan</p>
                                                </div>

                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default Business