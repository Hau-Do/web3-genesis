import { Fragment, useState } from 'react';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import ArrowIn from 'assets/img/icons/arrow-in.svg';
import ArrowInGray from 'assets/img/icons/arrow-in-gray.svg';

import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

const Detail = () => {
    const [activeTab, setActiveTab] = useState('one');

    const handleActiveTabChange = (event: React.SyntheticEvent, newTab: string) => {
        setActiveTab(newTab);
    };

    return (
        <Fragment>
            <Box
                sx={{
                    height: '100vh',
                    backgroundImage: `url("${require('assets/img/world/create-bg.png').default.src}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                    position: 'relative',
                    backgroundPositionY: 0,
                    pt: 20,
                    '&:before': {
                        content: "' '",
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: 300,
                        backgroundImage: 'linear-gradient(180deg, rgba(26, 26, 31, 0) 0%, #1A1A1F 100%)',
                        zIndex: 13
                    }
                }}
            >
                <Container
                    sx={{
                        position: 'relative',
                        height: '100%',
                        zIndex: 1200
                    }}
                >
                    <Grid container sx={{ height: '100%' }}>
                        <Grid item xs={12} sm={6}>
                            <Stack justifyContent="space-around" sx={{ height: '100%' }}>
                                <Stack />
                                <Stack spacing={2}>
                                    <Stack>
                                        <Typography variant="h3" fontWeight="bold">
                                            Echocore:
                                        </Typography>
                                        <Typography variant="h3" fontWeight="bold" color="#6DCCBC">
                                            Enter the Quantum Metaverse
                                        </Typography>
                                    </Stack>
                                    <Typography color="textSecondary">
                                        At SCI Headquarters a remarkable device has been invented. One that lets you wirelessly 
                                        synchronize your brain waves to a quantum computer. Enter a world that will feel as real as our own.
                                        Because really: what could go wrong?
                                    </Typography>
                                    <Button
                                        disableRipple
                                        disableFocusRipple
                                        disableTouchRipple
                                        endIcon={<Box component="img" src={ArrowIn.src} alt="Arrow In" />}
                                        sx={{
                                            fontWeight: 'bold',
                                            alignSelf: 'flex-start',
                                            bgcolor: 'transparent !important',
                                            padding: 0,
                                            py: 4
                                        }}
                                    >
                                        Read Lore
                                    </Button>
                                </Stack>
                                <Stack direction="row" spacing={3}>
                                    <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
                                        <Box
                                            component="img"
                                            src={require('assets/img/icons/discord.svg').default.src}
                                        />
                                        <Typography color="textSecondary">1, 100</Typography>
                                    </Stack>
                                    <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
                                        <Box
                                            component="img"
                                            src={require('assets/img/icons/telegram.svg').default.src}
                                        />
                                        <Typography color="textSecondary">900</Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
                <List
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        right: 0,
                        px: 1,
                        py: 2,
                        borderTopLeftRadius: 16,
                        borderBottomLeftRadius: 16,
                        background: 'linear-gradient(89.94deg, #39393E 7.83%, #3C3B47 99.93%)'
                    }}
                >
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar
                                variant="rounded"
                                sx={{
                                    width: 76,
                                    height: 76
                                }}
                                src={require('assets/img/world/list01.png').default.src}
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <Stack direction="row" spacing={1} px={2}>
                                    <Typography color="#30B38C" fontSize={28} fontWeight={700}>
                                        01
                                    </Typography>
                                    <Typography fontSize={28}>Pre-Season</Typography>
                                </Stack>
                            }
                            secondary="We learn about the Echocore device"
                            secondaryTypographyProps={{
                                sx: {
                                    px: 2
                                }
                            }}
                        />
                        <IconButton color="primary" sx={{ ml: 3 }}>
                            <KeyboardArrowRightRoundedIcon />
                        </IconButton>
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar
                                variant="rounded"
                                sx={{
                                    width: 76,
                                    height: 76
                                }}
                                src={require('assets/img/world/list02.png').default.src}
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <Stack direction="row" spacing={1} px={2}>
                                    <Typography color="#9F73E6" fontSize={28} fontWeight={700}>
                                        02
                                    </Typography>
                                    <Typography fontSize={28}>Origins: Boards</Typography>
                                </Stack>
                            }
                            secondary="Ian Sidell, looking back"
                            secondaryTypographyProps={{
                                sx: {
                                    px: 2
                                }
                            }}
                        />
                        <IconButton color="primary" sx={{ ml: 3 }}>
                            <KeyboardArrowRightRoundedIcon />
                        </IconButton>
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar
                                variant="rounded"
                                sx={{
                                    width: 76,
                                    height: 76
                                }}
                                src={require('assets/img/world/list03.png').default.src}
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <Stack direction="row" spacing={1} px={2}>
                                    <Typography color="#F6DE04" fontSize={28} fontWeight={700}>
                                        03
                                    </Typography>
                                    <Typography fontSize={28}>Origins: SCI</Typography>
                                </Stack>
                            }
                            secondary="A corporate history comes to life."
                            secondaryTypographyProps={{
                                sx: {
                                    px: 2
                                }
                            }}
                        />
                        <IconButton color="primary" sx={{ ml: 3 }}>
                            <KeyboardArrowRightRoundedIcon />
                        </IconButton>
                    </ListItem>
                </List>
            </Box>
            <Container sx={{ pb: 11 }}>
                <Typography variant="h3" fontWeight="bold" textAlign="center" sx={{ py: 6 }}>
                    Play The Story
                </Typography>
                <Box
                    sx={{
                        '& .swiper-button-prev:after, & .swiper-button-next:after': {
                            fontSize: 22,
                            color: '#fff'
                        },
                        '& .swiper-pagination-bullet': {
                            height: 2,
                            borderRadius: 1,
                            width: 40,
                            background: '#DBDBDB',
                            '&.swiper-pagination-bullet-active': {
                                bgcolor: 'primary.main'
                            }
                        }
                    }}
                >
                    <Swiper
                        grabCursor
                        centeredSlides
                        slidesPerView={1.7}
                        effect={'coverflow'}
                        initialSlide={2}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        pagination={{
                            clickable: true
                        }}
                        navigation={{
                            enabled: true
                        }}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 75,
                            depth: 50,
                            modifier: 6,
                            slideShadows: true
                        }}
                    >
                        <SwiperSlide>
                            <Card sx={{ lineHeight: 0, mb: 8 }}>
                                <Box
                                    component="img"
                                    sx={{ width: '100%' }}
                                    src={require('assets/img/world/slide01.png').default.src}
                                />
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card sx={{ lineHeight: 0, mb: 8 }}>
                                <Box
                                    component="img"
                                    sx={{ width: '100%' }}
                                    src={require('assets/img/world/slide02.png').default.src}
                                />
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card sx={{ lineHeight: 0, mb: 8, position: 'relative' }}>
                                <Box
                                    component="img"
                                    sx={{ width: '100%' }}
                                    src={require('assets/img/world/slide03.png').default.src}
                                />
                                <Stack
                                    component={CardContent}
                                    justifyContent="space-between"
                                    position="absolute"
                                    width="100%"
                                    height="100%"
                                    boxSizing="border-box"
                                    top={0}
                                    left={0}
                                >
                                    <Chip sx={{ alignSelf: 'flex-start' }} label="Design" />
                                    <Card
                                        elevation={0}
                                        sx={{
                                            bgcolor: 'rgba(0, 0, 0, .8)'
                                        }}
                                    >
                                        <CardContent>
                                            <Stack alignItems="center" spacing={1}>
                                                <Typography variant="h6" color="textSecondary" fontSize={18}>
                                                    Pre-Season
                                                </Typography>
                                                <Typography variant="h5" fontSize={24}>
                                                    An Unusual Device Is Revealed
                                                </Typography>
                                                <Typography
                                                    color="textSecondary"
                                                    textAlign="center"
                                                    fontSize={14}
                                                    fontWeight={400}
                                                >
                                                    The Echocore Device is revolutionary. It promises to wirelessly synchronize your brainwaves
                                                    to a quantum computer. Be prepared to enter a Quantum Metaverse. Fact? Fiction? Who knows where
                                                    the line between reality and virtuality ends.

                                                </Typography>
                                                <Stack direction="row" spacing={4} pt={2} pb={1}>
                                                     <Button size="large" variant="contained">
                                                         <a href="https://echocore.io" target="_blank" rel="noreferrer" style={{textDecoration:"none"}}>
                                                         Experience Story
                                                         </a>
                                                    </Button>
                                                     <Button size="large" variant="outlined">
                                                       <a href="https://magiceden.io/marketplace/ecog" target="_blank" rel="noreferrer" style={{textDecoration:"none"}}>
                                                            Market
                                                        </a>
                                                    </Button>
                                                </Stack>
                                            </Stack>
                                        </CardContent>
                                    </Card>
                                </Stack>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card sx={{ lineHeight: 0, mb: 8 }}>
                                <Box
                                    component="img"
                                    sx={{ width: '100%' }}
                                    src={require('assets/img/world/slide04.png').default.src}
                                />
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card sx={{ lineHeight: 0, mb: 8 }}>
                                <Box
                                    component="img"
                                    sx={{ width: '100%' }}
                                    src={require('assets/img/world/slide05.png').default.src}
                                />
                            </Card>
                        </SwiperSlide>
                    </Swiper>
                </Box>
            </Container>
            <Container sx={{ py: 11 }}>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={4}>
                    <Typography variant="h3" fontWeight={700}>
                        Explore: Characters
                    </Typography>
                    <Button
                        sx={{
                            textTransform: 'none'
                        }}
                        variant="outlined"
                        color="inherit"
                        size="large"
                        endIcon={<ArrowRightAltRoundedIcon />}
                    >
                        Submit Tribute
                    </Button>
                </Stack>
                <Tabs value={activeTab} onChange={handleActiveTabChange} indicatorColor="primary" textColor="inherit">
                    <Tab value="one" label="Personas" />
                    <Tab value="two" label="Locations" />
                    <Tab value="three" label="Items" />
                </Tabs>
                <Grid container spacing={2.75} sx={{ mt: 4 }}>
                    <Grid item xs={12} sm={4}>
                        <Card>
                            <CardContent>
                                <Stack spacing={3}>
                                    <Box
                                        component="img"
                                        borderRadius={1}
                                        src={require('assets/img/home/characters03.png').default.src}
                                    />
                                    <Stack>
                                        <Typography variant="h5">Ian Sidell</Typography>
                                        <Stack direction="row" justifyContent="flex-end">
                                           
                                             <Link underline="hover" key="1" color="inherit" href="/world/dark-knight">
                                                <Box component="img" src={ArrowInGray.src} alt="Arrow In" />
                                            </Link>
                                            
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card>
                            <CardContent>
                                <Stack spacing={3}>
                                    <Box
                                        component="img"
                                        borderRadius={1}
                                        src={require('assets/img/home/characters04.png').default.src}
                                    />
                                    <Stack>
                                        <Typography variant="h5">Joan Sidell</Typography>
                                        <Stack direction="row" justifyContent="flex-end">
                                            <Box component="img" src={ArrowInGray.src} alt="Arrow In" />
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card>
                            <CardContent>
                                <Stack spacing={3}>
                                    <Box
                                        component="img"
                                        borderRadius={1}
                                        src={require('assets/img/home/characters05.png').default.src}
                                    />
                                    <Stack>
                                        <Typography variant="h5">Grant Sidell</Typography>
                                        <Stack direction="row" justifyContent="flex-end">
                                            <Box component="img" src={ArrowInGray.src} alt="Arrow In" />
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
            <Container sx={{ pb: 11 }}>
                <Typography variant="h3" fontWeight={700} mb={4}>
                    Earn points
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3.75 }}>
                    <Card elevation={0} sx={{ border: '6px solid #32343D', borderRadius: '12px' }}>
                        <CardContent>
                            <Grid container>
                                <Grid item xs={2}>
                                    <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                                        <Box
                                            sx={{
                                                width: 142,
                                                height: 142,
                                                backgroundImage: `url(${
                                                    require('assets/img/icons/star1.svg').default.src
                                                })`,
                                                backgroundSize: 'contain',
                                                backgroundPosition: 'center',
                                                backgroundRepeat: 'no-repeat',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    width: 142,
                                                    height: 142,
                                                    backgroundImage: `url(${
                                                        require('assets/img/icons/star2.svg').default.src
                                                    })`,
                                                    backgroundSize: '126px 126px',
                                                    backgroundPosition: 'center',
                                                    backgroundRepeat: 'no-repeat',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center'
                                                }}
                                            >
                                                <Box
                                                    component="img"
                                                    src={require('assets/img/home/paint.png').default.src}
                                                    alt="Paint"
                                                />
                                            </Box>
                                        </Box>
                                    </Stack>
                                </Grid>
                                <Grid item xs={7}>
                                    <Stack spacing={2}>
                                        <Typography variant="h5">SCI Headquarters Logo</Typography>
                                        <Stack direction="row" spacing={2}>
                                            <Chip
                                                label="Design"
                                                variant="outlined"
                                                icon={
                                                    <Box
                                                        component="img"
                                                        src={require('assets/img/home/paint.png').default.src}
                                                        alt="Paint"
                                                        sx={{
                                                            width: 16,
                                                            height: 16
                                                        }}
                                                    />
                                                }
                                            />
                                         
                                        </Stack>
                                        <Button
                                            size="large"
                                            endIcon={<ArrowRightAltRoundedIcon />}
                                            sx={{
                                                mt: '24px !important',
                                                alignSelf: 'flex-start',
                                                fontSize: 16
                                            }}
                                        >
                                            Discover
                                        </Button>
                                    </Stack>
                                </Grid>
                                <Grid item xs={3}>
                                    <Stack alignItems="flex-end" spacing={1} mr={2}>
                                        <Stack
                                            direction="row"
                                            sx={{
                                                padding: '8px 16px',
                                                bgcolor: 'rgba(82, 85, 89, 0.2)',
                                                borderRadius: 1
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    minWidth: 28,
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center'
                                                }}
                                            >
                                                <Box
                                                    component="img"
                                                    src={require('assets/img/icons/cash.svg').default.src}
                                                    alt="Cash"
                                                />
                                            </Box>
                                            <Typography sx={{ px: 1 }}>
                                                <Typography component="span" color="#FE9D33" sx={{ mr: 0.5 }}>
                                                    9.00
                                                </Typography>
                                                <Typography component="span" color="textSecondary">
                                                    Tokens
                                                </Typography>
                                            </Typography>
                                        </Stack>
                                        <Typography color="textSecondary">9 days ago by Echocore</Typography>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <Card elevation={0} sx={{ border: '6px solid #32343D', borderRadius: '12px' }}>
                        <CardContent>
                            <Grid container>
                                <Grid item xs={2}>
                                    <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                                        <Box
                                            sx={{
                                                width: 142,
                                                height: 142,
                                                backgroundImage: `url(${
                                                    require('assets/img/icons/star1.svg').default.src
                                                })`,
                                                backgroundSize: 'contain',
                                                backgroundPosition: 'center',
                                                backgroundRepeat: 'no-repeat',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    width: 142,
                                                    height: 142,
                                                    backgroundImage: `url(${
                                                        require('assets/img/icons/star2.svg').default.src
                                                    })`,
                                                    backgroundSize: '126px 126px',
                                                    backgroundPosition: 'center',
                                                    backgroundRepeat: 'no-repeat',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center'
                                                }}
                                            >
                                                <Box
                                                    component="img"
                                                    src={require('assets/img/home/movie.png').default.src}
                                                    alt="Movie"
                                                />
                                            </Box>
                                        </Box>
                                    </Stack>
                                </Grid>
                                <Grid item xs={7}>
                                    <Stack spacing={2}>
                                        <Typography variant="h5">Memo About New Technology</Typography>
                                        <Stack direction="row" spacing={2}>
                                            <Chip
                                                label="Design"
                                                variant="outlined"
                                                icon={
                                                    <Box
                                                        component="img"
                                                        src={require('assets/img/home/paint.png').default.src}
                                                        alt="Paint"
                                                        sx={{
                                                            width: 16,
                                                            height: 16
                                                        }}
                                                    />
                                                }
                                            />
                                           
                                        </Stack>
                                        <Button
                                            size="large"
                                            endIcon={<ArrowRightAltRoundedIcon />}
                                            sx={{
                                                mt: '24px !important',
                                                alignSelf: 'flex-start',
                                                fontSize: 16
                                            }}
                                        >
                                            Discover
                                        </Button>
                                    </Stack>
                                </Grid>
                                <Grid item xs={3}>
                                    <Stack alignItems="flex-end" spacing={1} mr={2}>
                                        <Stack
                                            direction="row"
                                            sx={{
                                                padding: '8px 16px',
                                                bgcolor: 'rgba(82, 85, 89, 0.2)',
                                                borderRadius: 1
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    minWidth: 28,
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center'
                                                }}
                                            >
                                                <Box
                                                    component="img"
                                                    src={require('assets/img/icons/cash.svg').default.src}
                                                    alt="Cash"
                                                />
                                            </Box>
                                            <Typography sx={{ px: 1 }}>
                                                <Typography component="span" color="#FE9D33" sx={{ mr: 0.5 }}>
                                                    3.00
                                                </Typography>
                                                <Typography component="span" color="textSecondary">
                                                    Tokens
                                                </Typography>
                                            </Typography>
                                        </Stack>
                                        <Typography color="textSecondary">12 days ago by Echocore</Typography>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <Card elevation={0} sx={{ border: '6px solid #32343D', borderRadius: '12px' }}>
                        <CardContent>
                            <Grid container>
                                <Grid item xs={2}>
                                    <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                                        <Box
                                            sx={{
                                                width: 142,
                                                height: 142,
                                                backgroundImage: `url(${
                                                    require('assets/img/icons/star1.svg').default.src
                                                })`,
                                                backgroundSize: 'contain',
                                                backgroundPosition: 'center',
                                                backgroundRepeat: 'no-repeat',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    width: 142,
                                                    height: 142,
                                                    backgroundImage: `url(${
                                                        require('assets/img/icons/star2.svg').default.src
                                                    })`,
                                                    backgroundSize: '126px 126px',
                                                    backgroundPosition: 'center',
                                                    backgroundRepeat: 'no-repeat',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center'
                                                }}
                                            >
                                                <Box
                                                    component="img"
                                                    src={require('assets/img/home/document.png').default.src}
                                                    alt="Document"
                                                />
                                            </Box>
                                        </Box>
                                    </Stack>
                                </Grid>
                                <Grid item xs={7}>
                                    <Stack spacing={2}>
                                        <Typography variant="h5">A Letter to Her Son</Typography>
                                        <Stack direction="row" spacing={2}>
                                            <Chip
                                                label="Writers"
                                                variant="outlined"
                                                icon={
                                                    <Box
                                                        component="img"
                                                        src={require('assets/img/home/paint.png').default.src}
                                                        alt="Paint"
                                                        sx={{
                                                            width: 16,
                                                            height: 16
                                                        }}
                                                    />
                                                }
                                            />
                                           
                                        </Stack>
                                        <Button
                                            size="large"
                                            endIcon={<ArrowRightAltRoundedIcon />}
                                            sx={{
                                                mt: '24px !important',
                                                alignSelf: 'flex-start',
                                                fontSize: 16
                                            }}
                                        >
                                            Discover
                                        </Button>
                                    </Stack>
                                </Grid>
                                <Grid item xs={3}>
                                    <Stack alignItems="flex-end" spacing={1} mr={2}>
                                        <Stack
                                            direction="row"
                                            sx={{
                                                padding: '8px 16px',
                                                bgcolor: 'rgba(82, 85, 89, 0.2)',
                                                borderRadius: 1
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    minWidth: 28,
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center'
                                                }}
                                            >
                                                <Box
                                                    component="img"
                                                    src={require('assets/img/icons/cash.svg').default.src}
                                                    alt="Cash"
                                                />
                                            </Box>
                                            <Typography sx={{ px: 1 }}>
                                                <Typography component="span" color="#FE9D33" sx={{ mr: 0.5 }}>
                                                    5.00
                                                </Typography>
                                                <Typography component="span" color="textSecondary">
                                                    Tokens
                                                </Typography>
                                            </Typography>
                                        </Stack>
                                        <Typography color="textSecondary">14 days ago by Echocore</Typography>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <Stack alignItems="center">
                        <Button
                            endIcon={<Box component="img" src={ArrowIn.src} alt="Arrow In" />}
                            sx={{ fontWeight: 'bold' }}
                        >
                            Load More
                        </Button>
                    </Stack>
                </Box>
            </Container>
        </Fragment>
    );
};

export default Detail;
