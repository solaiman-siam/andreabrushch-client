import { Calendar, MapPinned } from "lucide-react";
import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";
import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import ButtonPrimary from "../shared/ButtonPrimary";
function ExploreEvents() {
  return (
    <div className="pt-24">
      <Container>
        <div>
          <SectionTitle innerText="Explore Events" />

          <div className="grid grid-cols-2 gap-8 pt-16">
            <div className="grid grid-cols-2 bg-black/5 group rounded-xl gap-4">
              <div className="w-full overflow-hidden group rounded-xl">
                <img
                  className="w-full h-full group-hover:scale-110 transition-all duration-300 object-cover"
                  src="https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold pb-4">
                  Volcano Hike To Mt. Liamuiga (Highest Peak On Island)
                </h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <MapPinned size={20} className="text-description" />
                    <h4 className="text-description text-sm font-light">
                      8751 W Main, San Juan
                    </h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={20} className="text-description" />
                    <h4 className="text-description text-sm font-light">
                      May 15, 2025
                    </h4>
                  </div>
                </div>

                <div className="border-b pb-6 flex items-center gap-8 pt-6  border-black/10">
                  <Rating
                    style={{ maxWidth: 150 }}
                    value={3}
                    readOnly
                    itemStyles={{
                      itemShapes: Star,
                      activeFillColor: "#FFA432",
                      inactiveFillColor: "#ddd",
                    }}
                  />
                  <h4 className="text-description">584 reviews</h4>
                </div>
                <div className="flex items-center justify-between gap-8 pt-6">
                  <div>
                    <h4 className="text-description">From</h4>
                    <h3 className="font-semibold text-lg">$500.00</h3>
                  </div>
                  <ButtonPrimary
                    innerText="View Details"
                    className="px-10 text-sm py-2.5 font-normal rounded-sm"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 bg-black/5 group rounded-xl gap-4">
              <div className="w-full overflow-hidden group rounded-xl">
                <img
                  className="w-full h-full group-hover:scale-110 transition-all duration-300 object-cover"
                  src="https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold pb-4">
                  Volcano Hike To Mt. Liamuiga (Highest Peak On Island)
                </h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <MapPinned size={20} className="text-description" />
                    <h4 className="text-description text-sm font-light">
                      8751 W Main, San Juan
                    </h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={20} className="text-description" />
                    <h4 className="text-description text-sm font-light">
                      May 15, 2025
                    </h4>
                  </div>
                </div>

                <div className="border-b pb-6 flex items-center gap-8 pt-6  border-black/10">
                  <Rating
                    style={{ maxWidth: 150 }}
                    value={3}
                    readOnly
                    itemStyles={{
                      itemShapes: Star,
                      activeFillColor: "#FFA432",
                      inactiveFillColor: "#ddd",
                    }}
                  />
                  <h4 className="text-description">584 reviews</h4>
                </div>
                <div className="flex items-center justify-between gap-8 pt-6">
                  <div>
                    <h4 className="text-description">From</h4>
                    <h3 className="font-semibold text-lg">$500.00</h3>
                  </div>
                  <ButtonPrimary
                    innerText="View Details"
                    className="px-10 text-sm py-2.5 font-normal rounded-sm"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 bg-black/5 group rounded-xl gap-4">
              <div className="w-full overflow-hidden group rounded-xl">
                <img
                  className="w-full h-full group-hover:scale-110 transition-all duration-300 object-cover"
                  src="https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold pb-4">
                  Volcano Hike To Mt. Liamuiga (Highest Peak On Island)
                </h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <MapPinned size={20} className="text-description" />
                    <h4 className="text-description text-sm font-light">
                      8751 W Main, San Juan
                    </h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={20} className="text-description" />
                    <h4 className="text-description text-sm font-light">
                      May 15, 2025
                    </h4>
                  </div>
                </div>

                <div className="border-b pb-6 flex items-center gap-8 pt-6  border-black/10">
                  <Rating
                    style={{ maxWidth: 150 }}
                    value={3}
                    readOnly
                    itemStyles={{
                      itemShapes: Star,
                      activeFillColor: "#FFA432",
                      inactiveFillColor: "#ddd",
                    }}
                  />
                  <h4 className="text-description">584 reviews</h4>
                </div>
                <div className="flex items-center justify-between gap-8 pt-6">
                  <div>
                    <h4 className="text-description">From</h4>
                    <h3 className="font-semibold text-lg">$500.00</h3>
                  </div>
                  <ButtonPrimary
                    innerText="View Details"
                    className="px-10 text-sm py-2.5 font-normal rounded-sm"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 bg-black/5 group rounded-xl gap-4">
              <div className="w-full overflow-hidden group rounded-xl">
                <img
                  className="w-full h-full group-hover:scale-110 transition-all duration-300 object-cover"
                  src="https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold pb-4">
                  Volcano Hike To Mt. Liamuiga (Highest Peak On Island)
                </h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <MapPinned size={20} className="text-description" />
                    <h4 className="text-description text-sm font-light">
                      8751 W Main, San Juan
                    </h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={20} className="text-description" />
                    <h4 className="text-description text-sm font-light">
                      May 15, 2025
                    </h4>
                  </div>
                </div>

                <div className="border-b pb-6 flex items-center gap-8 pt-6  border-black/10">
                  <Rating
                    style={{ maxWidth: 150 }}
                    value={3}
                    readOnly
                    itemStyles={{
                      itemShapes: Star,
                      activeFillColor: "#FFA432",
                      inactiveFillColor: "#ddd",
                    }}
                  />
                  <h4 className="text-description">584 reviews</h4>
                </div>
                <div className="flex items-center justify-between gap-8 pt-6">
                  <div>
                    <h4 className="text-description">From</h4>
                    <h3 className="font-semibold text-lg">$500.00</h3>
                  </div>
                  <ButtonPrimary
                    innerText="View Details"
                    className="px-10 text-sm py-2.5 font-normal rounded-sm"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 bg-black/5 group rounded-xl gap-4">
              <div className="w-full overflow-hidden group rounded-xl">
                <img
                  className="w-full h-full group-hover:scale-110 transition-all duration-300 object-cover"
                  src="https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold pb-4">
                  Volcano Hike To Mt. Liamuiga (Highest Peak On Island)
                </h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <MapPinned size={20} className="text-description" />
                    <h4 className="text-description text-sm font-light">
                      8751 W Main, San Juan
                    </h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={20} className="text-description" />
                    <h4 className="text-description text-sm font-light">
                      May 15, 2025
                    </h4>
                  </div>
                </div>

                <div className="border-b pb-6 flex items-center gap-8 pt-6  border-black/10">
                  <Rating
                    style={{ maxWidth: 150 }}
                    value={3}
                    readOnly
                    itemStyles={{
                      itemShapes: Star,
                      activeFillColor: "#FFA432",
                      inactiveFillColor: "#ddd",
                    }}
                  />
                  <h4 className="text-description">584 reviews</h4>
                </div>
                <div className="flex items-center justify-between gap-8 pt-6">
                  <div>
                    <h4 className="text-description">From</h4>
                    <h3 className="font-semibold text-lg">$500.00</h3>
                  </div>
                  <ButtonPrimary
                    innerText="View Details"
                    className="px-10 text-sm py-2.5 font-normal rounded-sm"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 bg-black/5 group rounded-xl gap-4">
              <div className="w-full overflow-hidden group rounded-xl">
                <img
                  className="w-full h-full group-hover:scale-110 transition-all duration-300 object-cover"
                  src="https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <div className="p-7  transition-all duration-300-6">
                <h3 className="text-xl font-semibold pb-4">
                  Volcano Hike To Mt. Liamuiga (Highest Peak On Island)
                </h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <MapPinned size={20} className="text-description" />
                    <h4 className="text-description text-sm font-light">
                      8751 W Main, San Juan
                    </h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={20} className="text-description" />
                    <h4 className="text-description text-sm font-light">
                      May 15, 2025
                    </h4>
                  </div>
                </div>

                <div className="border-b pb-6 flex items-center gap-8 pt-6  border-black/10">
                  <Rating
                    style={{ maxWidth: 150 }}
                    value={3}
                    readOnly
                    itemStyles={{
                      itemShapes: Star,
                      activeFillColor: "#FFA432",
                      inactiveFillColor: "#ddd",
                    }}
                  />
                  <h4 className="text-description">584 reviews</h4>
                </div>
                <div className="flex items-center justify-between pt-6">
                  <div>
                    <h4 className="text-description">From</h4>
                    <h3 className="font-semibold text-lg">$500.00</h3>
                  </div>
                  <ButtonPrimary
                    innerText="View Details"
                    className="px-10 text-sm py-2.5 font-normal rounded-sm"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center col-span-2">
              <ButtonPrimary
                innerText="Explore More"
                className="px-12 py-2.5 font-normal rounded-sm"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ExploreEvents;
