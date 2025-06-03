import {useEffect, useRef} from "react";

function OffersAnimation() {
    const offerRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, i) => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                        offerRefs.current.forEach((el, idx) => {
                            setTimeout(() => {
                                el?.classList.add("show");
                            }, idx * 500);
                        });
                        observer.disconnect();
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        offerRefs.current.forEach((el) => el && observer.observe(el));

        return () => observer.disconnect();
    }, [])
}