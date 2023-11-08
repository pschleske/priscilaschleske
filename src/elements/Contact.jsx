import React, { useState } from "react";
import { Heading, Box, Flex, Button, Input, Textarea, FormLabel, Text } from "@chakra-ui/react";

import { BackButton } from "../components/BackButton";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/c880cce0-7c56-11ee-97b0-f5224e9a6b83";

export const Contact = () => {

    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();

        const inputs = e.target.elements;
        const data = {};

        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].name) {
                data[inputs[i].name] = inputs[i].value;
            }
        }

        fetch(FORM_ENDPOINT, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Form response was not ok');
                }

                setSubmitted(true);
            })
            .catch((err) => {
                // Submit the form manually
                e.target.submit();
            });
    };

    if (submitted) {
        return (
            <>
                <Flex alignItems='center' flexDirection='column' py='8'>
                    <Heading size='2xl' color='gray.200'>Thank you!</Heading>
                    <Text color='gray.200' size='md'>I'll be in touch soon.</Text>
                </Flex>
                {/* <BackButton /> */}
            </>
        );
    }

    return (
        <>
            <Heading size='2xl' align='center' pt='2' color='gray.200'>Contact</Heading>
            {/* <BackButton /> */}

            <Box py='2' my='4'>
                <Heading size='lg' align='center' color='gray.200'> Let's work together! </Heading>
                <br />
                <form
                    action={FORM_ENDPOINT}
                    onSubmit={handleSubmit}
                    method="POST"
                >
                    <Flex flexDirection='column' alignItems='center' >
                        <Box w='80%'>
                            <FormLabel color='gray.200'>Your Name</FormLabel>
                            <Input variant='outline' color='gray.200' type="text" name="name" required />
                        </Box>

                        <Box w='80%'>
                            <FormLabel color='gray.200'>Email</FormLabel>
                            <Input variant='outline' color='gray.200' type="email" name="email" required />
                        </Box>

                        <Box w='80%'>
                            <FormLabel color='gray.200'>Message</FormLabel>
                            <Textarea variant='outline' color='gray.200' placeholder="Your message" name="message" required />
                        </Box>
                        <br />
                        <Box>
                            {/* <button type="submit"> Send message </button> */}
                            <Button variant='outline' colorScheme='whatsapp' type="submit"> Send </Button>
                        </Box>
                        <br />
                    </Flex>
                </form>
            </Box>
        </>
    );
}
