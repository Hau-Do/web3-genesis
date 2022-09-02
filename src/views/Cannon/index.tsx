import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Divider from '@mui/material/Divider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Chip from '@mui/material/Chip';

import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

const Cannon = () => {
    const [activeTab, setActiveTab] = useState('two');

    const handleActiveTabChange = (event: React.SyntheticEvent, newTab: string) => {
        setActiveTab(newTab);
    };

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/">
            Batman
        </Link>,
        <Link underline="hover" key="1" color="inherit" href="/">
            Batman Character
        </Link>,
        <Typography key="3" color="primary.main">
            Batman Cannon
        </Typography>
    ];

    return (
        <>
            <Container
                sx={{
                    pt: 10,
                    pb: 8,
                    zIndex: 1000,
                    position: 'relative'
                }}
            >
                <Breadcrumbs
                    separator={<NavigateNextRoundedIcon fontSize="small" />}
                    aria-label="breadcrumb"
                    sx={{ py: 5 }}
                >
                    {breadcrumbs}
                </Breadcrumbs>
                <Grid container spacing={2.75}>
                    <Grid item xs={12} sm={5}>
                        <Stack spacing={2.5}>
                            <Card sx={{ position: 'relative', lineHeight: 0 }}>
                                <Box
                                    component="img"
                                    sx={{ width: '100%' }}
                                    src={require('assets/img/cannon/main.png').default.src}
                                />
                            </Card>
                            <Card sx={{ position: 'relative' }}>
                                <CardContent>
                                    <Table
                                        sx={{
                                            '& td': {
                                                border: 'none'
                                            }
                                        }}
                                    >
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>
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
                                                                src={
                                                                    require('assets/img/icons/password.svg').default.src
                                                                }
                                                            />
                                                        </Stack>
                                                        <Stack>
                                                            <Typography color="textSecondary" sx={{ fontSize: 12 }}>
                                                                World key
                                                            </Typography>
                                                            <Typography sx={{ fontSize: 14, lineHeight: '14px' }}>
                                                                Narrio
                                                            </Typography>
                                                        </Stack>
                                                    </Stack>
                                                </TableCell>
                                                <TableCell>
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
                                                                Narraio Key World
                                                            </Typography>
                                                        </Stack>
                                                    </Stack>
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>
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
                                                                Yes
                                                            </Typography>
                                                        </Stack>
                                                    </Stack>
                                                </TableCell>
                                                <TableCell>
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
                                                            <Typography sx={{ fontSize: 14, lineHeight: '14px' }}>
                                                                5
                                                            </Typography>
                                                        </Stack>
                                                    </Stack>
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </CardContent>
                            </Card>
                            <Stack spacing={2}>
                                <Button
                                    sx={{
                                        textTransform: 'none',
                                        borderColor: 'divider'
                                    }}
                                    fullWidth
                                    variant="outlined"
                                    color="inherit"
                                    size="large"
                                >
                                    Create Cannon
                                </Button>
                                <Button
                                    sx={{
                                        textTransform: 'none',
                                        borderColor: 'divider'
                                    }}
                                    fullWidth
                                    variant="outlined"
                                    color="inherit"
                                    size="large"
                                >
                                    Submit proposal
                                </Button>
                                <Button
                                    sx={{
                                        textTransform: 'none',
                                        borderColor: 'divider'
                                    }}
                                    fullWidth
                                    variant="outlined"
                                    color="inherit"
                                    size="large"
                                >
                                    Create tributes
                                </Button>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <Card>
                            <CardContent>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography fontSize={32}>Joker</Typography>
                                    <Stack direction="row" spacing={4}>
                                        <Stack>
                                            <Typography fontSize={12} color="text.secondary">
                                                Season
                                            </Typography>
                                            <Typography fontSize={14}>Pre-season</Typography>
                                        </Stack>
                                        <Stack>
                                            <Typography fontSize={12} color="text.secondary">
                                                Episod
                                            </Typography>
                                            <Typography fontSize={14}>1</Typography>
                                        </Stack>
                                    </Stack>
                                </Stack>
                                <Divider sx={{ my: 3 }} />
                                <Typography fontSize={26}>The Scribe Enters the World</Typography>
                                <Stack direction="row" spacing={2.75} my={3.25} mb={4}>
                                    <Card
                                        elevation={0}
                                        sx={{
                                            maxWidth: 180,
                                            bgcolor: '#285c5033',
                                            borderRadius: 6 / 8
                                        }}
                                    >
                                        <Stack
                                            justifyContent="center"
                                            alignItems="center"
                                            py={2.25}
                                            px={4}
                                            height="100%"
                                        >
                                            <Typography textAlign="center" color="#30B38C">
                                                Proposals open
                                            </Typography>
                                        </Stack>
                                    </Card>
                                    <Card
                                        elevation={0}
                                        sx={{
                                            maxWidth: 180,
                                            bgcolor: '#84634E',
                                            borderRadius: 6 / 8
                                        }}
                                    >
                                        <Stack
                                            justifyContent="center"
                                            alignItems="center"
                                            py={2.25}
                                            px={4}
                                            height="100%"
                                        >
                                            <Typography color="#E6A473" fontSize={26}>
                                                1
                                            </Typography>
                                            <Typography color="#E6A473">In production</Typography>
                                        </Stack>
                                    </Card>
                                    <Card
                                        elevation={0}
                                        sx={{
                                            maxWidth: 160,
                                            bgcolor: '#da358e1a',
                                            borderRadius: 6 / 8
                                        }}
                                    >
                                        <Stack
                                            justifyContent="center"
                                            alignItems="center"
                                            py={2.25}
                                            px={4}
                                            height="100%"
                                        >
                                            <Typography color="#DA358E" fontSize={26}>
                                                1
                                            </Typography>
                                            <Typography color="#DA358E">Completed</Typography>
                                        </Stack>
                                    </Card>
                                </Stack>
                                <Stack>
                                    <Typography color="textSecondary" fontSize={18}>
                                        Eius eum sunt in nulla autem voluptas facilis et magnam. Provident accusamus
                                        omnis quos sunt. Illo enim consequuntur ratione aperiam eum rerum. Incidunt
                                        rerum maxime voluptas ad pariatur. Consequatur mollitia illum quia aut.
                                    </Typography>
                                    <Stack>
                                        <List
                                            sx={{
                                                '& .MuiListItemIcon-root': {
                                                    minWidth: 36
                                                }
                                            }}
                                        >
                                            <ListItem disablePadding sx={{ py: 1 }}>
                                                <ListItemIcon>
                                                    <CheckRoundedIcon color="success" />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary="Et perspiciatis fugit ratione."
                                                    primaryTypographyProps={{
                                                        color: 'textSecondary'
                                                    }}
                                                />
                                            </ListItem>
                                            <ListItem disablePadding sx={{ py: 1 }}>
                                                <ListItemIcon>
                                                    <CheckRoundedIcon color="success" />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary="Iste animi consectetur dicta dolorem delectus."
                                                    primaryTypographyProps={{
                                                        color: 'textSecondary'
                                                    }}
                                                />
                                            </ListItem>
                                            <ListItem disablePadding sx={{ py: 1 }}>
                                                <ListItemIcon>
                                                    <CheckRoundedIcon color="success" />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary="Et perspiciatis fugit ratione."
                                                    primaryTypographyProps={{
                                                        color: 'textSecondary'
                                                    }}
                                                />
                                            </ListItem>
                                        </List>
                                    </Stack>
                                    <Typography color="textSecondary" fontSize={18}>
                                        Eius eum sunt in nulla autem voluptas facilis et magnam. Provident accusamus
                                        omnis quos sunt. Illo enim consequuntur ratione aperiam eum rerum. Incidunt
                                        rerum maxime voluptas ad pariatur. Consequatur mollitia illum quia aut. Eius eum
                                        sunt in nulla autem voluptas facilis et magnam.
                                        <Link href="/" color="primary" sx={{ ml: 0.5 }}>
                                            more
                                        </Link>
                                    </Typography>
                                </Stack>
                            </CardContent>
                        </Card>
                        <Stack pt={4} pb={2} alignItems="center" direction="row" justifyContent="space-between">
                            <Typography fontSize={26}>Featured</Typography>
                            <Stack direction="row" spacing={2}>
                                <KeyboardArrowLeftRoundedIcon sx={{ color: 'text.secondary' }} />
                                <KeyboardArrowRightRoundedIcon />
                            </Stack>
                        </Stack>
                        <Card>
                            <CardContent>
                                <Grid container spacing={2.75}>
                                    <Grid item xs={12} sm={4}>
                                        <Stack spacing={3}>
                                            <Box
                                                component="img"
                                                borderRadius={1}
                                                src={require('assets/img/home/characters01.png').default.src}
                                            />
                                            <Stack>
                                                <Typography fontSize={18}>Robin</Typography>
                                                <Typography color="textSecondary" variant="caption">
                                                    Created by Dmytro Huz
                                                </Typography>
                                            </Stack>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Stack spacing={3}>
                                            <Box
                                                component="img"
                                                borderRadius={1}
                                                src={require('assets/img/home/characters02.png').default.src}
                                            />
                                            <Stack>
                                                <Typography fontSize={18}>Batman</Typography>
                                                <Typography color="textSecondary" variant="caption">
                                                    Created by Danial Croor
                                                </Typography>
                                            </Stack>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Stack spacing={3}>
                                            <Box
                                                component="img"
                                                borderRadius={1}
                                                src={require('assets/img/home/characters03.png').default.src}
                                            />
                                            <Stack>
                                                <Typography fontSize={18}>Penguin</Typography>
                                                <Typography color="textSecondary" variant="caption">
                                                    Created by John Jooir
                                                </Typography>
                                            </Stack>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                        <Stack pt={4} pb={2} alignItems="center" direction="row" justifyContent="space-between">
                            <Typography fontSize={26}>Story Prompts</Typography>
                        </Stack>
                        <Stack spacing={2}>
                            <Card>
                                <CardContent
                                    component={Stack}
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                >
                                    <Typography fontSize={14} color="textSecondary">
                                        Batman’s parents are killed. Describe the moment it happens.
                                    </Typography>
                                    <Button>Submit</Button>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent
                                    component={Stack}
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                >
                                    <Typography fontSize={14} color="textSecondary">
                                        How does Batman get his superhero disguise?
                                    </Typography>
                                    <Button>Submit</Button>
                                </CardContent>
                            </Card>
                        </Stack>
                    </Grid>
                </Grid>
                <Typography fontSize={48} fontWeight={700} textAlign="center" mt={15}>
                    Lorem ipsum
                </Typography>
                <Stack justifyContent="center" alignItems="center" sx={{ mt: 5 }}>
                    <Tabs
                        value={activeTab}
                        onChange={handleActiveTabChange}
                        indicatorColor="primary"
                        textColor="inherit"
                        sx={{
                            py: 0,
                            px: 1,
                            bgcolor: '#282A33',
                            borderRadius: '12px',
                            '& .MuiTab-root': {
                                px: 10,
                                py: 1.5
                            },
                            '& .MuiTabs-flexContainer': {
                                position: 'relative',
                                zIndex: 1,
                                '&:before': {
                                    display: 'none'
                                }
                            },
                            '& .MuiTabs-indicator': {
                                top: 6,
                                bottom: 6,
                                height: 'calc(100% - 12px)',
                                bgcolor: '#31343F',
                                boxShadow: '0px 2px 4px -2px rgb(0 0 0 / 31%), inset 0px 1px 1px rgb(255 255 255 / 5%)'
                            }
                        }}
                    >
                        <Tab value="one" label="Proposals" />
                        <Tab value="two" label="Pre-Production" />
                        <Tab value="three" label="Complete" />
                    </Tabs>
                </Stack>
                <Box
                    sx={{
                        mt: 8,
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
                        slidesPerView={2}
                        spaceBetween={30}
                        modules={[Navigation]}
                        navigation={{
                            enabled: true
                        }}
                    >
                        <SwiperSlide>
                            <Card>
                                <CardContent component={Stack} spacing={2}>
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            lineHeight: 0
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            borderRadius={1}
                                            width="100%"
                                            src={require('assets/img/cannon/background.png').default.src}
                                        />
                                        <Box
                                            component="img"
                                            borderRadius={1}
                                            src={require('assets/img/cannon/cover-book.png').default.src}
                                            sx={{
                                                position: 'absolute',
                                                top: '50%',
                                                left: '50%',
                                                transform: 'translate(-50%, -50%)'
                                            }}
                                        />
                                    </Box>
                                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                                        <Typography fontSize={20} color="#6DCCBC">
                                            Pre-Season: Chapter 2
                                        </Typography>
                                        <Chip
                                            variant="filled"
                                            label="Graphic Novel"
                                            color="warning"
                                            sx={{
                                                boxShadow: 'none',
                                                bgcolor: '#84634E',
                                                color: '#E6A473',
                                                borderRadius: '6px',
                                                lineHeight: '24px',
                                                fontSize: 14,
                                                py: 0.5,
                                                px: 1.5,
                                                '& span': {
                                                    padding: 0
                                                }
                                            }}
                                        />
                                    </Stack>
                                    <Typography fontSize={26}>An Unusual Device Is Revealed</Typography>
                                    <Typography color="textSecondary">
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur.
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
                                        Experience Story
                                    </Button>
                                </CardContent>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card>
                                <CardContent component={Stack} spacing={2}>
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            lineHeight: 0
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            borderRadius={1}
                                            width="100%"
                                            src={require('assets/img/cannon/background.png').default.src}
                                        />
                                        <Box
                                            component="img"
                                            borderRadius={1}
                                            src={require('assets/img/cannon/cover-book.png').default.src}
                                            sx={{
                                                position: 'absolute',
                                                top: '50%',
                                                left: '50%',
                                                transform: 'translate(-50%, -50%)'
                                            }}
                                        />
                                    </Box>
                                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                                        <Typography fontSize={20} color="#6DCCBC">
                                            Pre-Season: Chapter 2
                                        </Typography>
                                        <Chip
                                            variant="filled"
                                            label="Graphic Novel"
                                            color="warning"
                                            sx={{
                                                boxShadow: 'none',
                                                bgcolor: '#84634E',
                                                color: '#E6A473',
                                                borderRadius: '6px',
                                                lineHeight: '24px',
                                                fontSize: 14,
                                                py: 0.5,
                                                px: 1.5,
                                                '& span': {
                                                    padding: 0
                                                }
                                            }}
                                        />
                                    </Stack>
                                    <Typography fontSize={26}>An Unusual Device Is Revealed</Typography>
                                    <Typography color="textSecondary">
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur.
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
                                        Experience Story
                                    </Button>
                                </CardContent>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card>
                                <CardContent component={Stack} spacing={2}>
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            lineHeight: 0
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            borderRadius={1}
                                            width="100%"
                                            src={require('assets/img/cannon/background.png').default.src}
                                        />
                                        <Box
                                            component="img"
                                            borderRadius={1}
                                            src={require('assets/img/cannon/cover-book.png').default.src}
                                            sx={{
                                                position: 'absolute',
                                                top: '50%',
                                                left: '50%',
                                                transform: 'translate(-50%, -50%)'
                                            }}
                                        />
                                    </Box>
                                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                                        <Typography fontSize={20} color="#6DCCBC">
                                            Pre-Season: Chapter 2
                                        </Typography>
                                        <Chip
                                            variant="filled"
                                            label="Graphic Novel"
                                            color="warning"
                                            sx={{
                                                boxShadow: 'none',
                                                bgcolor: '#84634E',
                                                color: '#E6A473',
                                                borderRadius: '6px',
                                                lineHeight: '24px',
                                                fontSize: 14,
                                                py: 0.5,
                                                px: 1.5,
                                                '& span': {
                                                    padding: 0
                                                }
                                            }}
                                        />
                                    </Stack>
                                    <Typography fontSize={26}>An Unusual Device Is Revealed</Typography>
                                    <Typography color="textSecondary">
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur.
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
                                        Experience Story
                                    </Button>
                                </CardContent>
                            </Card>
                        </SwiperSlide>
                    </Swiper>
                </Box>
            </Container>
        </>
    );
};

export default Cannon;
