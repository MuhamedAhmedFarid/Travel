import {AiFillHome} from 'react-icons/ai'
import {AiFillExclamationCircle} from 'react-icons/ai'
import {RiContactsBookFill} from 'react-icons/ri'
import image1 from './images/1.jpg'
import image2 from './images/img.jpg'
import image3 from './images/night.jpg'
import image4 from './images/4.jpg'

export const links = [
    {
        name: "Home",
        path: '/',
        icon: <AiFillHome/>,
        cName:' nav__links'
    },
    {
        name: "About",
        path: '/about',
        icon: <AiFillExclamationCircle/>,
        cName: 'nav__links'
    },
    {
        name: "Service",
        path: '/service',
        icon: <AiFillHome/>,
        cName: 'nav__links'
    },
    {
        name: "Contact",
        path: '/contact',
        icon: <RiContactsBookFill/>,
        cName: 'nav__links'
    },
    
    {
        name:'SignUp',
        path: '/signup',
        cName: 'nav__links'
    }
];





export const mainPage = [
    {
        title: 'To Volcano, Batangas',
        info : "One of the most iconic views in Luzon Mt. Taal boasts a volcano inside a lake inside as islannd.if youfancy a closer look, the hike up to the catater is a mere 45 minutes, and is easy enough fo beginners. Guides will assis you of the way.and you'll ee the pecliar environment foun on an active volcano, including vocanic rocks asd steam vents.The hike van be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!",
        img1 : 'https://images.unsplash.com/photo-1610878180933-123728745d22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FuYWRhJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        img2 : 'https://snapcanada.org/wp-content/uploads/2021/01/banff-4331689_1920_cropped-1.png'
    },
    {
        title: 'To Volcano, Batangas',
        info : "One of the most iconic views in Luzon Mt. Taal boasts a volcano inside a lake inside as islannd.if youfancy a closer look, the hike up to the catater is a mere 45 minutes, and is easy enough fo beginners. Guides will assis you of the way.and you'll ee the pecliar environment foun on an active volcano, including vocanic rocks asd steam vents.The hike van be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!",
        img1 : 'https://img-4.linternaute.com/0efC7-fKD0qAHCUcChtSVXT9Ego=/1500x/smart/43f787f117784c3fa9a928194bd91d5e/ccmcms-linternaute/12325430.jpg',
        img2 : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlMVkgkFxhz5wiNhRfKpT9CNQvMxfOShneIESM44Z0ONevSuPARenZW55oU2ZazeDcoXc&usqp=CAU'
    },
]