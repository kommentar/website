import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Link,
  TabNav,
} from "@radix-ui/themes";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [starCount, setStarCount] = useState(null);

  useEffect(() => {
    fetch("/api/github-stars")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setStarCount(data.stars);
      })
      .catch((err) => {
        console.error("Failed to fetch stars:", err);
      });
  }, []);

  return (
    <Flex justify="between" align="center" py="1" gapX="1">
      <Heading color="orange" asChild size={{ initial: "3", xs: "4", sm: "5" }}>
        <Link href="/" underline="none">
          Kommentar
        </Link>
      </Heading>
      <TabNav.Root size={{ initial: "1", xs: "2" }}>
        <TabNav.Link href="#">Features</TabNav.Link>
        <TabNav.Link href="#">Documentation</TabNav.Link>
        <TabNav.Link href="#">About</TabNav.Link>
      </TabNav.Root>
      <Box display={{ initial: "none", xs: "block" }}>
        <Flex>
          <Button variant="soft" asChild>
            <a
              href="https://github.com/kommentar/kommentar"
              target="_blank"
              rel="noreferrer noopener"
            >
              Star on GitHub{" "}
              {starCount ? <Badge color="orange">{starCount} ★</Badge> : "★"}
            </a>
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export { Navbar };
