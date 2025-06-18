import React from 'react';
import {
    Box,
    Flex,
    Text,
    Button,
    Stack,
    Badge,
    Divider,
    HStack,
  } from "@chakra-ui/react";
  
  const flights = [
    {
      airline: "IndiGo",
      time: "10:00 AM - 1:00 PM",
      price: "₹5,500",
      stops: "Non-stop",
      duration: "3h",
    },
    {
      airline: "Air India",
      time: "2:00 PM - 6:00 PM",
      price: "₹6,200",
      stops: "1 Stop",
      duration: "4h",
    },
  ];
  
  export const SearchResults = ({ onSelectFlight,onBack }) => (
    <Box p={6}>
      <Text fontSize="2xl" mb={4}>Available Flights</Text>
      <Button mb={4} variant="outline" onClick={onBack}>
      ← Back
    </Button>
      <Stack spacing={4}>
        {flights.map((flight, idx) => (
          <Box key={idx} p={4} borderWidth={1} borderRadius="md">
            <Flex justify="space-between" align="center">
              <Box>
                <Text fontWeight="bold">{flight.airline}</Text>
                <Text>{flight.time}</Text>
                <Badge mt={1}>{flight.stops}</Badge>
              </Box>
              <Box textAlign="right">
                <Text fontSize="lg">{flight.price}</Text>
                <Text fontSize="sm">{flight.duration}</Text>
                <Button mt={2} colorScheme="blue" onClick={() => onSelectFlight(flight)}>
                  Select
                </Button>
              </Box>
            </Flex>
          </Box>
        ))}
      </Stack>
    </Box>
  );
  