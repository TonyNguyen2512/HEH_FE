// assets
import {
    AntDesignOutlined,
    AppstoreAddOutlined,
    BarcodeOutlined,
    BgColorsOutlined,
    FireOutlined,
    FontSizeOutlined,
    IdcardOutlined,
    LoadingOutlined,
    MessageOutlined,
    PictureOutlined,
    VideoCameraOutlined
} from '@ant-design/icons';

// icons
const icons = {
    FontSizeOutlined,
    BgColorsOutlined,
    BarcodeOutlined,
    AntDesignOutlined,
    LoadingOutlined,
    AppstoreAddOutlined,
    IdcardOutlined,
    FireOutlined,
    MessageOutlined,
    PictureOutlined,
    VideoCameraOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
    id: 'utilities',
    title: 'Quản lý',
    type: 'group',
    children: [
        {
            id: 'util-account',
            title: 'Ban Account',
            type: 'item',
            url: '/admin/account',
            icon: icons.IdcardOutlined
        },
        {
            id: 'util-exercise',
            title: 'Bài tập',
            type: 'item',
            url: '/admin/exercise',
            icon: icons.FireOutlined
        },
        {
            id: 'util-category',
            title: 'Danh mục',
            type: 'item',
            url: '/admin/category',
            icon: icons.BarcodeOutlined
        },
        {
            id: 'util-image',
            title: 'Hình ảnh',
            type: 'item',
            url: '/admin/image',
            icon: icons.PictureOutlined
        },
        {
            id: 'util-video',
            title: 'Video',
            type: 'item',
            url: '/admin/video',
            icon: icons.VideoCameraOutlined
        },
        {
            id: 'util-typeOfFee',
            title: 'Type Of Fee',
            type: 'item',
            url: '/admin/typeOfFee',
            icon: icons.AntDesignOutlined
        },
        {
            id: 'util-feedback',
            title: 'Physiotherapist Feedback',
            type: 'item',
            url: '/admin/feedback',
            icon: icons.MessageOutlined
        }
    ]
};

export default utilities;
