import { Link } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
import FirebaseForgetPassword from './auth-forms/AuthForgetPassword';
import AuthWrapper from './AuthWrapper';

// ================================|| ForgetPassword ||================================ //

const ForgetPassword = () => (
    <AuthWrapper>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
                    <Typography variant="h3">Đặt lại mật khẩu</Typography>
                    <Typography component={Link} to="/login" variant="body1" sx={{ textDecoration: 'none' }} color="primary">
                        Quay về trang đăng nhập?
                    </Typography>
                </Stack>
            </Grid>
            <Grid item xs={12}>
                <FirebaseForgetPassword />
            </Grid>
        </Grid>
    </AuthWrapper>
);

export default ForgetPassword;
