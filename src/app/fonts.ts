import { Rock_Salt, Bebas_Neue } from "next/font/google";


export const rockSalt = Rock_Salt({
    subsets: ["latin"],
    display: "swap",
    weight: "400",
});

export const bebasNeue = Bebas_Neue({
    subsets: ["latin"],
    weight: "400",
    display: "auto",
    variable: "--font-bebas"
});
