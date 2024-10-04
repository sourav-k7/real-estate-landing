import { Card, CardContent } from "@mui/joy";

function FeatureCard({ icon, label }) {
  return (
    <Card
      invertedColors={false}
      orientation="vertical"
      size="sm"
      variant="outlined"
      className="py-8 px-9 bg-white shadow-all-lg"
    >
      <CardContent>
        {icon}
        <div className="font-semibold text-[28px] text-primary mt-12">
          {label}
        </div>
      </CardContent>
    </Card>
  );
}

export default FeatureCard;
