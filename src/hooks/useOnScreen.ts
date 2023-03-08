import { useEffect, useState } from "react"

export default function useOnScreen(ref: React.RefObject<HTMLElement>[]) {

    const [isIntersecting] = useState();

    const observer = new IntersectionObserver(
        (entries) => {
            let cont = 0;
            for (var i = entries.length - 1; i >= 0; i--) {
                const id = entries[i].target.getAttribute("data-id");
                const a = document.querySelector(`#${id}`);
                if (entries[i].isIntersecting) {
                    if (cont === 0) {
                        document.querySelectorAll("header li").forEach(el => el.classList.remove("header__activo"));
                        a?.classList.add("header__activo");
                        cont++;
                    } else {
                        break;
                    }

                } else {
                    a?.classList.remove("header__activo");
                }
            }
        }
        , {
            rootMargin: "-300px 0px -300px 0px",
        }
    )

    useEffect(() => {
        ref.forEach(element => {
            observer.observe(element.current as any)
        });
    })
    return isIntersecting
}