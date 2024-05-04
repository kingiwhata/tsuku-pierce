import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { getCustomer } from './utils/accounts';

export async function middleware(request: NextRequest) {
    const isAuth = await getCustomer();
    if (!isAuth)
        return NextResponse.redirect(new URL('/account/register', request.url));
}

export const config = {
    matcher: '/account/',
};
