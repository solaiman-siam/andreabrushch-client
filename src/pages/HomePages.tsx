import AttractionExperience from "../components/home/AttractionExperience"
import ExploreEvents from "../components/home/ExploreEvents"
import Hero from "../components/home/Hero"
import HowItWorks from "../components/home/HowItWorks"


function HomePages() {
  return (
    <div>
      <Hero/>
      <HowItWorks/>
      <AttractionExperience/>
      <ExploreEvents/>
    </div>
  )
}

export default HomePages