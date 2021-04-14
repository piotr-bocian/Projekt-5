import { BodyWrapper } from '../AdoptionVisit/UserPageVisitForm.style';
import { NavWrapper, PageWrapper } from '../../Organisms/AdoptionVisit/UserPageVisitForm.style';
import VolunteerForm from './VolunteerForm';
import BackButton from '../../Atoms/UserNavigationPage/BackButton';

const UserPageVolunteerForm = () => {
    return (
        <PageWrapper>
            <NavWrapper>
                <div><BackButton link={{link:"/useraccount"}}/></div>
                <h2> Formularz Wolontariusza </h2>
            </NavWrapper>
            <BodyWrapper>
                <VolunteerForm />
            </BodyWrapper>
        </PageWrapper>
    );
};

export default UserPageVolunteerForm;