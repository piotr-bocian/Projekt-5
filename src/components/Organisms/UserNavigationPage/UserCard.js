import React from 'react';
import { UserCardWrapper, ButtonStyle } from './UserNavigationPage.style';
import NavigationTextWithRoutes from '../../Molecules/NavigationTextAndRoutes/NavigationTextAndRoutes';
import UserPageImage from '../../Atoms/UserNavigationPage/UserPageImage';


function UserCard({ props }) {
  return (
    <UserCardWrapper>
        <UserPageImage props={props}/>
        <div>
            <h2>
                MOJE DANE:
            </h2>
            <p>IMIĘ: {props.name}</p>
            <p>NAZWISKO: {props.lastName}</p>
            <p>E-MAIL: {props.email}</p>
            <p>TELEFON: {props.mobile}</p>
            <p>WOLONTARIUSZ: {props.isVolunteer ? ("TAK"):("NIE")}</p>
        </div>
        <ButtonStyle>
            <NavigationTextWithRoutes
                text={"EDYTUJ PROFIL"}
                route={"/editprofile"}
            />
        </ButtonStyle>
    </UserCardWrapper>
  );
};

export default UserCard;