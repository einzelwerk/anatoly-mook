import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';

import client from '@/api/client';

import ky from 'ky';

export const authOptions = {};
