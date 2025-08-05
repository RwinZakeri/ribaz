import Banner from "@/components/landing/banner/banner";
import CreateValue from "@/components/landing/createValue/CreateValue";
import Faq from "@/components/landing/faq/faq";
import FromOrder from "@/components/landing/fromOrder/FromOrder";
import Plans from "@/components/landing/plan/plans";
import RequestForm from "@/components/landing/requestForm/requestForm";
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
      <RequestForm />
      <Faq />
      <Banner />
    </>
  );
};

export default landing;
