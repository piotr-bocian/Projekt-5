import { BodyWrapper } from '../AdoptionVisit/UserPageVisitForm.style';
import { NavWrapper, PageWrapper } from '../../Organisms/AdoptionVisit/UserPageVisitForm.style';
import EditProfile from './EditProfile';
import BackButton from '../../Atoms/UserNavigationPage/BackButton';

const UserPageEditProfile = ({ link }) => {
    return (
        <PageWrapper>
            <NavWrapper>
                <div><BackButton link={link}/></div>
                <h2> Edytuj profil </h2>
            </NavWrapper>
            <BodyWrapper>
                <EditProfile />
            </BodyWrapper>
        </PageWrapper>
    );
};

export default UserPageEditProfile;