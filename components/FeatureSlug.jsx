import { CardContent, Card } from "@mui/joy";
import SectionTitle from "./SectionTitle";
import {
  AccountBalanceWalletOutlined,
  AddCardOutlined,
  ApartmentOutlined,
  LayersOutlined,
  LocalPoliceOutlined,
  RequestQuoteOutlined,
  SentimentSatisfiedAltOutlined,
  SurroundSoundOutlined,
} from "@mui/icons-material";
import FeatureCard from "./FeatureCard";

function FeatureSlug() {
  let features = [
    {
      icon: (
        <RequestQuoteOutlined
          sx={{ fontSize: 48 }}
          className="text-[#F4511E]"
        />
      ),
      label: "Pay as Little as possible!",
    },
    {
      icon: (
        <ApartmentOutlined sx={{ fontSize: 48 }} className="text-[#F4511E]" />
      ),
      label: "Enjoy wisdom of community!",
    },
    {
      icon: <LayersOutlined sx={{ fontSize: 48 }} className="text-[#F4511E]" />,
      label: "Let's somebody else takecare",
    },
    {
      icon: (
        <SentimentSatisfiedAltOutlined
          sx={{ fontSize: 48 }}
          className="text-[#F4511E]"
        />
      ),
      label: "Enjoy peaceful Environment!",
    },
    {
      icon: (
        <LocalPoliceOutlined sx={{ fontSize: 48 }} className="text-[#F4511E]" />
      ),
      label: "Stay Safe! Save Money!",
    },
    {
      icon: (
        <SurroundSoundOutlined
          sx={{ fontSize: 48 }}
          className="text-[#F4511E]"
        />
      ),
      label: "Good Surrounding",
    },
    {
      icon: (
        <AccountBalanceWalletOutlined
          sx={{ fontSize: 48 }}
          className="text-[#F4511E]"
        />
      ),
      label: "Zero Deposit",
    },
    {
      icon: (
        <AddCardOutlined sx={{ fontSize: 48 }} className="text-[#F4511E]" />
      ),
      label: "Pay for what you use !",
    },
  ];
  return (
    <section className="mx-20 mt-[84px]">
      <SectionTitle title={"Minimum Living Cost for everything"} />
      <div className="grid grid-cols-4 mt-9 gap-5">
        {features.map((feature, index) => (
          <FeatureCard key={index} icon={feature.icon} label={feature.label} />
        ))}
      </div>
    </section>
  );
}

export default FeatureSlug;
