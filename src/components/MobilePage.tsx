import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const MobilePage = () => {
    return (
        <Box
            sx={{
                height: '100vh',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Typography variant="h5" color="textSecondary" textAlign="center">
                This page is not available for mobile pages
            </Typography>
        </Box>
    );
};

export default MobilePage;
