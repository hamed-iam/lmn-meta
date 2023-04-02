import * as React from "react";
import { AppShell } from "@mantine/core";
import { Header, Footer, Navbar } from "@/components";
import { StateContext } from "@/contexts";
import {
  IconBuildingWarehouse,
  IconHome,
  IconInfoSquareRounded,
  IconLogin,
  IconNotebook,
  IconTruckDelivery,
  IconBrandTabler,
} from "@tabler/icons-react";

export interface Link {
  icon: typeof IconBrandTabler;
  title: string;
  link: string;
}

const navLinks: Link[] = [
  {
    icon: IconHome,
    title: "Home",
    link: "/",
  },
  {
    icon: IconInfoSquareRounded,
    title: "About",
    link: "/about",
  },
  {
    icon: IconNotebook,
    title: "Menu",
    link: "/menu",
  },
  {
    icon: IconBuildingWarehouse,
    title: "Reservations",
    link: "/reservations",
  },
  {
    icon: IconTruckDelivery,
    title: "Order Online",
    link: "/order-online",
  },
  {
    icon: IconLogin,
    title: "Login",
    link: "/login",
  },
];

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { openMenu } = React.useContext(StateContext);

  return (
    <AppShell
      header={<Header navLinks={navLinks} />}
      navbar={<Navbar open={openMenu} navLinks={navLinks} />}
      footer={<Footer />}
      styles={{ main: { paddingLeft: 0, paddingRight: 0 } }}
    >
      {children}
    </AppShell>
  );
};

export default Layout;
