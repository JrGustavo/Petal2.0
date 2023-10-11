import {  UsersIcon } from '@heroicons/react/20/solid'
import {GiGrowth} from "react-icons/gi";
import {AiFillPieChart} from "react-icons/ai";
import Image from "next/image";
import React from "react";

const features = [
    {
        name: 'Integración sencilla:',
        description:
            'Puedes conectar Petal en pocas horas por medio de nuestra API.',
        icon: AiFillPieChart,
    },
    {
        name: 'Aumento en los ingresos:',
        description: 'Obtenga un % de ganancias cuando tus aliados comerciales soliciten un crédito con Petal, ayuda a crecer tus comercios en tu plataforma.',
        icon: GiGrowth,
    },
    {
        name: 'Relaciones duraderas: :',
        description: 'Agrega nuevos comercios en tú plataforma creando relaciones duraderas ofreciendo crédito comercial.',
        icon: UsersIcon,
    },
]

export default function Example() {
    return (
        <div className="overflow-hidden bg-black py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-[#0070f3]">¿Cómo funciona Petal para plataformas B2B?</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Crece tu GMV con Petal</p>
                            <p className="mt-6 text-lg leading-8 text-white">
                                Petal ofrece infraestructura financiera de pila completa que se integra en plataformas B2B lo anterior permite añadir una nueva fuente de ingresos con los aliados comerciales que venden en tú plataforma.
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-white lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className="inline font-semibold text-[#0070f3]">
                                            <feature.icon className="absolute left-1 top-1 h-5 w-5 text-[#0070f3]" aria-hidden="true" />
                                            {feature.name}
                                        </dt>{' '}
                                        <dd className="inline">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <Image
                        src="/DashPetal.png"
                        alt="Plataforma Petal"
                        width={2432}
                        height={1442}
                        className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                    />
                </div>
            </div>
        </div>
    )
}
