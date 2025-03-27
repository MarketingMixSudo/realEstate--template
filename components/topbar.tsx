import { Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import { Global } from '@/lib/schemas'

const Topbar = ({ name, address, city, email, phone }: Global) => {
    return (
        <div className='bg-black flex justify-between items-center text-font-light px-6 py-1.5 text-sm'>
            <div className='flex justify-center items-center gap-4'>
                <h2>{name}</h2>

                <div className='flex justify-center items-center gap-1'>
                    <MapPin className='size-4' />
                    <h3>
                        {address}, {city}
                    </h3>
                </div>
            </div>

            <div className='flex justify-between items-center gap-6'>
                <Link href={`mailto:${email}`} className='flex justify-center items-center gap-1'>
                    <Mail className='size-4' />
                    {email}
                </Link>
                <Link href={`tel:${phone}`} className='flex justify-center items-center gap-1'>
                    <Phone className='size-4' />
                    {phone}
                </Link>
            </div>
        </div>
    )
}

export default Topbar