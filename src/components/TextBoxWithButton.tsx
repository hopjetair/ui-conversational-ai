import React, { useState } from "react";
import { Box, Input, Button, Flex, Text } from '@chakra-ui/react';

export const TextBoxWithButton = () => {
  const [inputValue, setInputValue] = useState('Hopjet-ui-user');

  const handleSubmit = () => {
    console.log('Submitted value:', inputValue);
    sessionStorage.setItem('uiUserId',inputValue);
  };

  return (
    <Box>
      <Flex align="center">
      <Text fontWeight="bold" mr={2}  whiteSpace="nowrap">
          User ID:
        </Text>
      
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter User ID"
          mr={2}
        />
        <Button colorScheme="blue" onClick={handleSubmit}>
          Submit
        </Button>
      </Flex>
    </Box>
  );
};