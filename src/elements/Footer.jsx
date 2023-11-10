import { BsLinkedin, BsGithub, BsInstagram, BsEnvelopeAt } from "react-icons/bs";
import { Flex, Box, Container, Spacer, Text } from "@chakra-ui/react"

export const Footer = () => {

    const iconSize = "2em";

    return (
        <>
            {/* <Flex flex='start' direction='column' h='300' justifyContent='center' px='75'> */}
            <Flex flex='start' direction='column' h='300' justifyContent='center' px={{ base: '12', md: '62' }}>
                <Flex >
                    <Box px='10'>
                        <a href='https://www.linkedin.com/in/priscila-schleske/' target="_blank" rel="noopener noreferrer">
                            <BsLinkedin style={{ fontSize: iconSize }} />
                        </a>
                    </Box>

                    <Box pr='5'>
                        <a href='https://github.com/pschleske' target="_blank" rel="noopener noreferrer">
                            <BsGithub style={{ fontSize: iconSize }} />
                        </a>
                    </Box>

                    <Box px='5'>
                        <a target="_blank" rel="noopener noreferrer">
                            <BsInstagram style={{ fontSize: iconSize }} />
                        </a>
                    </Box>
                </Flex>
                <Flex direction='column' px='10' >
                    <Box py='5' >
                        <Text>priscilaschleske@gmail.com</Text>
                    </Box>

                    <Box >
                        <Text>Utah</Text>
                    </Box>
                </Flex>

            </Flex>

            <Text color='gray' fontSize='xs' >
                Copyright © 2023 Priscila Schleske. All rights reserved.
            </Text>
        </>
    )
}
