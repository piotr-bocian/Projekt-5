import { PageWrapper, Wrapper, Step, ButtonWrapper, iconStyle} from './AdoptionVisitPage.style';
import Link from "@material-ui/core/Link";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PetsIcon from '@material-ui/icons/Pets';
import AssignmentIcon from '@material-ui/icons/Assignment';

import VisitForm from './AdoptionVisitForm';

const AdoptionVisitPage = () => {
    let url = `${window.location.href.slice(0, -9)}/animals`
    return (
        
            <PageWrapper>
                <h2>PROCES ADOPCYJNY</h2>
                <Wrapper>
                    <Step>
                        <AccountCircleIcon style={iconStyle} />
                        <h4>Przygotowanie</h4>
                        <p>
                            Adoptować zwierzę może jedynie osoba pełnoletnia, która posiada przy sobie dowód osobisty (lub paszport). <br />
                            Aby adoptować psa, musisz mieć przy sobie smycz i obrożę dla niego, dowód osobisty. <br />
                            Do adopcji kota niezbędny jest transporter do przenoszenia zwierzaka i dowód osobisty. <br />
                        </p>
                    </Step>
                    <Step>
                        <AssignmentIcon style={iconStyle}/>
                        <h4>Wizyta</h4>
                        <p>
                            Przychodząc do nas zarezerwuj sobie kilka godzin na oglądanie i poznanie naszych zwierząt. <br />
                            Zawsze możesz podpytać opiekunów o konkretnego psa bądź kota lub sprawdzić informacje o zwierzaku <br />
                            w zakładce - <Link href={url} ><span>ZWIERZĘTA</span></Link> i tam zarezerwować wizytę adopcyjną dla konkretnego zwierzaka. <br />
                        </p>
                    </Step>
                    <Step>
                        <PetsIcon style={iconStyle}/>
                        <h4>Adopcja</h4>
                        <p>
                            Z wybranym kotem bądź psem przyjdź do Biura Adopcji. Wypełnij ankietę przedadopcyjną, po czym przekaż ją Pracownikowi tam pracującemu. <br />
                            Po zaakceptowaniu treści ankiety podpiszesz umowę adopcyjną, do której spisania potrzebny jest Twój dowód osobisty. <br />
                        </p>
                    </Step>
                </Wrapper>
                <ButtonWrapper>
                    <VisitForm />
                </ButtonWrapper>
            </PageWrapper>

    );
};

export default AdoptionVisitPage;