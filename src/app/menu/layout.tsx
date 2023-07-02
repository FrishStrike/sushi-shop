import SideBar from "@/components/SideBar";

export const metadata = {
  title: "Menu",
  description: "The best dishes, only in our menu! Sushi Yalta!",
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SideBar />
      {children}
    </>
  );
}
