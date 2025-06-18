import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import alirlineIcon from '../images/airline_logo.png';

export const Header = () => (
  <Box bg="blue.600" color="white" py={4} px={6} boxShadow="md">
    <Flex align="center">
      <Image
        src={alirlineIcon}
        alt="Group 9 Logo"
        boxSize="40px"
        borderRadius="full"
        mr={4}
      />
      <Text fontSize="xl" fontWeight="bold">
        Group 9 Airlines
      </Text>
    </Flex>
  </Box>
);
