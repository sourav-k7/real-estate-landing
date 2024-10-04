import {
  AddPropertyForm,
  FeatureSlug,
  Hero,
  PropertyListings,
  TestimonialSection,
} from "@components";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeatureSlug />
      <PropertyListings />
      <div>description</div>
      <AddPropertyForm />
      <TestimonialSection />
    </div>
  );
}
