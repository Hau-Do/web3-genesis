import { Fragment, useState } from 'react';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Link from 'next/link';

import Hero from 'assets/img/home/hero.png';
import VReality from 'assets/img/home/v-reality.png';
import StoryBg from 'assets/img/home/story-bg.png';
import EarthTile from 'assets/img/home/earth-tile.png';
import BatGirl from 'assets/img/home/bat-girl.png';
import BatGirlS from 'assets/img/home/bat-girl-s.png';
import BatGirlBg from 'assets/img/home/bat-girl-bg.png';
import NarraioCard from 'assets/img/home/narraio-build.png';
import ArrowIn from 'assets/img/icons/arrow-in.svg';
import ArrowInGray from 'assets/img/icons/arrow-in-gray.svg';

import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';

const Character = () => {
    const [activeTab, setActiveTab] = useState('one');

    const handleActiveTabChange = (event: React.SyntheticEvent, newTab: string) => {
        setActiveTab(newTab);
    };
    return (
        <Fragment>
            <Box
                sx={{
                    height: '100vh',
                    backgroundImage: `url("${Hero.src}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                    position: 'relative',
                    pt: 20,
                    '&:before': {
                        content: "' '",
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: 300,
                       
                        zIndex: 13
                    },
                    '&:after': {
                        content: "' '",
                        position: 'absolute',
                       
                        left: 0,
                        right: 0,
                        bottom: 0,
                        top: 0,
                        zIndex: 10
                    }
                }}
            >
                <Container maxWidth="sm"  justifyContent="flex-start" sx={{ position: 'relative', zIndex: 11, height: '100%'}} >
                    <Stack alignItems="left" spacing={4} >
                        <Stack alignItems="left">
                            <Typography variant="h3" fontWeight="bold">
                                Own The World,
                            </Typography>
                            <Typography variant="h3" color="#6DCCBC" fontWeight="bold">
                                Play the story
                            </Typography>
                        </Stack>
                        <Typography  textAlign="left">
                            Narrio lets you build worlds - filled with characters and locations, items and story canon. 
                            Explore the Narraio Genesis world and learn more.
                        </Typography>
                         <Link underline="hover" key="1" color="inherit" href="/world/1234">
                            <Button variant="contained" size="large" sx={{ minWidth: (theme) => theme.spacing(18) }}>
                                Explore
                            </Button>
                        </Link>
                    </Stack>
                </Container>
                <Container sx={{ position: 'relative' }}>
                    <Stack direction="row" spacing={3} position="absolute" bottom={72} right={24} zIndex={1200}>
                        <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
                            <Box component="img" src={require('assets/img/icons/discord.svg').default.src} />
                            <Typography color="textSecondary">888</Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
                            <Box component="img" src={require('assets/img/icons/telegram.svg').default.src} />
                            <Typography color="textSecondary">200</Typography>
                        </Stack>
                    </Stack>
                </Container>
                
            </Box>
            <Container sx={{ py: 11 }}>
                <Card
                    sx={{
                        position: 'relative',
                        '&:before': {
                            content: "' '",
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundImage: `url(${StoryBg.src})`,
                            mixBlendMode: 'exclusion',
                            opacity: 0.6
                        }
                    }}
                >
                    <Stack alignItems="center" spacing={2.5} py="64px !important" zIndex={1200} position="relative">
                        <Typography variant="h3" fontWeight={700}>
                            Play The Story. Create . Earn
                        </Typography>
                        <Container maxWidth="sm">
                            <Typography color="textSecondary" textAlign="center">
                                Narraio is a revolution in game play, storytelling and media. Learn how Narraio works -
                                whether you’re a player, writer, artist or just a fan.
                            </Typography>
                        </Container>
                        <Link underline="hover" key="1" color="inherit" href="/about">
                        <Button
                            variant="contained"
                            size="large"
                            sx={{ mt: '46px !important', minWidth: (theme) => theme.spacing(18) }}
                        >
                             Explore World    
                        </Button>
                        </Link>
                    </Stack>
                </Card>
            </Container>
            <Container>
                <Typography variant="h3" fontWeight={700} mb={4}>
                    Experience The Story
                </Typography>
                <Grid container spacing={2.75}>
                    <Grid item xs={12} sm={6}>
                        <Card>
                            <CardContent component={Stack} spacing={2}>
                                <Box
                                    component="img"
                                    borderRadius={1}
                                    width="100%"
                                    src={require('assets/img/home/story01.png').default.src}
                                />
                                <Stack direction="row" justifyContent="space-between">
                                    <Typography variant="h5">Echocore</Typography>
                                    <Chip variant="filled" label="Graphic Novel" color="success" />
                                </Stack>
                                <Typography color="textSecondary">
                                    Synchronize your brain waves to the Echocore device and enter the Quantum Metaverse.
                                </Typography>
                                <Link underline="hover" key="1" color="inherit" href="/world/1234">
                                <Button
                                    variant="contained"
                                    size="large"
                                    sx={{
                                        alignSelf: 'flex-start',
                                        mt: '40px !important',
                                        minWidth: (theme) => theme.spacing(18)
                                    }}
                                >
                                    Explore World
                                </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card>
                            <CardContent component={Stack} spacing={2}>
                                <Box
                                    component="img"
                                    borderRadius={1}
                                    width="100%"
                                    src={require('assets/img/home/story02.png').default.src}
                                />
                                <Stack direction="row" justifyContent="space-between">
                                    <Typography variant="h5">Spiderman</Typography>
                                    <Chip variant="filled" label="Video" color="warning" />
                                </Stack>
                                <Typography color="textSecondary">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                </Typography>
                                <Button
                                    variant="contained"
                                    size="large"
                                    sx={{
                                        alignSelf: 'flex-start',
                                        mt: '40px !important',
                                        minWidth: (theme) => theme.spacing(18)
                                    }}
                                >
                                    Explore World
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
            <Container sx={{ py: 11 }}>
                <Card
                    sx={{
                        position: 'relative',
                        '&:before': {
                            content: "' '",
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundImage: `url(${EarthTile.src})`,
                            backgroundPositionX: 'right',
                            backgroundPositionY: 'bottom',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain',
                            opacity: 0.6
                        }
                    }}
                >
                    <Stack
                        alignItems="flex-start"
                        spacing={2.5}
                        padding="64px 44px !important"
                        zIndex={1200}
                        position="relative"
                    >
                        <Typography variant="h3" fontWeight={700}>
                            Create World
                        </Typography>
                        <Container maxWidth="sm" style={{ padding: 0 }}>
                            <Typography color="textSecondary">
                                Create your own world today. Get yourself a Narraio World Key, write your Canon, and ask
                                the community to help!
                            </Typography>
                        </Container>
                         <Link underline="hover" key="1" color="inherit" href="/create/world">
                            <Button
                                variant="contained"
                                size="large"
                                sx={{ mt: '46px !important', minWidth: (theme) => theme.spacing(18) }}
                            >
                                Create World
                            </Button>
                        </Link>
                    </Stack>
                </Card>
            </Container>
            <Container>
                <Typography variant="h3" fontWeight={700} mb={4}>
                    Top Tributes
                </Typography>
                <Grid container spacing={2.75}>
                    <Grid item xs={12} sm={6}>
                        <Stack spacing={2.75}>
                            <Card>
                                <CardContent>
                                    <Stack direction="row" spacing={1}>
                                        <CardMedia component="img" src={BatGirl.src} sx={{ width: 220 }} />
                                        <Stack sx={{ flexGrow: 1 }} justifyContent="space-between">
                                            <Stack direction="row" justifyContent="space-between">
                                                <Chip label="Playlist" sx={{ height: '100%' }} color="warning" />
                                                <Button
                                                    disabled
                                                    size="small"
                                                    component={IconButton}
                                                    variant="outlined"
                                                    sx={{ minWidth: 0, padding: 5 / 8 }}
                                                >
                                                    <FavoriteRoundedIcon fontSize="small" />
                                                </Button>
                                            </Stack>
                                            <Stack>
                                                <Typography variant="h6">
                                                    Ian Sidell - music from the 90s.
                                                </Typography>
                                                <Typography variant="caption" color="textSecondary">
                                                    Submitted by Monica Jell
                                                </Typography>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent>
                                    <Stack spacing={2}>
                                        <CardMedia component="img" src={BatGirlS.src} />
                                        <Stack sx={{ flexGrow: 1 }} spacing={2}>
                                            <Stack direction="row" justifyContent="space-between">
                                                <Chip label="Social Media Image" color="success" />
                                                <Button
                                                    disabled
                                                    size="small"
                                                    component={IconButton}
                                                    variant="outlined"
                                                    sx={{ minWidth: 0, padding: 5 / 8 }}
                                                >
                                                    <FavoriteRoundedIcon fontSize="small" />
                                                </Button>
                                            </Stack>
                                            <Stack>
                                                <Typography variant="h5">
                                                    Inspiring vibes: let's skate...Sidell-style
                                                </Typography>
                                                <Typography variant="caption" color="textSecondary">
                                                    Submitted by Dmytro Huz
                                                </Typography>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Stack spacing={2.75}>
                            <Card>
                                <CardContent>
                                    <Stack spacing={2}>
                                        <Typography variant="h5" color="textSecondary">
                                            Most Popular Creators
                                        </Typography>
                                        <Box
                                            sx={{
                                                height: '1px',
                                                opacity: 0.7,
                                                backgroundImage:
                                                    'linear-gradient(90deg, #959599 0%, rgba(149, 149, 153, 0) 100%)'
                                            }}
                                        />
                                    </Stack>
                                    <List>
                                        <ListItem disablePadding sx={{ my: 2 }}>
                                            <ListItemAvatar>
                                                <Avatar
                                                    variant="rounded"
                                                    src={require('assets/img/home/avatar01.png').default.src}
                                                    alt="Avatar01"
                                                    sx={{
                                                        width: 90,
                                                        height: 90
                                                    }}
                                                />
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary="RocketGurl"
                                                secondary="Graphic designer by day, space exoplorer by night."
                                                primaryTypographyProps={{
                                                    sx: {
                                                        px: 2,
                                                        fontSize: 20
                                                    }
                                                }}
                                                secondaryTypographyProps={{
                                                    sx: {
                                                        px: 2,
                                                        fontSize: 12
                                                    }
                                                }}
                                            />
                                            <Box component="img" src={ArrowIn.src} alt="Arrow In" />
                                        </ListItem>
                                        <ListItem disablePadding sx={{ my: 2 }}>
                                            <ListItemAvatar>
                                                <Avatar
                                                    variant="rounded"
                                                    src={require('assets/img/home/avatar02.png').default.src}
                                                    alt="Avatar02"
                                                    sx={{
                                                        width: 90,
                                                        height: 90
                                                    }}
                                                />
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary="John Patelo"
                                                secondary="Don't let my bored look fool you."
                                                primaryTypographyProps={{
                                                    sx: {
                                                        px: 2,
                                                        fontSize: 20
                                                    }
                                                }}
                                                secondaryTypographyProps={{
                                                    sx: {
                                                        px: 2,
                                                        fontSize: 12
                                                    }
                                                }}
                                            />
                                            <Box component="img" src={ArrowIn.src} alt="Arrow In" />
                                        </ListItem>
                                        <ListItem disablePadding sx={{ mt: 2 }}>
                                            <ListItemAvatar>
                                                <Avatar
                                                    variant="rounded"
                                                    src={require('assets/img/home/avatar03.png').default.src}
                                                    alt="Avatar03"
                                                    sx={{
                                                        width: 90,
                                                        height: 90
                                                    }}
                                                />
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary="DynamiteJoe"
                                                secondary="Hacker, NFT hodler, investor, world-explorer."
                                                primaryTypographyProps={{
                                                    sx: {
                                                        px: 2,
                                                        fontSize: 20
                                                    }
                                                }}
                                                secondaryTypographyProps={{
                                                    sx: {
                                                        px: 2,
                                                        fontSize: 12
                                                    }
                                                }}
                                            />
                                            <Box component="img" src={ArrowIn.src} alt="Arrow In" />
                                        </ListItem>
                                    </List>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent>
                                    <Stack direction="row" spacing={2}>
                                        <CardMedia component="img" src={BatGirlBg.src} sx={{ width: 220 }} />
                                        <Stack sx={{ flexGrow: 1 }} justifyContent="space-between">
                                            <Stack direction="row" justifyContent="space-between">
                                                <Chip
                                                    label="Social Media Image"
                                                    sx={{ height: '100%' }}
                                                    color="success"
                                                />
                                                <Button
                                                    disabled
                                                    size="small"
                                                    component={IconButton}
                                                    variant="outlined"
                                                    sx={{ minWidth: 0, padding: 5 / 8 }}
                                                >
                                                    <FavoriteRoundedIcon fontSize="small" />
                                                </Button>
                                            </Stack>
                                            <Stack>
                                                <Typography variant="h6">The Alchemist Awake</Typography>
                                                <Typography variant="caption" color="textSecondary">
                                                    Submitted by Dmytro Huz
                                                </Typography>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent>
                                    <Stack direction="row" spacing={2}>
                                        <CardMedia component="img" src={NarraioCard.src} sx={{ width: 220 }} />
                                        <Stack sx={{ flexGrow: 1 }} justifyContent="space-between">
                                            <Stack direction="row" justifyContent="space-between">
                                                <Chip label="Video" sx={{ height: '100%' }} color="warning" />
                                                <Button
                                                    disabled
                                                    size="small"
                                                    component={IconButton}
                                                    variant="outlined"
                                                    sx={{ minWidth: 0, padding: 5 / 8 }}
                                                >
                                                    <FavoriteRoundedIcon fontSize="small" />
                                                </Button>
                                            </Stack>
                                            <Stack>
                                                <Typography variant="h6">
                                                    In The Begging, The Words
                                                </Typography>
                                                <Typography variant="caption" color="textSecondary">
                                                    Submitted by RocketGurl
                                                </Typography>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
            <Container sx={{ py: 11 }}>
                <Typography variant="h3" fontWeight={700} mb={4}>
                    Explore Latest: Characters
                </Typography>
                <Tabs value={activeTab} onChange={handleActiveTabChange} indicatorColor="primary" textColor="inherit">
                    <Tab value="one" label="Characters" />
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
                                        src={require('assets/img/home/characters01.png').default.src}
                                    />
                                    <Stack>
                                        <Typography variant="h5">The Scribe</Typography>
                                        <Typography color="textSecondary" variant="caption">
                                            Narraio Genesis
                                        </Typography>
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
                                        src={require('assets/img/home/characters02.png').default.src}
                                    />
                                    <Stack>
                                        <Typography variant="h5">The Alchemist</Typography>
                                        <Typography color="textSecondary" variant="caption">
                                            Narraio Genesis
                                        </Typography>
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
                                        src={require('assets/img/home/characters03.png').default.src}
                                    />
                                    <Stack>
                                        <Typography variant="h5">Ian Sidell</Typography>
                                        <Typography color="textSecondary" variant="caption">
                                            Echocore
                                        </Typography>
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
                                        <Typography variant="h5">The Origin: Video or GIF</Typography>
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
                                        <Typography color="textSecondary">12 days ago by Narraio Genesis</Typography>
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

export default Character;
