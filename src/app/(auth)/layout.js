import { roboto } from '../layout';
import Navbar from '@/components/shared/Navbar';

const AuthLayout = ({ children }) => {
    return (
        <div className={roboto.className}>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default AuthLayout;