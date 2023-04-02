import * as React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
import { createStyles, Group, Navbar } from "@mantine/core";
import { colors } from "@/theme";
import { useRouter } from "next/router";
import { Link } from "./Layout";

const useStyles = createStyles((theme) => ({
  navbar: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
  button: {
    borderRadius: theme.radius.md,
    padding: 10,
    fontWeight: 500,
    cursor: "pointer",
    "&:hover": {
      color: colors.primary,
      backgroundColor: colors.light,
    },
  },
  linkActive: {
    "&, &:hover": {
      backgroundColor: colors.primary,
      color: theme.white,
    },
  },
}));

interface NavbarProps {
  open: boolean;
  navLinks: Link[];
}

const _Navbar: React.FC<NavbarProps> = ({ open, navLinks }) => {
  const { classes, cx } = useStyles();
  const router = useRouter();
  const { pathname } = useRouter();

  const links = React.useMemo(
    () =>
      navLinks.map((link) => (
        <Group
          key={link.link}
          mx="lg"
          className={cx(classes.button, {
            [classes.linkActive]: link.link === pathname,
          })}
          onClick={() => {
            router.push(link.link);
          }}
        >
          <link.icon size={24} stroke={1.5} />
          {link.title}
        </Group>
      )),
    [classes.button, classes.linkActive, cx, navLinks, pathname, router]
  );

  return (
    <Navbar hidden={!open} withBorder={false} className={classes.navbar}>
      {links}
    </Navbar>
  );
};

export default _Navbar;
