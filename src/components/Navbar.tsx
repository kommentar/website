import { Badge, Box, Button, Flex, Heading, Link } from "@radix-ui/themes";
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
    <Flex
      justify="between"
      align="center"
      p="3"
      gapX="1"
      style={{
        borderLeft: "1px solid rgba(39, 42, 45, 1)",
        borderBottom: "1px solid rgba(39, 42, 45, 1)",
        borderRight: "1px solid rgba(39, 42, 45, 1)",
      }}
    >
      <Heading color="orange" asChild size={{ initial: "3", xs: "4", sm: "5" }}>
        <Link href="/" underline="none">
          Kommentar
        </Link>
      </Heading>
      <Box display={{ initial: "block" }}>
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
