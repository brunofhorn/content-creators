import React from "react";

import { ISvg } from "@/interfaces/svg";

export default function Camera({ color = "#000", width = 800, height = 800 }: ISvg) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 24 24">
            <path
                fill={color}
                d="M18 19.25H6a2.75 2.75 0 01-2.75-2.75v-6A2.75 2.75 0 016 7.75h.6L7.78 6a2.76 2.76 0 012.29-1.22h3.86A2.76 2.76 0 0116.22 6l1.18 1.75h.6a2.75 2.75 0 012.75 2.75v6A2.75 2.75 0 0118 19.25zm-12-10a1.25 1.25 0 00-1.25 1.25v6A1.25 1.25 0 006 17.75h12a1.25 1.25 0 001.25-1.25v-6A1.25 1.25 0 0018 9.25h-1a.75.75 0 01-.62-.33L15 6.81a1.24 1.24 0 00-1-.56h-3.93a1.24 1.24 0 00-1 .56L7.62 8.92a.75.75 0 01-.62.33H6z"
            ></path>
            <path
                fill={color}
                d="M12 16.25A3.25 3.25 0 1115.25 13 3.26 3.26 0 0112 16.25zm0-5A1.75 1.75 0 1013.75 13 1.76 1.76 0 0012 11.25z"
            ></path>
        </svg>
    );
}
