"use client";
import { usePathname } from "next/navigation";
import {
    FacebookShareButton,
    FacebookIcon,
    WhatsappShareButton,
    WhatsappIcon,
    LinkedinShareButton,
    LinkedinIcon,
} from "next-share";

export default function ShareOption() {
    const path = usePathname();
    const currentUrl = `https://solimanhossain-assignment-8-khana-khazana.vercel.app${path}`;

    return (
        <div className="flex gap-2 absolute top-8">
            <FacebookShareButton url={currentUrl}>
                <FacebookIcon size={28} round />
            </FacebookShareButton>
            <WhatsappShareButton url={currentUrl}>
                <WhatsappIcon size={28} round />
            </WhatsappShareButton>
            <LinkedinShareButton url={currentUrl}>
                <LinkedinIcon size={28} round />
            </LinkedinShareButton>
        </div>
    );
}
