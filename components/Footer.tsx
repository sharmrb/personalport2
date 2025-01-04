import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="light-bg flex justify-space">
            <span className="white">Copyright © {year} <Link href="/">Rishabh</Link> - All rights reserved.</span>
            <ul className="flex">
                <li>
                    <a href="https://www.facebook.com/Rishabh" target="_blank" rel="noreferrer">
                        <Image src="/icons/facebook.svg" width={24} height={24} alt="facebook-icon" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/Rishabh.codes" target="_blank" rel="noreferrer">
                        <Image src="/icons/instagram.svg" width={24} height={24} alt="instagram-icon" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/skanderRishabh" target="_blank" rel="noreferrer">
                        <Image src="/icons/linkedin.svg" width={24} height={24} alt="linkedin-icon" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Rishabh" target="_blank" rel="noreferrer">
                        <Image src="/icons/github.svg" width={24} height={24} alt="github-icon" />
                    </a>
                </li>
                <li>
                    <a href="https://youtube.com/Rishabh" target="_blank" rel="noreferrer">
                        <Image src="/icons/youtube.svg" width={24} height={24} alt="youtube-icon" />
                    </a>
                </li>
            </ul>
        </footer>
    )
}