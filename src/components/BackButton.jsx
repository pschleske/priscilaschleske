import { useNavigate } from "react-router-dom";
import { BsArrowLeft, BsUnindent } from "react-icons/bs"
import { Circle, Text, Button } from "@chakra-ui/react";

export const BackButton = () => {
    const navigate = useNavigate();

    const iconSize = "2em";

    return (
        <>
            <Button onClick={() => navigate(-1)} bg='transparent' color='#000000' _hover={{ color: "#000000" }}>
                <BsUnindent style={{ fontSize: iconSize }} /> <Text fontSize='xl'>Back</Text>
            </Button>
        </>
    )
}
