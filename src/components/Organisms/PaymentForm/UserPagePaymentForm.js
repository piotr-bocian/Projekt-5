import { BodyWrapper } from '../AdoptionVisit/UserPageVisitForm.style';
import { NavWrapper, PageWrapper } from '../../Organisms/AdoptionVisit/UserPageVisitForm.style';
import PaymentForm from './PaymentForm';
import BackButton from '../../Atoms/UserNavigationPage/BackButton';

const UserPagePaymentForm = () => {
    return (
        <PageWrapper>
            <NavWrapper>
                <div><BackButton link={{link:"/useraccount"}}/></div>
                <h2> Wesprzyj schronisko </h2>
            </NavWrapper>
            <BodyWrapper>
                <PaymentForm />
            </BodyWrapper>
        </PageWrapper>
    );
};

export default UserPagePaymentForm;