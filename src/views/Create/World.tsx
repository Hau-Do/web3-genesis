import { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Slider from '@mui/material/Slider';

import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import QuestionMarkRoundedIcon from '@mui/icons-material/QuestionMarkRounded';

import CreateBg from 'assets/img/world/create-bg.png';

const CreateWorld = () => {
    const [activeStep, setActiveStep] = useState<number>(0);
    return (
        <>
            <Box
                sx={{
                    height: '75vh',
                    backgroundImage: `url("${CreateBg.src}")`,
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
                <Card sx={{ py: 4, position: 'relative' }}>
                    <CardContent>
                        <Stack>
                            <Typography variant="h4" textAlign="center">
                                Create World
                            </Typography>
                            <Stack px={10} py={4}>
                                <Table>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell
                                                sx={{
                                                    borderBottomWidth: 2,
                                                    borderBottomStyle: 'solid',
                                                    borderBottomColor:
                                                        activeStep === 0 ? 'primary.main' : 'rgba(254, 80, 143, 0.3)'
                                                }}
                                            >
                                                <Stack
                                                    justifyContent="flex-start"
                                                    direction="row"
                                                    alignItems="center"
                                                    spacing={2}
                                                >
                                                    {(() => {
                                                        if (activeStep > 0) {
                                                            return <CheckCircleRoundedIcon color="primary" />;
                                                        }
                                                        if (activeStep === 0) {
                                                            return <RadioButtonCheckedIcon color="primary" />;
                                                        }
                                                        if (activeStep < 0) {
                                                            return <RadioButtonUncheckedIcon color="primary" />;
                                                        }
                                                    })()}
                                                    <Stack>
                                                        <Typography>STEP 1</Typography>
                                                        <Typography variant="caption" color="textSecondary">
                                                            Create World
                                                        </Typography>
                                                    </Stack>
                                                </Stack>
                                            </TableCell>
                                            <TableCell
                                                sx={{
                                                    borderBottomWidth: 2,
                                                    borderBottomStyle: 'solid',
                                                    borderBottomColor:
                                                        activeStep === 1 ? 'primary.main' : 'rgba(254, 80, 143, 0.3)'
                                                }}
                                            >
                                                <Stack
                                                    justifyContent="center"
                                                    direction="row"
                                                    alignItems="center"
                                                    spacing={2}
                                                >
                                                    {(() => {
                                                        if (activeStep > 1) {
                                                            return <CheckCircleRoundedIcon color="primary" />;
                                                        }
                                                        if (activeStep === 1) {
                                                            return <RadioButtonCheckedIcon color="primary" />;
                                                        }
                                                        if (activeStep < 1) {
                                                            return <RadioButtonUncheckedIcon color="primary" />;
                                                        }
                                                    })()}
                                                    <Stack>
                                                        <Typography>STEP 2</Typography>
                                                        <Typography variant="caption" color="textSecondary">
                                                            Set World Criteria
                                                        </Typography>
                                                    </Stack>
                                                </Stack>
                                            </TableCell>
                                            <TableCell
                                                sx={{
                                                    borderBottomWidth: 2,
                                                    borderBottomStyle: 'solid',
                                                    borderBottomColor:
                                                        activeStep === 2 ? 'primary.main' : 'rgba(254, 80, 143, 0.3)'
                                                }}
                                            >
                                                <Stack
                                                    justifyContent="flex-end"
                                                    direction="row"
                                                    alignItems="center"
                                                    spacing={2}
                                                >
                                                    {(() => {
                                                        if (activeStep > 2) {
                                                            return <CheckCircleRoundedIcon color="primary" />;
                                                        }
                                                        if (activeStep === 2) {
                                                            return <RadioButtonCheckedIcon color="primary" />;
                                                        }
                                                        if (activeStep < 2) {
                                                            return <RadioButtonUncheckedIcon color="primary" />;
                                                        }
                                                    })()}
                                                    <Stack>
                                                        <Typography>STEP 3</Typography>
                                                        <Typography variant="caption" color="textSecondary">
                                                            Set World Insentives
                                                        </Typography>
                                                    </Stack>
                                                </Stack>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
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
                                                            <Stack spacing={2}>
                                                                <Typography>Name:</Typography>
                                                                <TextField variant="filled" />
                                                            </Stack>
                                                            <Stack spacing={2}>
                                                                <Typography>Description:</Typography>
                                                                <TextField variant="filled" multiline rows={4} />
                                                            </Stack>
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
                                                            <Stack spacing={2}>
                                                                <Typography>Who can post or approve Cannon?</Typography>
                                                                <TextField select variant="filled">
                                                                    <MenuItem>Jace Betnar</MenuItem>
                                                                    <MenuItem>Item1</MenuItem>
                                                                </TextField>
                                                            </Stack>
                                                            <Stack spacing={2}>
                                                                <Typography>
                                                                    Who can create characters, locations and items?
                                                                </Typography>
                                                                <Stack direction="row" spacing={2}>
                                                                    <Chip
                                                                        variant="outlined"
                                                                        color="success"
                                                                        label="User"
                                                                    />
                                                                    <Chip variant="outlined" label="Admin" />
                                                                    <Chip variant="outlined" label="Lorem Ipsum" />
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
                                                                </Stack>
                                                            </Stack>
                                                        </Stack>
                                                    </Grid>
                                                </Grid>
                                            );
                                        }
                                        case 2: {
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
                                                            <Stack spacing={2}>
                                                                <Typography>Percentage community shareback:</Typography>
                                                                <Slider defaultValue={50} />
                                                            </Stack>
                                                            <Stack spacing={2}>
                                                                <Typography>Make public in Narraio website?</Typography>
                                                                <Stack
                                                                    alignSelf="flex-start"
                                                                    direction="row"
                                                                    bgcolor="#25272F"
                                                                    padding={1}
                                                                    borderRadius={1}
                                                                    spacing={1}
                                                                >
                                                                    <Button
                                                                        startIcon={
                                                                            <CheckRoundedIcon fontSize="small" />
                                                                        }
                                                                        sx={{
                                                                            px: 3,
                                                                            bgcolor: 'rgba(255, 255, 255, .025)'
                                                                        }}
                                                                    >
                                                                        Yes
                                                                    </Button>
                                                                    <Button
                                                                        startIcon={
                                                                            <CloseRoundedIcon fontSize="small" />
                                                                        }
                                                                        sx={{
                                                                            px: 3,
                                                                            bgcolor: 'rgba(255, 255, 255, .025)'
                                                                        }}
                                                                    >
                                                                        No
                                                                    </Button>
                                                                </Stack>
                                                            </Stack>
                                                        </Stack>
                                                    </Grid>
                                                </Grid>
                                            );
                                        }
                                    }
                                })()}
                            </Stack>
                            <Stack direction="row" spacing={3} justifyContent="center">
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
                                {activeStep >= 2 ? (
                                    <Button
                                        size="large"
                                        sx={{ minWidth: (theme) => theme.spacing(20) }}
                                        variant="contained"
                                    >
                                        Submit
                                    </Button>
                                ) : (
                                    <Button
                                        size="large"
                                        sx={{ minWidth: (theme) => theme.spacing(20) }}
                                        variant="contained"
                                        onClick={() => {
                                            setActiveStep((prevState) => prevState + 1);
                                        }}
                                    >
                                        Continue
                                    </Button>
                                )}
                            </Stack>
                        </Stack>
                    </CardContent>
                    <Stack
                        padding={2}
                        bgcolor={'rgba(100, 100, 100, .1)'}
                        borderRadius={10}
                        position="absolute"
                        right={24}
                        bottom={24}
                    >
                        <QuestionMarkRoundedIcon />
                    </Stack>
                </Card>
            </Container>
        </>
    );
};

export default CreateWorld;
