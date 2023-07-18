import SideBar from "@/components/SideBar";
import SushiFooter from "@/components/SushiFooter";
import SushiHeader from "@/components/SushiHeader";

export const metadata = {
  title: "Home",
  description: "Sushi shop with the best sushi in the whole world!",
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SideBar />
      <SushiHeader title="Home" />
      {children}
      <SushiFooter />
    </>
  );
}
