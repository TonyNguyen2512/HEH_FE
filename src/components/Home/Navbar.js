/* eslint-disable jsx-a11y/anchor-is-valid */
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';
import { BsCart2 } from 'react-icons/bs';
import { HiOutlineBars3 } from 'react-icons/hi2';
import Logo from '../../components/Logo/5157862L.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
        {
            text: 'Giới thiệu',
            icon: <HomeIcon />
        },
        {
            text: 'Về chúng tôi',
            icon: <InfoIcon />
        },
        {
            text: 'Chứng thực',
            icon: <CommentRoundedIcon />
        },
        {
            text: 'Liên lạc',
            icon: <PhoneRoundedIcon />
        },
        {
            text: 'Giỏ hàng',
            icon: <ShoppingCartRoundedIcon />
        }
    ];
    return (
        <nav>
            <div className="nav-logo-container">
                <img src={Logo} alt="" />
            </div>
            <div className="navbar-links-container">
                <a href="">Trang chủ</a>
                <a href="#about">Về chúng tôi</a>
                <a href="#testimonials">Chứng thực</a>
                <a href="#contact">Liên lạc</a>
                <a href="">
                    <BsCart2 className="navbar-cart-icon" />
                </a>
                <Link to="/login">
                    <button className="primary-button">Đăng nhập ngay</button>
                </Link>
            </div>
            <div className="navbar-menu-container">
                <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
            </div>
            <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
                <Box sx={{ width: 250 }} role="presentation" onClick={() => setOpenMenu(false)} onKeyDown={() => setOpenMenu(false)}>
                    <List>
                        {menuOptions.map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                </Box>
            </Drawer>
        </nav>
    );
};

export default Navbar;
