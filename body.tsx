import Description from "../Description/Description";
import RatingComponent from "../RatingComponent/RatingComponent";
import Reviews from "../Reviews/Reviews";
import MapContainer from "../Map/MapContainer";
import HostSection from "../Host/HostSection";
import Policy from "../Policy/policy";

function Body() {
  return (
    <>
      <Description />

      <hr className="border-t-1 border-gray-300 mb-5 mx-5 lg:mx-0" />

      <RatingComponent />

      <hr className="border-t-1 border-gray-300 mb-5 mx-5 lg:mx-0" />

      <Reviews />

      <hr className="border-t-1 border-gray-300 mb-5 mx-5 lg:mx-0" />

      <MapContainer />

      <hr className="border-t-1 border-gray-300 mb-5 mx-5 lg:mx-0" />

      <HostSection />

      <hr className="border-t-1 border-gray-300 mb-5 mx-5 lg:mx-0" />

      <Policy />

      <hr className="border-t-1 border-gray-300 mb-5 mx-5 lg:mx-0" />
    </>
  );
}

export default Body;
