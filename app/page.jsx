import { AddPropertyForm, FeatureSlug, Hero, PropertyListings } from "@components";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeatureSlug />
      <PropertyListings />
      <div>description</div>
      <AddPropertyForm />
      <div>testimonial section</div>
      <div>Footer</div>
    </div>
  );
}
