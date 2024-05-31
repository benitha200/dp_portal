import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Risk Assessment",
  description: "Risk Assessment",
  // other metadata
};

const ContactPage = () => { 
  return (
    <>
      <Breadcrumb
        pageName="Risk Assessment"
        description="Assess what are the risks in your data processing and data controller"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
