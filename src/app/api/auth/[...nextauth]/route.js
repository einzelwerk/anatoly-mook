import NextAuth from 'next-auth';

import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';

import client from '@/api/client';

import ky from 'ky';
const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
            fetch('https://next.rue-spots.de/api/login', {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    username: 'ALLALALLA',
                    email: 'KEKEKEKEK',
                }),
            })
                .then((response) => response.json())
                .then((result) => {
                    console.log(result);
                    return true;
                })
                .catch((error) => {
                    console.error(error);
                });
            return true;
        },
    },
});

export { handler as GET, handler as POST };
