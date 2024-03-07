// MyButton.tsx
import { extendVariants, Chip } from "@nextui-org/react";

const CustomChip = extendVariants(Chip, {
    variants: {
        color: {
            orange: {
                content: "font-semibold",
                base: "bg-orange-500 border-orange-300 border-1 bg-opacity-5 py-3 px-1 text-orange-500",
            },
            purple: {
                content: "font-semibold",
                base: "bg-purple-500 border-purple-300 border-1 bg-opacity-5 py-3 px-1 text-purple-500",
            },
            cyan: {
                content: "font-semibold",
                base: "bg-cyan-500 border-cyan-300 border-1 bg-opacity-5 py-3 px-1 text-cyan-500",
            },
            teal: {
                content: "font-semibold",
                base: "bg-teal-500 border-teal-300 border-1 bg-opacity-5 py-3 px-1 text-teal-500",
            },
            green: {
                content: "font-semibold",
                base: "bg-green-500 border-green-300 border-1 bg-opacity-5 py-3 px-1 text-green-500",
            },
            red: {
                content: "font-semibold",
                base: "bg-red-500 border-red-300 border-1 bg-opacity-5 py-3 px-1 text-red-500",
            },
            blue: {
                content: "font-semibold",
                base: "bg-blue-500 border-blue-300 border-1 bg-opacity-5 py-3 px-1 text-blue-500",
            },
        },
    },
});

export default CustomChip;
