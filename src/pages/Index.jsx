import { useState } from "react";
import { Container, Text, VStack, Heading, Box, Image, Flex, Badge, HStack, IconButton } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const Index = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Movie Reviews
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Discover and share reviews of your favorite movies.
        </Text>
        <Box w="100%" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="/images/movie-banner.jpg" alt="Movie Banner" />
          <Box p={6}>
            <Box display="flex" alignItems="baseline">
              <Badge borderRadius="full" px="2" colorScheme="teal">
                New
              </Badge>
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                2 hours &bull; Action &bull; Adventure
              </Box>
            </Box>
            <Heading as="h2" size="md" mt="1" lineHeight="tight" isTruncated>
              The Amazing Movie
            </Heading>
            <Text mt={2}>
              This is a brief description of the movie. It's an exciting tale of adventure and heroism.
            </Text>
            <HStack spacing={1} mt={4}>
              {[1, 2, 3, 4, 5].map((star) => (
                <IconButton
                  key={star}
                  icon={<StarIcon />}
                  colorScheme={star <= rating ? "yellow" : "gray"}
                  variant="ghost"
                  onClick={() => handleRating(star)}
                  aria-label={`Rate ${star} stars`}
                />
              ))}
            </HStack>
          </Box>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;