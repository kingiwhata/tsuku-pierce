'use server';
import { redirect } from 'next/navigation';
import { sendEmailToken } from '../../../utils/accounts';

interface VerifyParams {
    searchParams: {
        auth: string;
    };
}

export default async function Page(params: VerifyParams) {
    const x = await sendEmailToken(params.searchParams.auth);
    console.log(x);
    if (!(await sendEmailToken(params.searchParams.auth))) {
        redirect('/account');
    }
    return (
        <div>
            <div></div>
        </div>
    );
}
