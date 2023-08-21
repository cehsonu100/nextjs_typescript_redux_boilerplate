'use client'

import { Provider } from "react-redux";
import { store } from "@/store/store";
import React from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/utils/theme";

export const Providers = ({children}: {children: React.ReactNode}) => {
    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                {children}
            </Provider>
        </ThemeProvider>
    )
}