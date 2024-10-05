import { Card, CardContent } from "@mui/joy";

function FeatureCard({ icon, label }) {
  return (
    <Card
      invertedColors={false}
      orientation="vertical"
      size="sm"
      variant="outlined"
      className="py-4 md:py-6 lg:py-8 px-5 sm:px-7 lg:px-9 bg-white shadow-all-lg"
    >
      <CardContent>
        {icon}
        <div className="font-semibold text-sm sm:text-lg md:text-2xl lg:text-[28px] text-primary mt-5 sm:mt-7 md:mt-10 lg:mt-12">
          {label}
        </div>
      </CardContent>
    </Card>
  );
}

export default FeatureCard;
