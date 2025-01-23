import React from "react";
import Container from "./Container";
import CTASubscribeForm from "./CTASubscribeForm";

const CTA = () => {
  return (
    <section className="my-5 lg:my-section-spacing">
      <Container>
        <div
          className="bg-cover bg-center flex flex-col justify-center items-center gap-6 py-16 lg:py-28 rounded"
          style={{ backgroundImage: "url(/assets/cta-bg.png)" }}
        >
          <h1 className="font-bold text-lg lg:text-4xl text-white uppercase">
            Join Moana's Adventure
          </h1>
          <p className="text-white text-sm lg:text-lg">
            Stream now and experience her epic journey
          </p>
          <CTASubscribeForm />
        </div>
      </Container>
    </section>
  );
};

export default CTA;
