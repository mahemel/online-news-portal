import Header from '@/components/shared/Header';
import { roboto } from '../layout';

const AuthLayout = ({ children }) => {
    return (
        <div className={roboto.className}>
            <Header></Header>
            {children}
        </div>
    );
};

export default AuthLayout;