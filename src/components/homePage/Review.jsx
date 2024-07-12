import CustomerReviewCards from './CustomersReview'
import { Heading } from '../common/Heading'

const Review = () => {
    return (
            <div className="container mx-auto px-3 pt-8 lg:pb-[83px] md:pb-20 sm:pb-16 pb-12">
                <Heading heading="Well, that was nice of you to say!" className="after:bg-yellow text-center after:left-1/2 max-w-[476px] mx-auto after:-translate-x-1/2" />
                <CustomerReviewCards />
            </div>
    )
}

export default Review
