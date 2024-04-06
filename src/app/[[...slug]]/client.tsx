"use client";

import React from "react";
import dynamic from "next/dynamic";
import { MedusaProvider } from "medusa-react";
import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = dynamic(() => import("../../page"), { ssr: false });

export function ClientOnly() {
    return (
        <MedusaProvider
            queryClientProviderProps={{ client: queryClient }}
            baseUrl="http://localhost:9000"
        >
            <App/>
        </MedusaProvider>
    )
}
