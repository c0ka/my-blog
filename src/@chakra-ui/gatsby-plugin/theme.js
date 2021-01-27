import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
    layerStyles: {
        base: {
            bg: "gray.50",
            boader: "2px solid",
            boaderColor: "gray.500",
        },
        selected: {
            bg: "teal.500",
            color: "teal.700",
            boaderColor: "orange.500",
        }
    },
})


export default customTheme;
