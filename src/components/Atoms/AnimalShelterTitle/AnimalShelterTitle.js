import styled from 'styled-components';
import animalShelterTitle from '../../../assets/logo/animalShelterTitle.png';
import pawTitle from '../../../assets/logo/pawTitle.png';

// JEŻELI TEGO NIE UZYJEMY DO MEDIA QUERRY TO TRZEBA USUNĄĆ, NARAZIE NIE UŻYWANY KOMPONENT
const AnimalShelterTitle = styled.div`
  background: url(${animalShelterTitle});
  background-repeat: no-repeat;
  position: absolute;
  width: 407px;
  height: 88px;
  left: 246px;
  top: 39px;
  @media (max-width: 1090px) {
    display: none;
  }
`;

const PawTitle = styled.div`
  background: url(${pawTitle});
  background-repeat: no-repeat;
  position: absolute;
  width: 53px;
  height: 54px;
  left: 490px;
  top: 40px;
  @media (max-width: 1090px) {
    display: none;
  }
`;

const ShelterTitle = () => (
  <div>
    <AnimalShelterTitle />
    <PawTitle />
  </div>
);

const GridItemTitle = styled(ShelterTitle)`
  grid-row: 2/3;
  align-self: center;
`;
export default GridItemTitle;
