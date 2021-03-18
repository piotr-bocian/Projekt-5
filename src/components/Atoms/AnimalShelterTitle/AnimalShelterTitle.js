import styled from 'styled-components';
import animalShelterTitle from '../../../assets/logo/animalShelterTitle.png';
import pawTitle from '../../../assets/logo/pawTitle.png';

const AnimalShelterTitle = styled.div`
  background: url(${animalShelterTitle});
  background-repeat: no-repeat;
  position: absolute;
  width: 407px;
  height: 88px;
  left: 246px;
  top: 39px;
`;

const PawTitle = styled.div`
  background: url(${pawTitle});
  background-repeat: no-repeat;
  position: absolute;
  width: 53px;
  height: 54px;
  left: 490px;
  top: 40px;
`;

const ShelterTitle = () => (
  <div>
    <AnimalShelterTitle />
    <PawTitle />
  </div>
);

const GridItemTitle = styled(ShelterTitle)`
  grid-column: 1/2;
`;
export default GridItemTitle;
