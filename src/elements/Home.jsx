import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Box, Container, Flex, Heading, Text, useDisclosure, Modal, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, ModalOverlay } from '@chakra-ui/react'

import { Contact } from './Contact'

export const Home = () => {
    const navigate = useNavigate();

    // const [showMore, setShowMore] = useState(true);

    // const toggleShowMore = () => {
    //     setShowMore(!showMore);
    // };

    // useEffect(() => {
    //     const isMobile = window.innerWidth <= 768;
    //     setShowMore(false);
    // }, []);

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
            <div className="flex flex-col md:flex-row">

                <div className="py-8 px-8 md:py-20 md:px-24 w-screen md:w-11/12 mx-auto">
                    {/* <div className="mx-4 w-full"> */}

                    <h2 className="text-4xl md:text-5xl font-black">Priscila Schleske</h2>

                    <h2 className="text-2xl md:text-2xl font-extrabold">Software Developer</h2>

                    <p className="pt-4 md:pt-8 text-md">
                        I'm dedicated to delivering robust, scalable frontend products that elevate user experiences
                    </p>
                    <br />
                    {/* {showMore && ( */}
                    <>
                        <p className="text-md">
                            In 2017, my journey in the tech world began, and it introduced me to the fundamentals of SQL. Little did I know that SQL would not only enhance my daily job but also ignite my passion for coding. Fast forward to the present, and I've fully embraced coding as my calling. Along the way, I've had the privilege of creating websites for property management companies, record labels, and more.
                        </p>
                        <br />
                        <p className="text-md">
                            Today, my primary focus revolves around crafting tailored digital solutions, leading projects, and delivering exceptional products for clients. My expertise lies in developing refined web experiences, emphasizing responsiveness, dynamism, and stability.
                        </p>
                        <br />
                        <p className="text-md">
                            In my spare time, I dedicate myself to honing my coding skills. During the summer, you'll find me exploring the great outdoors, whether it's camping, paddleboarding, or rappelling. When winter comes, you'll spot me carving through the snow on the slopes with my snowboard.
                        </p>
                    </>
                    {/* )} */}
                    {/* <button onClick={toggleShowMore} className="bg-transparent text-sm text-gray-500">
                            {showMore ? "Show Less" : "Show More"}
                        </button> */}
                    {/* </div> */}
                </div>

                <div className="flex md:w-max items-center md:px-28 md:pt-6">
                    {/*  <div className="relative md:w-10/12 z-0"> */}
                    {/* 
                        <div className="absolute top-3 left-20 w-64 h-48 bg-violet-200 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob"></div>

                        <div className="absolute bottom-20 -right-20 w-56 h-72 bg-lime-400 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-2000"></div>

                        <div className="absolute -bottom-11 left-10 w-72 h-56 bg-cyan-200 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-4000"></div> */}

                    <div className="h-64 w-96 mx-5 md:w-max md:h-5/6 md:py-20 md:px-9 z-40 flex flex-col items-center justify-center rounded-lg shadow-xl ">
                        <div>
                            <h1 onClick={() => navigate('/bellwines')} className="text-6xl md:text-9xl font-black whitespace-nowrap">Bellwines</h1>
                            <h1 onClick={() => navigate('/backwall')} className="text-6xl md:text-9xl font-black whitespace-nowrap">Backwall</h1>
                            <h1 onClick={() => navigate('/yelpcamp')} className="text-6xl md:text-9xl font-black whitespace-nowrap">YelpCamp</h1>
                            <h1
                                onClick={() => {
                                    setOverlay(<OverlayOne />);
                                    onOpen();
                                }}
                                className="text-6xl md:text-9xl font-black whitespace-nowrap"
                            >
                                Contact
                            </h1>
                        </div>
                    </div>
                    {/* </div> */}
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
            </div>
        </>
    )
}
