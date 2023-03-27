// material-ui
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import BannerBackground from '../home/AuthBackground.png';
// ==============================|| AUTH BLUR BACK SVG ||============================== //

const AuthBackground = () => {
    const theme = useTheme();
    return (
        <Box sx={{ position: 'absolute', filter: 'blur(5px)', zIndex: -1, bottom: 0 }}>
            <Box component="img" src={BannerBackground} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Box>
    );
};

export default AuthBackground;
