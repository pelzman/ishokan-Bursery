import BoardOfTrustees from "./component/BoardOfTrustees"
import Carousel from "./component/Carousel"
import OurAchievement from "./component/OurAchievement"
import Testimonial from "./component/Testimonial"
import WhoWeAre from "./component/WhoWeAre"

const Home = () => {
    return (
        <div className="w-[100%] relative overflow-hidden">
            <section>
                <Carousel />
            </section>

            <section>
                <WhoWeAre />
            </section>

            <section>
                <OurAchievement />
            </section>

            <section>
                <Testimonial />
            </section>

            <section>
                <BoardOfTrustees />
            </section>






        </div>
    )
}

export default Home