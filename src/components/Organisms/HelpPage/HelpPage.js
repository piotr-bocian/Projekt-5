import {React, useState} from 'react';
import { PageWrapper, Wrapper, Step, ButtonWrapper, iconStyle} from './HelpPage.style';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import PetsIcon from '@material-ui/icons/Pets';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PaymentForm from '../PaymentForm/PaymentForm';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
      backgroundColor: 'white',
      height: '10vh',
      width: '25vw',
      fontSize: '1.5em',
      fontFamily: 'Montserrat, sans-serif',
      marginTop: '2em',
      padding: '10px',
      border: '1px solid #0292C9',
      letterSpacing: '0.1em',
      boxShadow: '0px 4px 4px #0292C9',
      cursor: 'pointer',
      '&:focus': {
        outline: 'none',
      }
    } 
  }));

const HelpPage = () => {

    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        
            <PageWrapper>
                <h2>JAK POMÓC?</h2>
                <Wrapper>
                    <Step>
                        <AccountCircleIcon style={iconStyle} />
                        <h4>Wolontariat w schronisku</h4>
                        <p>
                            Jeśli jesteś pełnoletni (bądź masz zgodę prawnego opiekuna i więcej niż 16 lat) możesz dołączyć do naszego zespołu.<br />
                            Szukamy osób, które będą zajmować się psami i kotami, wyprowadzać naszych podopiecznych na spacery i promować schronisko w mediach społecznościowych. <br />
                            Żeby do nas dołączyć załóż konto i wypełnij formularz wolontariusza. <br />
                        </p>
                    </Step>
                    <Step>
                        <PetsIcon style={iconStyle}/>
                        <h4>POMOC RZECZOWA</h4>
                        <p>
                            Nasze schronisko w dużej mierze polega na hojności kochających zwierzaki daroczyńców. <br />
                            Jednym ze sposobów pomocy jest dostarczenie do schronika dobrej jakości karmy, koców, zabawek i innych produktów. <br />
                            Jeśli chcesz dowiedzieć się więcej na temat bieżących potrzeb naszych podopiecznych - zapraszamy do kontaktu:)<br />
                        </p>
                    </Step>
                    <Step>
                        <CardGiftcardIcon style={iconStyle}/>
                        <h4>POMOC FINANSOWA</h4>
                        <p>
                            Nasi podopieczni trafiając do schroniska niejednokrotnie wymagają leczenia weterynaryjnego, niektóre zwierzaki wymagają stałej opieki weterynaryjnej lub leków. <br />
                            Opieka nad tymi zwierzakami wymaga często znacznych nakładów finansowych. Podobnie specjalistyczne karmy i regularne naprawy schroniska. Jeśli możesz pomóc wesprzyj nas klikajac w poniższy przycisk. <br />
                        </p>
                    </Step>
                </Wrapper>
                <ButtonWrapper>
                <button type="button" onClick={handleOpen} className={classes.button}>
              Wykonaj przelew dla schroniska
            </button>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
               >
                 <Fade in={open}>
                  <PaymentForm></PaymentForm>
                </Fade>
               </Modal>
                </ButtonWrapper>
            </PageWrapper>

    );
};

export default HelpPage;