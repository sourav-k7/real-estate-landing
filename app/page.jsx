import {
  AddPropertyForm,
  FeatureSlug,
  Hero,
  PropertyListings,
  SearchRoomSlug,
  TestimonialSection,
} from "@components";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeatureSlug />
      <PropertyListings />
      <SearchRoomSlug />
      <AddPropertyForm />
      <TestimonialSection />
    </div>
  );
}
