import { Box, Container, Typography, Stack, Grid, Card, CardContent, Avatar } from '@mui/material';

import Hero from 'assets/img/about/hero.png';
import Banner from 'assets/img/about/banner.png';

const CardList = [
    {
        id: 0,
        title: 'Not an expert? Not a problem. Here’s why.',
        description:
            'Worried about teaching or leading because you’re not an ‘expert’? Research says that’s an advantage. Learn how to leverag',
        banner: require('assets/img/about/card1.png').default,
        author: {
            name: 'Amanda Minorva',
            role: 'Marketing Manager',
            avatar: require('assets/img/about/card1.png').default
        }
    },
    {
        id: 1,
        title: 'Not an expert? Not a problem. Here’s why.',
        description:
            'Worried about teaching or leading because you’re not an ‘expert’? Research says that’s an advantage. Learn how to leverag',
        banner: require('assets/img/about/card2.png').default,
        author: {
            name: 'Amanda Minorva',
            role: 'Marketing Manager',
            avatar: require('assets/img/about/card2.png').default
        }
    },
    {
        id: 2,
        title: 'Not an expert? Not a problem. Here’s why.',
        description:
            'Worried about teaching or leading because you’re not an ‘expert’? Research says that’s an advantage. Learn how to leverag',
        banner: require('assets/img/about/card3.png').default,
        author: {
            name: 'Amanda Minorva',
            role: 'Marketing Manager',
            avatar: require('assets/img/about/card3.png').default
        }
    }
];

const LearnAbout = () => {
    return (
        <>
            <Box
                sx={{
                    height: '100vh',
                    backgroundImage: `url("${Hero.src}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top'
                }}
            />
            <Container
                sx={{
                    mt: '-10%',
                    zIndex: 1000,
                    position: 'relative'
                }}
            >
                <Card
                    sx={{
                        padding: '50px 89px !important',
                        position: 'relative',
                        borderRadius: 2
                    }}
                >
                    <Typography variant="h3" fontWeight={700}>
                        You Are a{' '}
                        <Typography variant="h3" fontWeight={700} color="#6DCCBC" component="span">
                            Creator,
                        </Typography>{' '}
                        <br />A{' '}
                        <Typography variant="h3" fontWeight={700} color="#6DCCBC" component="span">
                            Builder
                        </Typography>{' '}
                        of Worlds
                    </Typography>
                    <Stack sx={{ py: 4 }} spacing={2}>
                        <Typography color="textSecondary" variant="h6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </Typography>
                        <Typography color="textSecondary" variant="h6">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur.
                        </Typography>
                        <Typography color="textSecondary" variant="h6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </Typography>
                        <Typography color="textSecondary" variant="h6">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur.
                        </Typography>
                        <Typography color="textSecondary" variant="h6">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur.
                        </Typography>
                        <Typography variant="h5" sx={{ py: 1 }}>
                            Sub Heading
                        </Typography>
                        <Typography color="textSecondary" variant="h6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </Typography>
                        <Typography color="textSecondary" variant="h6">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur.
                        </Typography>
                        <Typography color="textSecondary" variant="h6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </Typography>
                        <Typography variant="h5" sx={{ py: 1 }}>
                            Lorem ipsum dolor
                        </Typography>
                        <Typography color="textSecondary" variant="h6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </Typography>
                        <Typography color="textSecondary" variant="h6">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur.
                        </Typography>
                        <Typography color="textSecondary" variant="h6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </Typography>
                        <Box component="br" />
                        <Box component="br" />
                        <Box component="img" src={Banner.src} alt="Banner" />
                        <Box component="br" />
                        <Box component="br" />
                        <Typography variant="h5" sx={{ py: 1 }}>
                            Lorem ipsum dolor
                        </Typography>
                        <Typography color="textSecondary" variant="h6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </Typography>
                        <Typography color="textSecondary" variant="h6">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur.
                        </Typography>
                        <Typography color="textSecondary" variant="h6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </Typography>
                        <Typography variant="h5" sx={{ py: 1 }}>
                            Sub Heading
                        </Typography>
                        <Typography color="textSecondary" variant="h6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </Typography>
                        <Typography color="textSecondary" variant="h6">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur.
                        </Typography>
                        <Typography color="textSecondary" variant="h6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </Typography>
                    </Stack>
                </Card>
            </Container>
            <Container sx={{ mb: 12 }}>
                <Typography variant="h5" textAlign="center" mt={12} mb={6}>
                    Continue Reading
                </Typography>
                <Grid container spacing={3}>
                    {CardList.map((item, idx) => (
                        <Grid item xs={4} key={idx}>
                            <Card>
                                <CardContent>
                                    <Stack spacing={2}>
                                        <Box component="img" borderRadius={1} src={item.banner.src} />
                                        <Typography variant="h6">{item.title}</Typography>
                                        <Typography color="textSecondary">{item.description}</Typography>
                                        <Stack pt={2} direction="row" alignItems="center" spacing={2}>
                                            <Avatar src={item.author.avatar.src} alt={item.author.name} />
                                            <Stack>
                                                <Typography>{item.author.name}</Typography>
                                                <Typography variant="caption" color="textSecondary">
                                                    {item.author.role}
                                                </Typography>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
};

export default LearnAbout;
