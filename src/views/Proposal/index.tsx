import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import Box from '@mui/material/Box';
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
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';

const Cannon = () => {
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/">
            Name of World
        </Link>,
        <Link underline="hover" key="1" color="inherit" href="/">
            Canon Page
        </Link>,
        <Typography key="3" color="primary.main">
            Submit Proposal
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
                    <Grid item xs={12} sm={7}>
                        <Card>
                            <CardContent>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography fontSize={32}>Ian Sidell</Typography>
                                    <Stack direction="row" spacing={4}>
                                        <Stack>
                                            <Typography fontSize={12} color="text.secondary">
                                                Season
                                            </Typography>
                                            <Typography fontSize={14}>Pre-season</Typography>
                                        </Stack>
                                        <Stack>
                                            <Typography fontSize={12} color="text.secondary">
                                                Episode
                                            </Typography>
                                            <Typography fontSize={14}>1</Typography>
                                        </Stack>
                                    </Stack>
                                </Stack>
                                <Divider sx={{ my: 3 }} />
                                <Typography fontSize={26}>Making Raves</Typography>
                                <Stack sx={{ mt: 4 }}>
                                    <Typography color="textSecondary" fontSize={18}>
                                        As Sidell approached his late teens, he found community in San Francisco's underground
                                        rave community. He even made friends with Richie Hawtin, legendary techno god and DJ. There
                                        was something about the pulse of the music. The physical act of dance. A feeling of being 'one' 
                                        with the dance floor.
                                    </Typography>
                                    <Typography color="textSecondary" fontSize={18} style={{whiteSpace: 'pre-line'} }>
                                        Legend has it that Ian spent one epic night with Hawtin in the DJ booth at Cleo's Cafe during an
                                        impromptu set. The two talked about music, life, computing, and their visions for the future. 
                                        Neither knew how seminal that moment would be. 
                                    </Typography>
                                    <Typography color="textSecondary" fontSize={18}>
                                        <Link href="/" color="primary" sx={{ ml: 0.5 }}>
                                            more
                                        </Link>
                                    </Typography>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <Card>
                            <CardContent>
                                <Typography fontSize={16}>Available Сharacters</Typography>
                                <Box
                                    sx={{
                                        my: 2,
                                        '& .swiper-button-prev:after, & .swiper-button-next:after': {
                                            fontSize: 18,
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
                                        slidesPerView={3}
                                        spaceBetween={10}
                                        modules={[Navigation]}
                                        navigation={{
                                            enabled: true
                                        }}
                                    >
                                        <SwiperSlide>
                                            <Box
                                                component="img"
                                                src={require('assets/img/proposal/item01.png').default.src}
                                            />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Box
                                                component="img"
                                                src={require('assets/img/proposal/item02.png').default.src}
                                            />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Box
                                                component="img"
                                                src={require('assets/img/proposal/item03.png').default.src}
                                            />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Box
                                                component="img"
                                                src={require('assets/img/proposal/item04.png').default.src}
                                            />
                                        </SwiperSlide>
                                    </Swiper>
                                </Box>
                                <Typography fontSize={16}>Available Locations</Typography>
                                <Box
                                    sx={{
                                        my: 2,
                                        '& .swiper-button-prev:after, & .swiper-button-next:after': {
                                            fontSize: 18,
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
                                        slidesPerView={3}
                                        spaceBetween={10}
                                        modules={[Navigation]}
                                        navigation={{
                                            enabled: true
                                        }}
                                    >
                                        <SwiperSlide>
                                            <Box
                                                component="img"
                                                src={require('assets/img/proposal/item04.png').default.src}
                                            />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Box
                                                component="img"
                                                src={require('assets/img/proposal/item05.png').default.src}
                                            />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Box
                                                component="img"
                                                src={require('assets/img/proposal/item06.png').default.src}
                                            />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Box
                                                component="img"
                                                src={require('assets/img/proposal/item07.png').default.src}
                                            />
                                        </SwiperSlide>
                                    </Swiper>
                                </Box>
                                <Typography fontSize={16}>Available Items</Typography>
                                <Box
                                    sx={{
                                        mt: 2,
                                        '& .swiper-button-prev:after, & .swiper-button-next:after': {
                                            fontSize: 18,
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
                                        slidesPerView={3}
                                        spaceBetween={10}
                                        modules={[Navigation]}
                                        navigation={{
                                            enabled: true
                                        }}
                                    >
                                        <SwiperSlide>
                                            <Box
                                                component="img"
                                                src={require('assets/img/proposal/item07.png').default.src}
                                            />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Box
                                                component="img"
                                                src={require('assets/img/proposal/item08.png').default.src}
                                            />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Box
                                                component="img"
                                                src={require('assets/img/proposal/item09.png').default.src}
                                            />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Box
                                                component="img"
                                                src={require('assets/img/proposal/item01.png').default.src}
                                            />
                                        </SwiperSlide>
                                    </Swiper>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={6}>
                        <Stack direction="row" spacing={2} sx={{ my: 8 }}>
                            <FormControlLabel control={<Checkbox />} label="Comic" />
                            <FormControlLabel control={<Checkbox />} label="Book" />
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Image (e.g. poster)" />
                        </Stack>
                        <Stack spacing={1.5}>
                            <Typography fontSize={16}>Write Proposal</Typography>
                            <TextField
                                fullWidth
                                multiline
                                rows={20}
                                variant="filled"
                                placeholder="How do you propose to bring the Canon to life? Write your proposal."
                            />
                        </Stack>
                        <Button size="large" sx={{ minWidth: (theme) => theme.spacing(20), mt: 6 }} variant="contained">
                            Send to Approve
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Cannon;
