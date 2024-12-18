'use client';

import Link from 'next/link';
import '../styles/header.css'
import Logo from '../icon/Logo.svg'
import Arrow from '../icon/Down_arrow.svg'
import HamburgerMenu from '../components/HamburgerMenu';

interface NavLink {
    label: string;
    href: string;
}

interface HeaderProps {
    title?: string;
    links?: NavLink[];
}

const Header: React.FC<HeaderProps> = ({ links }) => {
    return (
        <header className="header-blk">
            <div className="sub-blk">
                <div>
                    <HamburgerMenu />
                    <div><Logo /></div></div>

                {/* Navigation Links */}
                <nav className="nav-blk">
                    {links && links.length > 0 ? (
                        links.map((link, index) => (
                            <Link key={index} href={link.href || '#'}>
                                <span className="text-white hover:underline cursor-pointer">
                                    {link.label}
                                </span>
                            </Link>
                        ))
                    ) : (
                        <>
                            <Link href="#">
                                <span>Referral Hub</span>
                            </Link>
                            <Link className="flex" href="#">
                                <span >Help and advice </span>  <Arrow />
                            </Link>
                            <Link className="flex" href="#">
                                <span >Professional area</span> <Arrow />
                            </Link>
                            <Link className="flex" href="#">
                                <span >Get urgent help </span> <Arrow />
                            </Link>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;
