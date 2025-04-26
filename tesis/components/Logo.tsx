import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const Logo = ({className}: {className?: string}) => {
    return (
        <Link href={'/'}>
            <h2 className={cn("text-2xl text-pink-300 tracking-wider uppercase hover:text-pink-500", className)}>
                L&V <span> Beauty</span>
            </h2>
        </Link>
    )
}

export default Logo
