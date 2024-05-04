import { redirect } from 'next/navigation';
import { sendEmailToken } from '../../../utils/accounts';

interface VerifyParams {
    searchParams: {
        auth: string;
    };
}

export default function Page(params: VerifyParams) {
    const x = sendEmailToken(params.searchParams.auth);
    console.log(x);
    if (!sendEmailToken(params.searchParams.auth)) {
        redirect('/account');
    }
    return (
        <div>
            <div></div>
        </div>
    );
}
