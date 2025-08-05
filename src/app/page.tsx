import CreateValue from "@/components/landing/createValue/CreateValue";
import FromOrder from "@/components/landing/fromOrder/FromOrder";
import Plans from "@/components/landing/plan/plans";
import ServiceSection from "@/components/landing/serviceSection/serviceSection";
import VideoSection from "@/components/landing/videoSection";

const landing = () => {
  return (
    <>
      <VideoSection />
      <ServiceSection />
      <FromOrder />
      <Plans />
      <CreateValue />
    </>
  );
};

export default landing;
