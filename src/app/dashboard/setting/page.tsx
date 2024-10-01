
import { Container, Typography } from '@mui/material';
// import LanguageSwitcher from '../public/ButtonChengeLang';
// import Debug from '../components/debugpanel';
import Switch from '@mui/material/Switch';
// import useDebugStore from '../store/DebugStore'; // Імпортуємо сховище
import Accordion from '@mui/material/Accordion';
// import { useRouter } from 'next/router';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { useTranslations } from 'next-intl';
// import { FaArrowLeft } from "react-icons/fa";




const AccordionStyle = {
    width: '100%',
}

const SettingPage = () => {
    const  t  = useTranslations();
    // @ts-ignore
    // const isOpen = useDebugStore((state) => state.isOpen); // Отримуємо стан
    // // @ts-ignore
    // const toggleOpen = useDebugStore((state) => state.toggleOpen); // Отримуємо функцію для зміни стану
    // @ts-ignore
    // const router = useRouter();

    return (
        <>
            <Button
                // onClick={()=>  router.push('home')}
                sx={{ color: '#000000' }}
            >
                {/* <FaArrowLeft size={30} /> */}
            </Button>
            <Container>
                <Typography variant="h2" noWrap component="p" sx={{ marginTop: '100px', marginLeft: '30%' }}>
                {t('setting.Settings')}
                </Typography>
                <Accordion defaultExpanded sx={{ ...AccordionStyle }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                         {t('setting.changeL')}
                    </AccordionSummary>
                    <AccordionDetails>
                        <div style={{ float: 'right' }}>
                        {/* <LanguageSwitcher  /> */}

                        </div>
                        
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ ...AccordionStyle }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                             {t('setting.DebugP')}
                    </AccordionSummary>
                    <AccordionDetails>

                        <Switch
                            // checked={isOpen}
                            // onChange={toggleOpen}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                    </AccordionDetails>
                </Accordion>
              
            </Container>
            {/* <Debug open={isOpen} /> */}
        </>
    );
};

export default SettingPage;
