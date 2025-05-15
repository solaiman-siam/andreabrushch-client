import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";

function AttractionExperience() {
  return (
    <div className="py-24">
      <Container>
        <div>
          <div className="flex justify-center ">
            <SectionTitle
              innerText="Our Attractive Experience And Services For you!"
              className="w-4/12"
            />
          </div>


          <div className="grid grid-cols-2 h-[700px] gap-8 pt-14">
            <div className=" h-[700px] overflow-hidden rounded-xl">
                <img className="w-full h-full object-cover " src="https://plus.unsplash.com/premium_photo-1691938887399-e969643a517f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className="grid grid-rows-2 h-[700px] gap-4">
                <div className="row-span-1 overflow-hidden gap-6 grid grid-cols-2 ">
                    <div className="w-full rounded-lg overflow-hidden">
                        <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1704483841348-e3e2538e5175?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div className="w-full rounded-lg overflow-hidden">
                        <img className="w-full h-full object-cover" src="https://plus.unsplash.com/premium_photo-1680497811614-4f93025d7e57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHNlYSUyMGJlYWNofGVufDB8fDB8fHww" alt="" />
                    </div>
                </div>
                <div className="row-span-1">
                    <p className="text-description pt-3 font-light">Welcome to Local Caribbean Tours, your premier online marketplace for unforgettable travel experiences across the Caribbean. We specialize in connecting travelers with a diverse range of activities and tours offered by local operators throughout the region. Our mission is to showcase the unique charm, culture, and natural beauty of the Caribbean by providing authentic, high-quality tours that create lasting memories.</p>

                    <button className="px-14 cursor-pointer py-2.5 mt-10 rounded-md bg-primary01 text-white ">Explore more</button>

                    <div className="flex items-center justify-between pt-10 ">
                        <div className="flex flex-col gap-1 justify-start">
                            <h3 className="text-3xl font-semibold">50k+</h3>
                            <p className="text-description font-light">Happy Traveller</p>
                        </div>
                        <div className="flex flex-col gap-1 justify-start">
                            <h3 className="text-3xl font-semibold">165+</h3>
                            <p className="text-description font-light">Ravel Destinations</p>
                        </div>
                        <div className="flex flex-col gap-1 justify-start">
                            <h3 className="text-3xl font-semibold">16+</h3>
                            <p className="text-description font-light">Year Of Service</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>


        </div>
      </Container>
    </div>
  );
}

export default AttractionExperience;
