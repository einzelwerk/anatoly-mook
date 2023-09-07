'use client';

import React from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export const Login = () => {
    const { data: session, status } = useSession();

    return (
        <>
            <div className="flex flex-col gap-4">
                <Link href="/api/auth/signin">login</Link>
                <Link href="/api/auth/signout">log out</Link>
            </div>
            <p>Signed in as {session?.user.email}</p>
        </>
    );
};
