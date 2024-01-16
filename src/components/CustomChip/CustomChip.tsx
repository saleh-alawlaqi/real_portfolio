// MyButton.tsx
import { extendVariants, Chip } from "@nextui-org/react";

const CustomChip = extendVariants(Chip, {
    variants: {
        color: {
            frontend: {
                content: "font-semibold",
                base: "border-orange-500 border-3 py-4 px-4 text-orange-500",
            },
            noCode: {
                content: "font-semibold",
                base: "border-purple-500 border-3 py-4 px-4 text-purple-500",
            },
            fullStack: {
                content: "font-semibold",
                base: "border-cyan-500 border-3 py-4 px-4 text-cyan-500",
            },
            software: {
                content: "font-semibold",
                base: "border-teal-500 border-3 py-4 px-4 text-teal-500",
            },
        },
    },
});

export default CustomChip;
