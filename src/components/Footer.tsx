import { GitHubLogoIcon } from "@radix-ui/react-icons";
import {
  AspectRatio,
  Box,
  Flex,
  Heading,
  Section,
  Text,
} from "@radix-ui/themes";
import Logo from "../assets/kommentar-logo.png";

const Footer = () => {
  return (
    <Box
      width="100%"
      p="9"
      style={{
        borderLeft: "1px solid rgba(39, 42, 45, 1)",
        borderBottom: "1px solid rgba(39, 42, 45, 1)",
        borderRight: "1px solid rgba(39, 42, 45, 1)",
      }}
    >
      <Flex
        justify="between"
        display={{ initial: "none", sm: "flex" }}
        width="100%"
      >
        <Flex direction="column" gap={{ initial: "6" }}>
          <Flex direction="column" gap={{ initial: "2" }} asChild>
            <Section size={{ initial: "1" }}>
              <Heading size="8" color="orange">
                Kommentar
              </Heading>
              <Text>Lightweight comments made simple.</Text>
            </Section>
          </Flex>
          <Flex gap={{ initial: "4" }}>
            <a
              href="https://github.com/kommentar"
              target="_blank"
              rel="noreferrer noopener"
            >
              <GitHubLogoIcon
                style={{ transform: "scale(1.5)" }}
                color="rgba(255, 160, 87, 1)"
              />
            </a>
          </Flex>
          <Text>
            Made with <Text color="orange">♥</Text> by{" "}
            <a
              href="https://safwanyp.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              Safwan Parkar
            </a>
          </Text>
        </Flex>
        <Box width={{ initial: "300px" }} height={{ initial: "300px" }}>
          <AspectRatio ratio={1} style={{ paddingBottom: "0" }}>
            <img
              src={Logo.src}
              alt="Kommentar Logo"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "auto",
              }}
            />
          </AspectRatio>
        </Box>
      </Flex>
    </Box>
  );
};

export { Footer };
