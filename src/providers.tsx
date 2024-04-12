'use client'

import { MedusaProvider } from "medusa-react";
import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();
//@ts-ignore
export function MedusaProviders({ children }) {
    return (
        <MedusaProvider 
            baseUrl="http://localhost:9000" 
            queryClientProviderProps={{ client: queryClient }}
        >
            {children}
        </MedusaProvider>
        
    )
}
