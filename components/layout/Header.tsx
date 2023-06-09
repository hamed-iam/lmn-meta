import * as React from "react";
import {
  Box,
  Burger,
  Button,
  Container,
  Group,
  Header,
  Image,
  createStyles,
} from "@mantine/core";

import NextLink from 'next/link'
import {useRouter} from 'next/router'
import { StateContext } from "@/contexts";
import { colors } from "@/theme";
import { Link } from "./Layout";

const useStyles = createStyles((theme) => ({
  header: {
    borderBottom: 0,
  },
  inner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
  linkActive: {
    "&, &:hover": {
      backgroundColor: colors.primary,
      color: theme.white,
    },
  },
}));

interface HeaderProps {
  navLinks: Link[];
}

const _Header: React.FC<HeaderProps> = ({ navLinks }) => {
  const { classes, cx } = useStyles();
  const { pathname } = useRouter();
  const { openMenu, handleOpenMenu } = React.useContext(StateContext);

  const links = React.useMemo(
    () =>
      navLinks.map((link) => (
        <NextLink key={link.title} href={link.link}>
          <Button
            className={cx(classes.button, {
              [classes.linkActive]: link.link === pathname,
            })}
            variant="white"
            radius="md"
            fw="bold"
            c="dark"
          >
            {link.title}
          </Button>
        </NextLink>
      )),
    [classes.button, classes.linkActive, cx, navLinks, pathname]
  );

  return (
    <Header height={80} py="lg" className={classes.header}>
      <Container className={classes.inner}>
        <Box>
          <Image width={148} height={40} src="/assets/logo.svg" alt="Little Lemon" />
        </Box>
        <Group spacing="xs" noWrap>
          {links}
        </Group>
        <Burger
          opened={openMenu}
          className={classes.burger}
          onClick={handleOpenMenu}
        />
      </Container>
    </Header>
  );
};

export default _Header;
