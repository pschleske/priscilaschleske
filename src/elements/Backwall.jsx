import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { Box, Container, Flex, Text, Image, Heading } from '@chakra-ui/react';

import { BackButton } from "../components/BackButton"

import image1 from '../assets/Screen Shot 2023-11-02 at 7.44.02 PM.png';
import image2 from '../assets/Screen Shot 2023-11-02 at 7.44.29 PM.png';
import image3 from '../assets/Screen Shot 2023-11-02 at 7.44.43 PM.png';
import image4 from '../assets/Screen Shot 2023-11-02 at 7.45.03 PM.png';
import image5 from '../assets/Screen Shot 2023-11-02 at 7.45.39 PM.png';
import image6 from '../assets/Screen Shot 2023-11-02 at 7.45.54 PM.png';
import image7 from '../assets/Screen Shot 2023-11-02 at 7.46.18 PM.png';
import image8 from '../assets/Screen Shot 2023-11-02 at 7.46.31 PM.png';
import image9 from '../assets/Screen Shot 2023-11-02 at 7.46.47 PM.png';
import image10 from '../assets/Screen Shot 2023-11-02 at 7.47.06 PM.png';
import image11 from '../assets/Screen Shot 2023-11-02 at 7.47.30 PM.png';
import image12 from '../assets/Screen Shot 2023-11-02 at 7.47.45 PM.png';
import image13 from '../assets/Screen Shot 2023-11-02 at 7.48.10 PM.png';
import image14 from '../assets/Screen Shot 2023-11-02 at 7.48.38 PM.png';
import image15 from '../assets/Screen Shot 2023-11-02 at 7.48.55 PM.png';
import image16 from '../assets/Screen Shot 2023-11-02 at 7.49.21 PM.png';
import image17 from '../assets/Screen Shot 2023-11-02 at 7.49.37 PM.png';
import image18 from '../assets/Screen Shot 2023-11-02 at 7.50.16 PM.png';
import image19 from '../assets/Screen Shot 2023-11-02 at 7.50.35 PM.png';
import image20 from '../assets/Screen Shot 2023-11-02 at 7.51.08 PM.png';

export const Backwall = () => {
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
        image11,
        image12,
        image13,
        image14,
        image15,
        image16,
        image17,
        // image18,
        // image19,
        // image20
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
            <Heading size='4xl' align='center' pt='2'>Backwall Records</Heading>

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
                    pl='100'
                />
            </Flex>

            <Container pt='5'>
                <Text fontSize='lg'>
                    Backwall Records is a dynamic and user-friendly website designed with a mobile-first approach. The homepage features rotating hero images, creating an engaging visual experience. A convenient hamburger menu houses all the site's pages, including options for light and dark mode, as well as a hidden admin login.
                </Text>
                <br />
                <Text fontSize='lg'>
                    The "Bands" page showcases various bands with images, allowing users to click on a band's picture to access their detailed information. On the band details page, you'll find a band photo, bio, a Spotify player with songs, and more band images for a comprehensive look at the artist.
                </Text>
                <br />
                <Text fontSize='lg'>
                    Backwall Records boasts an event calendar that syncs with Google, enabling users to subscribe to events of interest. The "Merch" page offers a wide selection of merchandise available for the bands, which can be easily filtered by category. Product details can be viewed by clicking on the item, and you can add items to your cart, with the cart icon appearing in the header.
                </Text>
                <br />
                <Text fontSize='lg'>
                    In the cart, you can adjust item quantities or remove products as needed. When you're ready to check out, you'll be redirected to the Stripe checkout page. Here, you can review your selected items and enter payment details, with the option to save your information for future one-click purchases.
                </Text>
                <br />
                <Text fontSize='lg'>
                    Backwall Records also features a "Contact" page to get in touch with the record label, powered by Herotofu. The website includes a "Blog" page displaying articles as pictures with titles and dates. Clicking on a picture allows you to read the full post. For administrators, there's an "Admin" page for adding new hero photos, blog posts, and band images, ensuring the website stays up-to-date and engaging.
                </Text>
            </Container>
        </>
    )
}
