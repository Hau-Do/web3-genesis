import { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';

import BatGirl from 'assets/img/home/bat-girl.png';
import BatGirlS from 'assets/img/home/bat-girl-s.png';
import BatGirlBg from 'assets/img/home/bat-girl-bg.png';
import ArrowIn from 'assets/img/icons/arrow-in.svg';
import ArrowInGray from 'assets/img/icons/arrow-in-gray.svg';
import NarraioCard from 'assets/img/home/narraio-build.png';
import Tribute01 from 'assets/img/home/tribute01.png';
import Tribute02 from 'assets/img/home/tribute02.png';

const DarkKnight = () => {
    const [activeTab, setActiveTab] = useState('one');

    const handleActiveTabChange = (event: React.SyntheticEvent, newTab: string) => {
        setActiveTab(newTab);
    };
    return (
        <>
            <Box
                sx={{
                    height: '75vh',
                    backgroundImage: `url("${require('assets/img/world/create-bg.png').default.src}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top'
                }}
            />
            <Container
                sx={{
                    mt: '-25%',
                    pt: 2,
                    pb: 8,
                    zIndex: 1000,
                    position: 'relative'
                }}
            >
                <Box
                    sx={{
                        borderRadius: 1,
                        bgcolor: 'rgba(34, 34, 40, .8)'
                    }}
                >
                    <Grid container>
                        <Grid item xs={12} sm={5}>
                            <Card sx={{ position: 'relative' }}>
                                <CardContent>
                                    <Box
                                        component="img"
                                        sx={{ width: '100%' }}
                                        src={require('assets/img/home/characters03.png').default.src}
                                    />
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        sx={{ py: 2 }}
                                    >
                                        <Typography variant="h5">Ian Sidell</Typography>
                                        <Button
                                            disabled
                                            size="small"
                                            component={IconButton}
                                            variant="outlined"
                                            sx={{ minWidth: 0, minHeight: 0, padding: 5 / 8 }}
                                        >
                                            <FavoriteRoundedIcon
                                                sx={{
                                                    fontSize: 15
                                                }}
                                            />
                                        </Button>
                                    </Stack>
                                    <Stack spacing={3}>
                                        <Stack direction="row" spacing={3}>
                                            <Stack direction="row" spacing={1}>
                                                <Stack
                                                    width={36}
                                                    height={36}
                                                    bgcolor="#1F403A"
                                                    borderRadius={50}
                                                    justifyContent="center"
                                                    alignItems="center"
                                                >
                                                    <Box
                                                        component="img"
                                                        sx={{ width: 16, height: 16 }}
                                                        src={require('assets/img/icons/password.svg').default.src}
                                                    />
                                                </Stack>
                                                <Stack>
                                                    <Typography color="textSecondary" sx={{ fontSize: 12 }}>
                                                        World key
                                                    </Typography>
                                                    <Typography sx={{ fontSize: 14, lineHeight: '14px' }}>
                                                        Echocore
                                                    </Typography>
                                                </Stack>
                                            </Stack>
                                            <Stack direction="row" spacing={1}>
                                                <Stack
                                                    width={36}
                                                    height={36}
                                                    bgcolor="#42355B"
                                                    borderRadius={50}
                                                    justifyContent="center"
                                                    alignItems="center"
                                                >
                                                    <Box
                                                        component="img"
                                                        sx={{ width: 16, height: 16 }}
                                                        src={require('assets/img/icons/remix.svg').default.src}
                                                    />
                                                </Stack>
                                                <Stack>
                                                    <Typography color="textSecondary" sx={{ fontSize: 12 }}>
                                                        Remix
                                                    </Typography>
                                                    <Typography sx={{ fontSize: 14, lineHeight: '14px' }}>
                                                        Genesis NFT
                                                    </Typography>
                                                </Stack>
                                            </Stack>
                                        </Stack>
                                        <Stack direction="row" spacing={3}>
                                            <Stack direction="row" spacing={1}>
                                                <Stack
                                                    width={36}
                                                    height={36}
                                                    bgcolor="#787135"
                                                    borderRadius={50}
                                                    justifyContent="center"
                                                    alignItems="center"
                                                >
                                                    <Box
                                                        component="img"
                                                        sx={{ width: 16, height: 16 }}
                                                        src={require('assets/img/icons/drive.svg').default.src}
                                                    />
                                                </Stack>
                                                <Stack>
                                                    <Typography color="textSecondary" sx={{ fontSize: 12 }}>
                                                        Transport
                                                    </Typography>
                                                    <Typography sx={{ fontSize: 14, lineHeight: '14px' }}>
                                                        No
                                                    </Typography>
                                                </Stack>
                                            </Stack>
                                            <Stack direction="row" spacing={1}>
                                                <Stack
                                                    width={36}
                                                    height={36}
                                                    bgcolor="#2F424C"
                                                    borderRadius={50}
                                                    justifyContent="center"
                                                    alignItems="center"
                                                >
                                                    <Box
                                                        component="img"
                                                        sx={{ width: 16, height: 16 }}
                                                        src={require('assets/img/icons/ticket.svg').default.src}
                                                    />
                                                </Stack>
                                                <Stack>
                                                    <Typography color="textSecondary" sx={{ fontSize: 12 }}>
                                                        Tickets
                                                    </Typography>
                                                    <Typography sx={{ fontSize: 14, lineHeight: '14px' }}>5</Typography>
                                                </Stack>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={7}>
                            <CardContent>
                                <CardHeader
                                    avatar={<Avatar src={require('assets/img/home/avatar04.png').default.src} />}
                                    title="Echocore"
                                    subheader="Owned by"
                                    titleTypographyProps={{
                                        fontWeight: 'bold'
                                    }}
                                />
                                <Stack px={2}>
                                    <Typography color="textSecondary" fontSize={18}>
                                        Enigmatic genius. Inventor. Founder of SCI. Ian Sidell isn't always well known 
                                        outside of the San Francisco skater and raver scene, or in the boardrooms of secretive 
                                        government agencies. Until now, that is. With the public unveiling of the Echocore device,
                                        Ian's long years of work on a consumer product might be bringing him into the spotlight. 
                                    </Typography>
                                   
                                </Stack>
                                <Stack p={2} direction="row">
                                    <Button size="large" variant="contained">
                                        Read Canon
                                    </Button>
                                </Stack>
                                <Stack p={2} alignItems="center" direction="row" justifyContent="space-between">
                                    <Typography fontSize={28}>Featured in</Typography>
                                    <Stack direction="row" spacing={3}>
                                        <Stack direction="row" alignItems="center" spacing={1.5}>
                                            <Typography fontSize={15}>01</Typography>
                                            <Box
                                                sx={{
                                                    height: '1px',
                                                    width: 26,
                                                    bgcolor: '#757679',
                                                    borderRadius: 1
                                                }}
                                            />
                                            <Typography color="textSecondary" fontSize={15}>
                                                04
                                            </Typography>
                                        </Stack>
                                        <Stack direction="row" spacing={2}>
                                            <KeyboardArrowLeftRoundedIcon sx={{ color: 'text.secondary' }} />
                                            <KeyboardArrowRightRoundedIcon />
                                        </Stack>
                                    </Stack>
                                </Stack>
                                <Stack direction="row">
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
                                                <Stack direction="row" spacing={0.75} px={2}>
                                                    <Typography color="#30B38C" fontSize={16} fontWeight={700}>
                                                        01
                                                    </Typography>
                                                    <Typography fontSize={16}>Pre-Season</Typography>
                                                </Stack>
                                            }
                                            secondary="A device is revealed"
                                            secondaryTypographyProps={{
                                                sx: {
                                                    px: 2
                                                }
                                            }}
                                        />
                                        <Box component="img" src={ArrowIn.src} alt="Arrow In" />
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
                                                <Stack direction="row" spacing={0.75} px={2}>
                                                    <Typography color="#30B38C" fontSize={16} fontWeight={700}>
                                                        01
                                                    </Typography>
                                                    <Typography fontSize={16}>Origins:Boards</Typography>
                                                </Stack>
                                            }
                                            secondary="Sidell looks back."
                                            secondaryTypographyProps={{
                                                sx: {
                                                    px: 2
                                                }
                                            }}
                                        />
                                        <Box component="img" src={ArrowIn.src} alt="Arrow In" />
                                    </ListItem>
                                </Stack>
                            </CardContent>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={4}>
                    <Typography variant="h3" fontWeight={700} mb={4}>
                        Top Tributes
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
                                        <CardMedia component="img" src={Tribute01.src} sx={{ width: 220 }} />
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
                                                <Typography variant="h6">Let's Skate</Typography>
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
                                        <CardMedia component="img" src={Tribute02.src} sx={{ width: 220 }} />
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
                                                    Skate Render
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
                        See All
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
        </>
    );
};

export default DarkKnight;
