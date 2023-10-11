import React from 'react';
import Image from "next/image";

interface FooterLink {
    name: string;
    href: string;
}

interface FooterSocialLink extends FooterLink {
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

interface FooterNavigation {
    solutions: FooterLink[];
    experiencia: FooterLink[];
    compañia: FooterLink[];
    legal: FooterLink[];
    social: FooterSocialLink[];
}

const navigation: FooterNavigation = {
    solutions: [
        { name: 'Para plataformas', href: '/' },
        { name: 'Para comercios', href: '/' },
    ],
    experiencia: [
        { name: 'Soporte', href: '/' },
        { name: 'Tarifas & Cobranzas', href: '/' },
    ],
    compañia: [
        { name: 'Nosotros', href: '#' },
        { name: 'Educación financiera', href: '#' },
    ],
    legal: [
        { name: 'Políticas de privacidad', href: '/' },
        { name: 'Estamos contratando', href: '/' },
    ],
    social: [
        {
            name: 'Twitter',
            href: '#',
            icon: (props) => (
                <svg fill="#0070f3" viewBox="250 250 250" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                        clipRule="evenodd"
                    >
                        <animate
                            attributeName="fill"
                            values="#0070f3; #ffffff"
                            dur="0.3s"
                            repeatCount="1"
                            begin="mouseover"
                        />
                        <animate
                            attributeName="fill"
                            values="#ffffff; #0070f3"
                            dur="0.3s"
                            repeatCount="1"
                            begin="mouseout"
                        />
                    </path>
                </svg>
            ),
        },
        {
            name: 'Linkedin',
            href: '#',
            icon: (props) => (
                <svg fill="#0070f3" viewBox="250 250 250" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"
                        clipRule="evenodd"
                    >
                        <animate
                            attributeName="fill"
                            values="#0070f3; #ffffff"
                            dur="0.3s"
                            repeatCount="1"
                            begin="mouseover"
                        />
                        <animate
                            attributeName="fill"
                            values="#ffffff; #0070f3"
                            dur="0.3s"
                            repeatCount="1"
                            begin="mouseout"
                        />
                    </path>
                </svg>
            ),
        },
        {
            name: 'GitHub',
            href: '#',
            icon: (props) => (
                <svg fill="#0070f3" viewBox="250 250 250" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"

                        clipRule="evenodd"
                    >
                        <animate
                            attributeName="fill"
                            values="#0070f3; #ffffff"
                            dur="0.3s"
                            repeatCount="1"
                            begin="mouseover"
                        />
                        <animate
                            attributeName="fill"
                            values="#ffffff; #0070f3"
                            dur="0.3s"
                            repeatCount="1"
                            begin="mouseout"
                        />
                    </path>
                </svg>
            ),
        },
    ],
};

const Footer: React.FC = () => (
    <footer className="bg-black" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only"></h2>
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                <div className="space-y-8 xl:col-span-1">
                    <Image
                        src="/PetalLogoWhite.png"
                        width={120}
                        height={120}
                        alt="Logo de Petal"
                    />
                    <p className="text-base text-white">
                        Infraestructura financiera integrada que ayuda a las Pymes a crecer.
                    </p>
                    <div className="flex space-x-6">
                        {navigation.social.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-gray-400 hover:text-gray-500"
                            >
                                <span className="sr-only">{item.name}</span>
                                <item.icon className="h-6 w-6" aria-hidden="true" />
                            </a>
                        ))}
                    </div>
                </div>
                <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <h3 className="text-base font-medium text-[#0070f3]">Soluciones</h3>
                            <ul role="list" className="mt-4 space-y-4">
                                {navigation.solutions.map((item) => (
                                    <li key={item.name}>
                                        <a
                                            href={item.href}
                                            className="text-base text-white hover:text-[#0070f3]"
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-12 md:mt-0">
                            <h3 className="text-base font-medium text-[#0070f3]">Experiencia al cliente</h3>
                            <ul role="list" className="mt-4 space-y-4">
                                {navigation.experiencia.map((item) => (
                                    <li key={item.name}>
                                        <a
                                            href={item.href}
                                            className="text-base text-white hover:text-[#0070f3]"
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <h3 className="text-base font-medium text-[#0070f3]">Compañia</h3>
                            <ul role="list" className="mt-4 space-y-4">
                                {navigation.compañia.map((item) => (
                                    <li key={item.name}>
                                        <a
                                            href={item.href}
                                            className="text-base text-white hover:text-[#0070f3]"
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-12 md:mt-0">
                            <h3 className="text-base font-medium text-[#0070f3]">Transparencia</h3>
                            <ul role="list" className="mt-4 space-y-4">
                                {navigation.legal.map((item) => (
                                    <li key={item.name}>
                                        <a
                                            href={item.href}
                                            className="text-base text-white hover:text-[#0070f3]"
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-12 border-t pt-8 text-white">
                <p className="text-base text-white xl:text-center">
                    &copy; Petal opera en Colombia bajo Petal S.A.S. Todos los derechos reservados.
                </p>
            </div>
        </div>
    </footer>
);

export default Footer;