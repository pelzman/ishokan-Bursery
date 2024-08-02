import Hero from "./component/Hero"
import TrusteesGrid from "./component/TrusteeProfile"
import TrusteeProfile from "./component/TrusteeProfile"
const AboutUs = () => {
  return (
    <div className="pt-[30px]">
      <Hero />

      {/* <TrusteesGrid />
       */}
      <TrusteeProfile />

    </div>
  )
}

export default AboutUs