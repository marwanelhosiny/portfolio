import {
  GridItem,
  Image,
  Link,
  SimpleGrid,
  Text,
  useBreakpointValue,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";

import { colors } from "../../theme";
import SectionContainer from "../SectionContainer";

const Bio = ({ secondary }) => (
  <GridItem>
    <VStack m="auto" w="75%" spacing="12px" pt="5%">
      <Text>
        Hi, I&apos;m Marwan! I studied Engineering at the University of
        Tanta, and I&apos;m currently working at{" "}
        <Link href="https://targetfortech.com/" isExternal>
          Target Agency for Software Solutions
        </Link>{" "}
        as a <strong style={{ color: secondary }}>Software Engineer</strong> on
        the Development Team. Prior to that, I&apos;ve worked at{" "}
        <Link href="https://www.abchosting.com/" isExternal>
          ABC Hosting Ltd
        </Link>{" "}
        as a <strong style={{ color: secondary }}>TypeScript Developer</strong>.
      </Text>
      <Text>
        I enjoy creating scalable & elegant web/mobile applications that have a
        real-world impact. I&apos;m always learning new technologies, either
        through formal training or self-study - and recently added{" "}
        <strong style={{ color: secondary }}>DevOps Engineering</strong>{" "}
        to my expertise.
      </Text>


    </VStack>
  </GridItem>
);

const Headshot = () => (
  <GridItem>
    <Image
      m="auto"
      src="/me.jpg"
      alt="Marwan Abdelghany"
      zIndex={1}
      className="image"
      onClick={() => {
        window.open("https://www.linkedin.com/in/marwan-abdelghany-5b520824b/");
      }}
    />
  </GridItem>
);

export default function About() {
  const shouldAlternate = useBreakpointValue({ base: false, md: true });
  const secondary = useColorModeValue(
    colors.secondary.light,
    colors.secondary.dark
  );
  return (
    <SectionContainer
      id="about"
      name="about"
      headerMt="-5%"
      headerText="About Me"
      useHeaderStyle
    >
      <SimpleGrid
        pl="10%"
        pt="5%"
        pr="10%"
        spacing={12}
        columns={[1, null, 2]}
        justifyContent="center"
      >
        {shouldAlternate ? <Bio secondary={secondary} /> : <Headshot />}
        {shouldAlternate ? <Headshot /> : <Bio secondary={secondary} />}
      </SimpleGrid>
    </SectionContainer>
  );
}
