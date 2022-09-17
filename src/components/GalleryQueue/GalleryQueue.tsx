import logo from '../../logo.svg'
import './GalleryQueue.css'
import {useEffect, useRef, useState} from "react";
import {observe} from "web-vitals/dist/modules/lib/observe";

export default function GalleryQueue() {

    const galleryRef = useRef<any>(null);
    const [ isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            console.log(entry)
            setIsVisible(entry.isIntersecting);
        });

        if (galleryRef.current) observer.observe(galleryRef.current);

        return () => {
            if (galleryRef.current) observer.unobserve(galleryRef.current);
        }
    }, [galleryRef])

    return (
        <div className="gallery-queue" ref={galleryRef}>
            <img src={logo} className={isVisible ? 'logo logo--visible' : 'logo'} />
            <img src={logo} className={isVisible ? 'logo logo--visible' : 'logo'} />
            <img src={logo} className={isVisible ? 'logo logo--visible' : 'logo'} />
        </div>
    )
}
