import { Flex, Text } from "altrone-ui";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Flex justify="between" align="center" wrap gap="m">
      <Text size={3} color="muted">
        © 2022-{year}. Made in Nizhny Novgorod by Alexander Perevezentsev. Code
        licensed MIT.
      </Text>
      <Flex gap="m">
        <Text href="https://github.com/apcom52/altrone-ui" size={3}>
          GitHub
        </Text>
        <Text href="/en/getting-started" size={3}>
          Documentation
        </Text>
      </Flex>
    </Flex>
  );
};
