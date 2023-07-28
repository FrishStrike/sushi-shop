import SideBar from "@/components/SideBar";
import SushiFooter from "@/components/SushiFooter";
import SushiHeader from "@/components/SushiHeader";

export const metadata = {
  title: "Cart | Sushi Shop",
  description: "A great sushi, nice your meal",
};

export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SideBar />
      <SushiHeader title="CART" />
      {children}
      <SushiFooter />
    </>
  );
}
