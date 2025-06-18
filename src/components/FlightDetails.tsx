import React from 'react';
import {
    Box,
    Text,
    Button,
    VStack,
    Divider,
    Badge,
  } from "@chakra-ui/react";
  
  export const FlightDetails = ({ flight, onContinue, onBack  }) => (
    <Box p={6}>
      <Text fontSize="2xl" mb={4}>Flight Details</Text>
      <Button mb={4} variant="outline" onClick={onBack}>
      ← Back
    </Button>
      <VStack spacing={3} align="stretch">
        <Text><strong>Airline:</strong> {flight.airline}</Text>
        <Text><strong>Time:</strong> {flight.time}</Text>
        <Text><strong>Duration:</strong> {flight.duration}</Text>
        <Text><strong>Stops:</strong> {flight.stops}</Text>
        <Text><strong>Price:</strong> {flight.price}</Text>
        <Badge colorScheme="green">Free 15kg baggage</Badge>
      </VStack>
  
      <Divider my={6} />
      <Button colorScheme="blue" onClick={onContinue}>Continue to Payment</Button>
    </Box>
  );
  