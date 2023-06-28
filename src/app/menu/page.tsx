import SushiFooter from "@/components/SushiFooter";
import SushiHeader from "@/components/SushiHeader";
import SushiList from "@/components/SushiList";

export default function Home() {
  return (
    <>
      <SushiHeader title="SUSHI FOOD" />
      <SushiList />;
      <SushiFooter />
    </>
  );
}
