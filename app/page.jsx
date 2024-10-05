import {
  AddPropertyForm,
  FeatureSlug,
  HeroSection,
  PropertyListings,
  SearchRoomSlug,
  TestimonialSection,
} from "@components";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeatureSlug />
      <PropertyListings />
      <SearchRoomSlug />
      <AddPropertyForm />
      <TestimonialSection />
    </div>
  );
}
