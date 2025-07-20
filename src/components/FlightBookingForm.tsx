import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Select,
  Stack,
  Text,
  Icon,
} from "@chakra-ui/react";
import { MdArrowForward, MdCalendarToday, MdPerson } from "react-icons/md";

const FlightBookingForm = ({ onSearch }) => {
  const [tripType, setTripType] = useState("oneway");
  const [from, setFrom] = useState("New York");
  const [to, setTo] = useState("San Francisco");
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    console.log(e.target.value);
  };

  return (
    <Box maxW="lg" mx="auto" mt={10} p={8} borderWidth={1} borderRadius="lg" boxShadow="md">
      <Heading size="md" mb={6} color="white" bg="blue.700" p={3} borderRadius="md">
        Book Flight
      </Heading>

      <Flex justify="center" mb={4}>
        <Button
          onClick={() => setTripType("roundtrip")}
          variant={tripType === "roundtrip" ? "solid" : "ghost"}
          colorScheme="blue"
          borderRadius="full"
          mr={2}
        >
          Round Trip
        </Button>
        <Button
          onClick={() => setTripType("oneway")}
          variant={tripType === "oneway" ? "solid" : "ghost"}
          colorScheme="blue"
          borderRadius="full"
        >
          One Way
        </Button>
      </Flex>

      <Stack spacing={4}>
        <Box>
          <Text fontSize="sm" mb={1}>From</Text>
          <Select placeholder="New York" value={from} onChange={(e) => setFrom(e.target.value)}>
            <option value="chicago">Chicago</option>
            <option value="madrid">Madrid</option>
            <option value="newyork">Sydney</option>
            <option value="london">London</option>
          </Select>
        </Box>

        <Box>
          <Text fontSize="sm" mb={1}>To</Text>
          <Select placeholder="Bangalore" value={to} onChange={(e) => setTo(e.target.value)}>
            <option value="chicago">San Francisco</option>
            <option value="madrid">Hyderabad</option>
            <option value="newyork">New Delhi</option>
            <option value="london">Kolkata</option>
          </Select>
        </Box>

        <Box>
          <Text fontSize="sm" mb={1}>Depart</Text>
          <Flex align="center">
            <Icon as={MdCalendarToday} mr={2} />
            <Input
              type="date"
              value={selectedDate}
              onChange={handleDateChange} 
            />
          </Flex>
        </Box>

        <Box>
          <Text fontSize="sm" mb={1}>Passengers</Text>
          <Flex align="center">
            <Icon as={MdPerson} mr={2} />
            <Select>
              <option>1 adult</option>
              <option>2 adults</option>
              <option>Family (3+)</option>
            </Select>
          </Flex>
        </Box>

        <Box>
          <Text fontSize="sm" mb={1}>Class</Text>
          <Select defaultValue="Economy">
            <option>Economy</option>
            <option>Premium Economy</option>
            <option>Business</option>
            <option>First Class</option>
          </Select>
        </Box>

        <Button
        mt={4}
        colorScheme="blue"
        size="lg"
        borderRadius="xl"
        onClick={() => onSearch({ from, to })}
      >
        Search flights
      </Button>
      </Stack>
    </Box>
  );
};

export default FlightBookingForm;
