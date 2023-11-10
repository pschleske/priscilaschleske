import { useState } from 'react';
import { Box, Container, Flex, Text, Image, Heading } from '@chakra-ui/react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

import { BackButton } from '../components/BackButton';

import image1 from '../assets/Screen Shot 2023-10-18 at 6.13.53 PM.png';
import image2 from '../assets/Screen Shot 2023-10-18 at 6.14.19 PM.png';
import image3 from '../assets/Screen Shot 2023-10-18 at 6.14.32 PM.png';
import image4 from '../assets/Screen Shot 2023-10-18 at 6.19.07 PM.png';
import image5 from '../assets/Screen Shot 2023-10-18 at 6.21.59 PM.png';
import image6 from '../assets/Screen Shot 2023-10-18 at 6.45.49 PM.png';
import image7 from '../assets/Screen Shot 2023-10-18 at 6.46.02 PM.png';
import image8 from '../assets/Screen Shot 2023-10-18 at 6.46.23 PM.png';
import image9 from '../assets/Screen Shot 2023-10-18 at 6.46.37 PM.png';
import image10 from '../assets/Screen Shot 2023-10-18 at 6.50.40 PM.png';
import image11 from '../assets/Screen Shot 2023-10-18 at 6.52.34 PM.png';

export const Bellwines = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        image9,
        image10,
        // image11
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
            <Heading size='4xl' align='center' pt='2'>Bellwines</Heading>

            <Flex justifyContent='center' pt='2' >
                <BackButton />
            </Flex>

            <Flex alignItems="center" justifyContent="center" py='30' h='40%' w='100%' mx='auto'>
                <BsChevronLeft
                    onClick={previousImage}
                    style={{ fontSize: iconSize, position: "absolute", left: "10%" }}
                    pl='100'
                />
                <Image src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} h={{ md: '400' }} w={{ md: '800' }} />
                <BsChevronRight
                    onClick={nextImage}
                    style={{ fontSize: iconSize, position: "absolute", right: "10%" }}
                    pr='100'
                />
            </Flex>

            <Container pt='5'>
                <Text fontSize='lg'>
                    The Bellwines Apartments website is a dynamic web development project that combines modern design and seamless functionality to create an outstanding user experience. This project showcases my expertise in web development, design, and user engagement.
                </Text>
                <br />
                <Text fontSize='lg'>
                    Key Features:
                    <br />
                    Landing Page: The website welcomes visitors with a user-friendly landing page featuring registration, login, and contact options. <br /> <br />

                    Resident Directory: Residents can edit their profiles, fostering community connections. <br /> <br />

                    Meet the Pets: Pet owners can add, edit, and delete pet profiles, enhancing the sense of community.<br /><br />

                    Maintenance Requests: Streamlined submission and tracking of maintenance requests, ensuring prompt issue resolution.<br /><br />

                    Event Calendar: Keep residents informed about community events with an easy-to-navigate calendar.<br /><br />

                    Rent Payment Portal: Simplifies rent payment, optimizing user experiences.<br />
                </Text>
                <br />
                <Text fontSize='lg'>
                    Technologies Used:
                    <br />
                    HTML, CSS, and JavaScript for front-end development. <br />
                    React for dynamic user interfaces. <br />
                    Node.js and Express for back-end server operations. <br />
                    RESTful API design for seamless data interaction. <br />
                    Integration of third-party services, such as Stripe for payment processing.<br />
                </Text>
                <br />
                <Text fontSize='lg'>
                    The Bellwines Apartments website not only serves as a valuable tool for residents but also stands as a testament to my abilities in creating user-friendly, functional, and visually appealing web applications. It reflects my skills in problem-solving, communication, and attention to detail.
                </Text>
                <br />

            </Container>
        </>
    )
}
