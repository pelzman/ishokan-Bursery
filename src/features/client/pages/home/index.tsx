import BoardOfTrustees from "./component/BoardOfTrustees"
import Carousel from "./component/Carousel"
import OurAchievement from "./component/OurAchievement"
import Testimonial from "./component/Testimonial"
import WhoWeAre from "./component/WhoWeAre"
import Navbar from "../../../../layouts/clientLayout/component/navbar"

const Home = () => {
    return (
        <div className="w-[100%] relative overflow-hidden ">
            <Navbar />
            <section>
                <Carousel />
            </section>



            <section>
                <WhoWeAre />
            </section>

            <section>
                <OurAchievement />
            </section>

            <section className="lg:h-[100%] lg:py-[100px] ">
                <Testimonial />
            </section>

            <section className="lg:pt-[-30px] lg:h-[100%]">
                <BoardOfTrustees />
            </section>






        </div>
    )
}

export default Home