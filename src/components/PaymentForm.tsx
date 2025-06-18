import React from 'react';
import {
    Box,
    Input,
    Text,
    Button,
    Stack,
    Select,
    FormControl,
    FormLabel,
  } from "@chakra-ui/react";
  
  export const PaymentForm = ({ onConfirm,onBack }) => (
    <Box p={6}>
      <Text fontSize="2xl" mb={4}>Payment Details</Text>
      <Button mb={4} variant="outline" onClick={onBack}>
      ← Back
    </Button>
      <Stack spacing={4}>
        <FormControl>
          <FormLabel>Card Number</FormLabel>
          <Input placeholder="XXXX XXXX XXXX XXXX" />
        </FormControl>
  
        <FormControl>
          <FormLabel>Cardholder Name</FormLabel>
          <Input placeholder="Full Name" />
        </FormControl>
  
        <FormControl>
          <FormLabel>Expiry Date</FormLabel>
          <Input type="month" />
        </FormControl>
  
        <FormControl>
          <FormLabel>CVV</FormLabel>
          <Input type="password" maxLength={4} />
        </FormControl>
  
        <Button colorScheme="blue" onClick={onConfirm}>Pay ₹5,500</Button>
      </Stack>
    </Box>
  );
  