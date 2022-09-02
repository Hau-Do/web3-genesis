import React from 'react';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline, useMediaQuery, ThemeOptions } from '@mui/material';

import dynamic from 'next/dynamic';

import dark from 'theme/dark';
import createEmotionCache from '../utils/createEmotionCache';

import { PolkadotProvider } from 'contexts/Polkadot';

import 'assets/styles/index.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const clientSideEmotionCache = createEmotionCache();

const Header = dynamic(() => import('components/Header'), { ssr: false });
const MobilePage = dynamic(() => import('components/MobilePage'), { ssr: false });

const CheckMobile = (props: any) => {
    const { children } = props;
    const isMobile = useMediaQuery((theme: ThemeOptions) => theme.breakpoints.down('sm'));

    return isMobile ? <MobilePage /> : children;
};

const MyApp = (props: any) => {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

    return (
        <PolkadotProvider>
            <CacheProvider value={emotionCache}>
                <ThemeProvider theme={dark}>
                    <CssBaseline />
                    <Header />
                    <CheckMobile>
                        <Component {...pageProps} />
                    </CheckMobile>
                </ThemeProvider>
            </CacheProvider>
        </PolkadotProvider>
    );
};

export default MyApp;
