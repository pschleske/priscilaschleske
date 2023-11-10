import { Heading, Flex, Image, Container, Text } from "@chakra-ui/react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useState } from "react";

import { BackButton } from "../components/BackButton";
import image1 from '../assets/Screen Shot 2023-11-10 at 10.37.11 AM.png';
import image2 from '../assets/Screen Shot 2023-11-10 at 10.33.31 AM.png';

export const Yelpcamp = () => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        image1,
        image2
    ]

    const previousImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : images.length - 1
        );
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex < images.length - 1 ? prevIndex + 1 : 0
        );
    };

    const iconSize = "2em";

    return (
        <>
            <Heading size='4xl' align='center' pt='2'>YelpCamp</Heading>

            <Flex justifyContent='center' pt='2' >
                <BackButton />
            </Flex>

            <Flex alignItems="center" justifyContent="center" py='30' h='40%' w='100%' mx='auto'>
                <BsChevronLeft
                    onClick={previousImage}
                    style={{ fontSize: iconSize, position: "absolute", left: "10%" }}
                    pl='100'
                />
                <Image src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} h={400} w={800} />
                <BsChevronRight
                    onClick={nextImage}
                    style={{ fontSize: iconSize, position: "absolute", right: "10%" }}
                    pr='100'
                />
            </Flex>

            <Container pt='5'>
                <Text fontSize='lg'>
                    Developed on a robust MongoDB/Express/Node stack, this application follows a RESTful architecture and leverages the Bootstrap CSS framework for an appealing visual design. The primary focus is on facilitating CRUD operations for users, campgrounds, and comments, with intricate relationships established in the database. The site dynamically presents actionable commands, such as edit and delete options, based on user authorization and ownership.
                </Text>
                <br />
                <Text fontSize='lg'>
                    For data storage, MongoDB Atlas, a cloud-based NoSQL database, is employed to ensure scalability and reliability. Robust user authentication and authorization mechanisms are implemented across various routes, incorporating Passport.js and related submodules.
                </Text>
                <br />
                <Text fontSize='lg'>
                    The codebase is thoughtfully modularized, with distinct components for routes, middleware (specifically for session authentication), and database models. This modular structure enhances code maintainability and fosters a more organized development process.
                </Text>
                <br />
                <Text fontSize='lg'>
                    The overarching goal of this project is to provide users with a platform to share feedback about camps. Upon registration and login, users can enter their details and verify their accounts for added security. Authenticated users gain the ability to add, edit, and delete reviews for campgrounds. Other users can then explore the ratings and reviews for specific or nearby campsites. Ultimately, this website offers a user-friendly and efficient solution for discovering and validating campgrounds, enhancing the overall camping experience.
                </Text>
                <br />

            </Container>

        </>
    )
}
