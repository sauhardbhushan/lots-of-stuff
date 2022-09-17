import logo from '../../logo.svg'
import './GalleryQueue.css'
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import {useRef} from "react";

export default function GalleryQueue() {

    const galleryRef = useRef(null);
    const isVisible = useIntersectionObserver(galleryRef);
    return (
        <div className="gallery-queue" ref={galleryRef}>
            <img src={logo} className={isVisible ? 'logo logo--visible' : 'logo'} />
            <img src={logo} className={isVisible ? 'logo logo--visible' : 'logo'} />
            <img src={logo} className={isVisible ? 'logo logo--visible' : 'logo'} />
        </div>
    )
}
