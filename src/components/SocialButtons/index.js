import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faFacebook,
    faTwitter,
    faLinkedin,
    faWhatsapp,
    faPinterest
 } from "@fortawesome/free-brands-svg-icons"
import {
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    WhatsappShareButton,
    PinterestShareButton,
} from "react-share";

export default function SocialButtons({ id, title }) {
    const url = "https://giphy.com/gifs/"+id
    const styleClass = "social-share-btn" 
    const iconClass = "fs-3"

    return <>
        <div className="d-inline">
            <FacebookShareButton
                className={styleClass} 
                url={url}
                quote={title} >
                <FontAwesomeIcon className={iconClass} icon={faFacebook} />
            </FacebookShareButton>

            <TwitterShareButton
                className={styleClass} 
                url={url}
                title={title}>
                <FontAwesomeIcon className={iconClass} icon={faTwitter} />
            </TwitterShareButton>

            <WhatsappShareButton
                className={styleClass} 
                url={url}
                title={title}
                separator=":: ">
                <FontAwesomeIcon className={iconClass} icon={faWhatsapp} />
            </WhatsappShareButton>

            <LinkedinShareButton
                className={styleClass} 
                url={url}
                title={title}
                windowWidth={750}
                windowHeight={600}>
                <FontAwesomeIcon className={iconClass} icon={faLinkedin} />
            </LinkedinShareButton>

            <PinterestShareButton
                className={styleClass} 
                url={String(window.location)}
                media={url}
                windowWidth={1000}
                windowHeight={730}>
                <FontAwesomeIcon className={iconClass} icon={faPinterest} />
            </PinterestShareButton>

        </div>
    </>
}