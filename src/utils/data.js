import { MdContacts, MdCreditCard, MdDeliveryDining, MdOutlineComment } from 'react-icons/md'
import bannerImg from '../img/huge.png';
import catImg1 from '../img/smartphones.jpg'
import catImg2 from '../img/tv.jpg'
import catImg3 from '../img/beats.jpg'
import pro1 from '../img/router.png'
import pro2 from '../img/dell.jpeg'
import pro3 from '../img/stv.jpg'
import pro4 from '../img/macbook13.jpeg'
import pro5 from '../img/ip8.jpeg'
import pro6 from '../img/exclusive.png'
export const whyData = [
    {
        id: 1,
        Icon: <MdDeliveryDining className='w-ico'/>,
        title: 'Free Delivery',
        desc: 'For all orders over $5'
    },
    {
        id: 2,
        Icon: <MdCreditCard className='w-ico'/>,
        title: 'Safe Payment',
        desc: '100% secure payment'
    },
    {
        id: 3,
        Icon: <MdOutlineComment className='w-ico'/>,
        title: '24 / 7 Help Center',
        desc: 'Dedicated 24/7 support'
    },
    {
        id: 4,
        Icon: <MdContacts className='w-ico'/>,
        title: 'Friendly Services',
        desc: 'Dedicated 24/7 support'
    }
]

export const heroSlideData = [
    {
        id: 1,
        imgSrc: bannerImg,
        name: 'banner-a'
    },
    {
        id: 2,
        imgSrc: bannerImg,
        name: 'banner-a'
    }
]

export const topCat = [
    {
        id: 1,
        imgSrc: catImg1,
        cat: 'Phones & Accessories'
    },
    {
        id: 2,
        imgSrc: catImg2,
        cat: 'TV & Audio'
    },
    {
        id: 3,
        imgSrc: catImg3,
        cat: 'Phones & Accessories'
    },
    {
        id: 4,
        imgSrc: catImg1,
        cat: 'Electronics'
    }
]

export const productData = [
    {
        id: 1,
        proName: 'WiFi Router',
        imgSrc: pro1,
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla vitae id incidunt alias corporis unde, iusto assumenda quas rem laboriosam harum sunt quisquam architecto sapiente cumque, quam quibusdam. Dolorum, temporibus?',
        price: 90
    },
    {
        id: 2,
        proName: 'Dell Latitude E6430',
        imgSrc: pro2,
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla vitae id incidunt alias corporis unde, iusto assumenda quas rem laboriosam harum sunt quisquam architecto sapiente cumque, quam quibusdam. Dolorum, temporibus?',
        price: 90
    },
    {
        id: 3,
        proName: 'Asano Smart TV',
        imgSrc: pro3,
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla vitae id incidunt alias corporis unde, iusto assumenda quas rem laboriosam harum sunt quisquam architecto sapiente cumque, quam quibusdam. Dolorum, temporibus?',
        price: 90
    },
    {
        id: 4,
        proName: 'Macbook Air 13Pro',
        imgSrc: pro4,
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla vitae id incidunt alias corporis unde, iusto assumenda quas rem laboriosam harum sunt quisquam architecto sapiente cumque, quam quibusdam. Dolorum, temporibus?',
        price: 90
    },
    {
        id: 5,
        proName: 'Apple iPhone 8',
        imgSrc: pro5,
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla vitae id incidunt alias corporis unde, iusto assumenda quas rem laboriosam harum sunt quisquam architecto sapiente cumque, quam quibusdam. Dolorum, temporibus?',
        price: 90
    },
    {
        id: 6,
        proName: 'WiFi Router',
        imgSrc: pro6,
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla vitae id incidunt alias corporis unde, iusto assumenda quas rem laboriosam harum sunt quisquam architecto sapiente cumque, quam quibusdam. Dolorum, temporibus?',
        price: 90
    }
]