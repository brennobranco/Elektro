import instagram from './img/insta.svg'
import facebook from './img/facebook.svg'
import linkedin from './img/linkedin.svg'
import tiktok from './img/tiktok.svg'
import twitter from './img/twitter.svg'

interface Links {
    img: string;
    alt: string
}

export const FooterLinks: Links[] = [
    {
        img: facebook,
        alt: "Facebook"
    },
    {
        img: instagram,
        alt: "Instragram"
    },
    {
        img: tiktok,
        alt: "TikTok"
    },
    {
        img: twitter,
        alt: "Twitter"
    },
    {
        img: linkedin,
        alt: "Linkedin"
    },
]