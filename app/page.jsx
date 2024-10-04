import { FeatureSlug, Hero, PropertyListings } from "@components";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeatureSlug />
      <PropertyListings />
      <div>description</div>
      <div>Add property card</div>
      <div>testimonial section</div>
      <div>Footer</div>
    </div>
  );
}
