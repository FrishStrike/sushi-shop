import SideBar from "@/components/SideBar";
import SushiFooter from "@/components/SushiFooter";
import SushiHeader from "@/components/SushiHeader";

export const metadata = {
  title: "Location",
  description: "Sushi shop in Yalta",
};

export default function LocationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SideBar />
      <SushiHeader title="Location" />
      {children}
      <SushiFooter />
    </>
  );
}
