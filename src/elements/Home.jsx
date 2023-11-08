import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Box, Container, Flex, Heading, Text, useDisclosure, Modal, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, ModalOverlay } from '@chakra-ui/react'

import { Contact } from './Contact'

export const Home = () => {
    const navigate = useNavigate();

    const [showMore, setShowMore] = useState(true);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    //overlay
    const OverlayOne = () => (
        <ModalOverlay
            // bg='blackAlpha.300'
            // backdropFilter='blur(10px) hue-rotate(90deg)'
            bg='none'
            backdropFilter='auto'
            backdropInvert='80%'
            backdropBlur='2px'
        />
    )

    //overlay states
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = useState(<OverlayOne />)

    const customStyles = {
        closeButton: {
            color: "green",
        },
        content: {
            backgroundColor: "#1a1a1a",
        }
    };

    return (
        <>
            {/* <img src={image} alt='picture-of-priscila' /> */}
            <Flex>
                <Box py="24" px="10" w={1700}>
                    <Box mx="20">
                        <Heading size="2xl">Priscila Schleske</Heading>
                        <Heading size="lg">Software Developer</Heading>
                        <Text pt="8" fontSize='lg'>
                            I'm dedicated to delivering robust, scalable frontend products that elevate user experiences
                        </Text>
                        <br />
                        {showMore && (
                            <>
                                <Text fontSize='lg'>
                                    In 2017, my journey in the tech world began, and it introduced me to the fundamentals of SQL. Little did I know that SQL would not only enhance my daily job but also ignite my passion for coding. Fast forward to the present, and I've fully embraced coding as my calling. Along the way, I've had the privilege of creating websites for property management companies, record labels, and more.
                                </Text>
                                <br />
                                <Text fontSize='lg'>
                                    Today, my primary focus revolves around crafting tailored digital solutions, leading projects, and delivering exceptional products for clients. My expertise lies in developing refined web experiences, emphasizing responsiveness, dynamism, and stability.
                                </Text>
                                <br />
                                <Text fontSize='lg'>
                                    In my spare time, I dedicate myself to honing my coding skills. During the summer, you'll find me exploring the great outdoors, whether it's camping, paddle boarding, or rappelling. When winter comes, you'll spot me carving through the snow on the slopes with my snowboard.
                                </Text>
                            </>
                        )}
                        <button onClick={toggleShowMore}>
                            {showMore ? "Show Less" : "Show More"}
                        </button>
                    </Box>
                </Box>

                <div className="w-full m-12 p-2 flex justify-between">
                    <div className="relative w-11/12 z-0">
                        <div className="absolute top-0 -left-5 w-80 h-72 bg-violet-200 rounded-full mix-blend-multiply filter blur-2xl opacity-80 animate-blob"></div>
                        <div className="absolute bottom-10 -right-1 w-72 h-72 bg-lime-400 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-2000"></div>
                        <div className="absolute bottom-12 -left-1 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-2xl opacity-80 animate-blob animation-delay-4000"></div>
                        <div className=" w-full h-full z-40 flex flex-col items-center justify-center rounded-lg">
                            <h1 onClick={() => navigate('/bellwines')} className="text-9xl font-black whitespace-nowrap">Bellwines</h1>
                            <h1 onClick={() => navigate('/backwall')} className="text-9xl font-black whitespace-nowrap">Backwall</h1>
                            <h1
                                onClick={() => {
                                    setOverlay(<OverlayOne />);
                                    onOpen();
                                }}
                                className="text-9xl font-black whitespace-nowrap"
                            >
                                Contact
                            </h1>
                        </div>
                    </div>
                </div>

                <Modal isCentered isOpen={isOpen} onClose={onClose} size='xl'>
                    {overlay}
                    <ModalContent css={customStyles.content}>
                        {/* <ModalHeader>Modal Title</ModalHeader> */}
                        <ModalCloseButton variant='ghost' css={customStyles.closeButton} />
                        <ModalBody>
                            {/* <Text>Custom backdrop filters!</Text> */}
                            <Contact />
                        </ModalBody>
                        <ModalFooter>
                            <Button variant='ghost' colorScheme='whatsapp' onClick={onClose}>Close</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Flex>
        </>
    )
}
