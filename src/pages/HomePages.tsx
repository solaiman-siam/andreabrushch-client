import AttractionExperience from "../components/home/AttractionExperience"
import Experience from "../components/home/Experience"
import ExploreEvents from "../components/home/ExploreEvents"
import Hero from "../components/home/Hero"
import HowItWorks from "../components/home/HowItWorks"
import MapEvents from "../components/home/MapEvents"
import TravelerTrust from "../components/home/TravelerTrust"


function HomePages() {
  return (
    <div>
      <Hero/>
      <HowItWorks/>
      <AttractionExperience/>
      <MapEvents/>
      <ExploreEvents/>
      <Experience/>
      <TravelerTrust/>
    </div>
  )
}

export default HomePages