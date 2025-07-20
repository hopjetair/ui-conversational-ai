import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import alirlineIcon from '../images/airline_logo.png';
import { TextBoxWithButton } from './TextBoxWithButton.tsx';

export const Header = () => (
  <Box bg="blue.600" color="white" py={4} px={6} boxShadow="md">
    <Flex align="center" justifyContent="space-between">
      {/* Left side: Logo and title */}
      <Flex align="center">
        <Image
          src={alirlineIcon}
          alt="Hopjet Logo"
          boxSize="40px"
          borderRadius="full"
          mr={4}
        />
        <Text fontSize="xl" fontWeight="bold">
          Hopjet Airlines
        </Text>
      </Flex>

      {/* Right side: TextBoxWithButton */}
      <TextBoxWithButton />
    </Flex>
  </Box>
);