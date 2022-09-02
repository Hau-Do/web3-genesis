import { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';

const CreateCharacters = () => {
    const [activeStep, setActiveStep] = useState<any>(0);

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/">
            Name of World
        </Link>,
        <Typography key="3" color="primary.main">
            Create Component
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
                <Card>
                    <CardContent>
                        <Stack>
                            <Stack px={2}>
                                {(() => {
                                    switch (activeStep) {
                                        case 0: {
                                            return (
                                                <Grid container spacing={4} my={2}>
                                                    <Grid item xs={6}>
                                                        <Card
                                                            sx={{
                                                                width: '100%',
                                                                height: '100%',
                                                                bgcolor: '#25272F',
                                                                boxShadow: 'none',
                                                                border: '2px dashed #31343F'
                                                            }}
                                                        >
                                                            <CardContent
                                                                width="100%"
                                                                height="100%"
                                                                component={Stack}
                                                                justifyContent="center"
                                                                alignItems="center"
                                                                spacing={1}
                                                            >
                                                                <Box
                                                                    component="img"
                                                                    src={
                                                                        require('assets/img/icons/paper-clip.svg')
                                                                            .default.src
                                                                    }
                                                                    alt="Menu"
                                                                    mb={2}
                                                                />
                                                                <Typography variant="h6">
                                                                    Drag and Drop Your File Here
                                                                </Typography>
                                                                <Typography
                                                                    variant="caption"
                                                                    color="textSecondary"
                                                                    textAlign="center"
                                                                >
                                                                    File types supported: JPG, PNG, GIF, SVG, MP4, WEBM,
                                                                    MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB
                                                                </Typography>
                                                            </CardContent>
                                                        </Card>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Stack spacing={4}>
                                                            <Typography variant="h5" textAlign="left">
                                                                Create Story Component for:
                                                            </Typography>
                                                            <Stack direction="row" spacing={2}>
                                                                <Chip
                                                                    variant="outlined"
                                                                    color="success"
                                                                    label="Character"
                                                                />
                                                                <Chip variant="outlined" label="Location" />
                                                                <Chip variant="outlined" label="Item" />
                                                            </Stack>
                                                            <Stack spacing={2}>
                                                                <Typography>Name:</Typography>
                                                                <TextField
                                                                    variant="filled"
                                                                    inputProps={{
                                                                        placeholder: 'Type Here'
                                                                    }}
                                                                />
                                                            </Stack>
                                                            <Stack spacing={2}>
                                                                <Typography>Description:</Typography>
                                                                <TextField
                                                                    variant="filled"
                                                                    multiline
                                                                    rows={4}
                                                                    inputProps={{
                                                                        placeholder: 'Type Here'
                                                                    }}
                                                                />
                                                            </Stack>
                                                        </Stack>
                                                        <Stack
                                                            direction="row"
                                                            spacing={3}
                                                            pt={5}
                                                            justifyContent="space-between"
                                                        >
                                                            <Button
                                                                size="large"
                                                                sx={{ minWidth: (theme) => theme.spacing(20) }}
                                                                variant="outlined"
                                                                disabled={activeStep === 0}
                                                                onClick={() => {
                                                                    setActiveStep((prevState) => prevState - 1);
                                                                }}
                                                            >
                                                                Back
                                                            </Button>
                                                            <Button
                                                                size="large"
                                                                sx={{ minWidth: (theme) => theme.spacing(20) }}
                                                                variant="contained"
                                                                disabled={activeStep >= 2}
                                                                onClick={() => {
                                                                    setActiveStep((prevState) => prevState + 1);
                                                                }}
                                                            >
                                                                Continue
                                                            </Button>
                                                        </Stack>
                                                    </Grid>
                                                </Grid>
                                            );
                                        }
                                        case 1: {
                                            return (
                                                <Grid container spacing={4} my={2}>
                                                    <Grid item xs={6}>
                                                        <Card
                                                            sx={{
                                                                width: '100%',
                                                                height: '100%',
                                                                bgcolor: '#25272F',
                                                                boxShadow: 'none',
                                                                border: '2px dashed #31343F'
                                                            }}
                                                        >
                                                            <CardContent
                                                                width="100%"
                                                                height="100%"
                                                                component={Stack}
                                                                justifyContent="center"
                                                                alignItems="center"
                                                                spacing={1}
                                                            >
                                                                <Box
                                                                    component="img"
                                                                    src={
                                                                        require('assets/img/icons/paper-clip.svg')
                                                                            .default.src
                                                                    }
                                                                    alt="Menu"
                                                                    mb={2}
                                                                />
                                                                <Typography variant="h6">
                                                                    Drag and Drop Your File Here
                                                                </Typography>
                                                                <Typography
                                                                    variant="caption"
                                                                    color="textSecondary"
                                                                    textAlign="center"
                                                                >
                                                                    File types supported: JPG, PNG, GIF, SVG, MP4, WEBM,
                                                                    MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB
                                                                </Typography>
                                                            </CardContent>
                                                        </Card>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Stack spacing={4}>
                                                            <Typography variant="h5" textAlign="left">
                                                                Set World Criteria:
                                                            </Typography>
                                                            <Stack spacing={2}>
                                                                <Typography>Is component portable?</Typography>
                                                                <Stack
                                                                    alignSelf="flex-start"
                                                                    direction="row"
                                                                    bgcolor="#25272F"
                                                                    padding={1}
                                                                    borderRadius={1}
                                                                    spacing={1}
                                                                >
                                                                    <Button
                                                                        color="success"
                                                                        startIcon={
                                                                            <CheckRoundedIcon
                                                                                color="success"
                                                                                fontSize="small"
                                                                            />
                                                                        }
                                                                        sx={{
                                                                            px: 3,
                                                                            bgcolor: 'rgba(255, 255, 255, .025)'
                                                                        }}
                                                                    >
                                                                        Yes
                                                                    </Button>
                                                                    <Button
                                                                        disabled
                                                                        startIcon={
                                                                            <CloseRoundedIcon fontSize="small" />
                                                                        }
                                                                        sx={{
                                                                            px: 3
                                                                        }}
                                                                    >
                                                                        No
                                                                    </Button>
                                                                </Stack>
                                                            </Stack>
                                                            <Stack spacing={2}>
                                                                <Typography>Can component be remixed?</Typography>
                                                                <Stack
                                                                    alignSelf="flex-start"
                                                                    direction="row"
                                                                    bgcolor="#25272F"
                                                                    padding={1}
                                                                    borderRadius={1}
                                                                    spacing={1}
                                                                >
                                                                    <Button
                                                                        color="success"
                                                                        startIcon={
                                                                            <CheckRoundedIcon
                                                                                color="success"
                                                                                fontSize="small"
                                                                            />
                                                                        }
                                                                        sx={{
                                                                            px: 3,
                                                                            bgcolor: 'rgba(255, 255, 255, .025)'
                                                                        }}
                                                                    >
                                                                        Yes
                                                                    </Button>
                                                                    <Button
                                                                        disabled
                                                                        startIcon={
                                                                            <CloseRoundedIcon fontSize="small" />
                                                                        }
                                                                        sx={{
                                                                            px: 3
                                                                        }}
                                                                    >
                                                                        No
                                                                    </Button>
                                                                </Stack>
                                                            </Stack>
                                                            <Stack spacing={2}>
                                                                <Typography>Who can post tributes?</Typography>
                                                                <Stack direction="row" spacing={2}>
                                                                    <Chip
                                                                        variant="outlined"
                                                                        color="success"
                                                                        label="User"
                                                                    />
                                                                    <Chip variant="outlined" label="Admin" />
                                                                    <Chip variant="outlined" label="Lorem Ipsum" />
                                                                    <Chip variant="outlined" label="Lorem" />
                                                                </Stack>
                                                            </Stack>
                                                        </Stack>
                                                        <Stack
                                                            direction="row"
                                                            spacing={3}
                                                            pt={5}
                                                            justifyContent="space-between"
                                                        >
                                                            <Button
                                                                size="large"
                                                                sx={{ minWidth: (theme) => theme.spacing(20) }}
                                                                variant="outlined"
                                                                disabled={activeStep === 0}
                                                                onClick={() => {
                                                                    setActiveStep((prevState) => prevState - 1);
                                                                }}
                                                            >
                                                                Back
                                                            </Button>
                                                            <Button
                                                                size="large"
                                                                sx={{ minWidth: (theme) => theme.spacing(20) }}
                                                                variant="contained"
                                                                disabled={activeStep >= 1}
                                                                onClick={() => {
                                                                    setActiveStep((prevState) => prevState + 1);
                                                                }}
                                                            >
                                                                Create
                                                            </Button>
                                                        </Stack>
                                                    </Grid>
                                                </Grid>
                                            );
                                        }
                                    }
                                })()}
                            </Stack>
                        </Stack>
                    </CardContent>
                </Card>
            </Container>
        </>
    );
};

export default CreateCharacters;
