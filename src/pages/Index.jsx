import React, { useState, useEffect } from "react";
import { Box, Container, VStack, HStack, Image, Text, IconButton, Heading, SimpleGrid } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = [{ src: "https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxMb2dpbiUyMEJhY2tncm91bmR8ZW58MHx8fHwxNzE3MDU4ODM3fDA&ixlib=rb-4.0.3&q=80&w=1080" }, { src: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxTdW5nbGFzc2VzfGVufDB8fHx8MTcxNzA1ODgzN3ww&ixlib=rb-4.0.3&q=80&w=1080" }, { src: "https://images.unsplash.com/photo-1532490389938-2856e3f1560a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxLaWRzJTIwRnJhbWV8ZW58MHx8fHwxNzE3MDU4ODM3fDA&ixlib=rb-4.0.3&q=80&w=1080" }];

const cards = [{ src: "https://images.unsplash.com/photo-1513151233558-d860c5398176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxob21lJTIwY2FyZCUyMDF8ZW58MHx8fHwxNzE3MDU4ODM4fDA&ixlib=rb-4.0.3&q=80&w=1080" }, { src: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxob21lJTIwY2FyZCUyMDJ8ZW58MHx8fHwxNzE3MDU4ODM4fDA&ixlib=rb-4.0.3&q=80&w=1080" }, { src: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxob21lJTIwY2FyZCUyMDN8ZW58MHx8fHwxNzE3MDU4ODM5fDA&ixlib=rb-4.0.3&q=80&w=1080" }];

const brands = Array(12).fill("https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGxvZ298ZW58MHx8fHwxNzE3MDU4ODM5fDA&ixlib=rb-4.0.3&q=80&w=1080");

const Index = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [slideIndex]);

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <Container maxW="container.xl" p={0}>
      <Box position="relative" maxW="1920px" m="auto">
        {slides.map((slide, index) => (
          <Image key={index} src={slide.src} display={index === slideIndex ? "block" : "none"} width="100%" height="500px" />
        ))}
        <IconButton aria-label="Previous Slide" icon={<FaArrowLeft />} position="absolute" top="50%" left="0" transform="translateY(-50%)" onClick={prevSlide} />
        <IconButton aria-label="Next Slide" icon={<FaArrowRight />} position="absolute" top="50%" right="0" transform="translateY(-50%)" onClick={nextSlide} />
      </Box>
      <HStack justify="center" mt={2}>
        {slides.map((_, index) => (
          <Box key={index} as="span" cursor="pointer" height="15px" width="15px" m="0 2px" bg={index === slideIndex ? "#717171" : "#bbb"} borderRadius="50%" onClick={() => setSlideIndex(index)} />
        ))}
      </HStack>
      <VStack spacing={8} mt={8}>
        <Heading as="h2">TYPES OF SPECTACLES</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {cards.map((card, index) => (
            <Box key={index} bgImage={`url(${card.src})`} bgSize="cover" bgPos="center" borderRadius="20px" minH={{ base: "300px", md: "350px", lg: "450px" }} boxShadow="0 0 12px 0 rgba(0, 0, 0, 0.2)" transition="all 500ms cubic-bezier(0.19, 1, 0.22, 1)" _hover={{ transform: "scale(0.98)", boxShadow: "0 0 5px -2px rgba(0, 0, 0, 0.3)", bgSize: "130%" }}>
              <Box p={4} color="white" bg="rgba(0, 0, 0, 0.5)" borderRadius="20px">
                <Text fontWeight="800">Card Title {index + 1}</Text>
                <Text>Card Description</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
        <Heading as="h2">Brands</Heading>
        <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={8}>
          {brands.map((brand, index) => (
            <Image key={index} src={brand} />
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;
