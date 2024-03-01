// MyButton.tsx
import { extendVariants, Chip } from "@nextui-org/react";

const CustomChip = extendVariants(Chip, {
    variants: {
        color: {
            frontend: {
                content: "font-semibold",
                base: "bg-orange-500 border-orange-300 border-1 bg-opacity-10 py-3 px-1 text-orange-500",
            },
            noCode: {
                content: "font-semibold",
                base: "bg-purple-500 border-purple-300 border-1 bg-opacity-10 py-3 px-1 text-purple-500",
            },
            uiDesign: {
                content: "font-semibold",
                base: "bg-cyan-500 border-cyan-300 border-1 bg-opacity-10 py-3 px-1 text-cyan-500",
            },
            software: {
                content: "font-semibold",
                base: "bg-teal-500 border-teal-300 border-1 bg-opacity-10 py-3 px-1 text-teal-500",
            },
        },
    },
});

export default CustomChip;
