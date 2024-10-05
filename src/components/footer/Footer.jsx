import React from 'react';
import styles from './Footer.module.css';

//icons
import { FaInstagram } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer id='contacto' className={styles.footerContainer}>
        <div className={styles.footerSection}>
            <ul>
                <li><a href="#inicio"></a></li>
                <li><a href="#productos"></a></li>
                <li><a href="#contactos"></a></li>
            </ul>
        </div>
        <div className={styles.footerSection}>
            <h2 className={styles.footerTitle}>Contacto</h2>
            <div className={styles.iconDescription}>
                <FiPhone className={styles.icon}/>
                <p className={styles.footerText}>42443830</p>
            </div>
            <div className={styles.iconDescription}>
                <FaWhatsapp className={styles.icon}/>
                <p className={styles.footerText}>1138187030</p> 
            </div>
        </div>
        <div className={styles.footerSection}>
            <h2 className={styles.footerTitle}>Visítanos</h2>
            <div className={styles.containerSocialM}>
                <a href="https://www.instagram.com/lomas.metal?igsh=MTYzdm4zdDU5eXZ3NA==" target="_blank">
                    <FaInstagram className={styles.socialIcon}/>
                </a>
                <a href="https://www.facebook.com/lomasmetal?ref=xav_profile_banners_global_v2_page_control&wtsid=rdr_00yWR0ODPLVFJB7kwt" target="_blank">
                <GrFacebookOption className={styles.socialIcon}/>
                </a>
            </div>
            <div className={styles.iconDescription}>
                <FiMapPin className={styles.icon}/>
                <p>Avenida alsina 2020, Lomas de Zamora, Buenos Aires 1832</p>
            </div>
        </div>
        <div className={styles.footerSection}>
            <h2 className={styles.footerTitle}>Horarios de atención</h2>
            <p className={styles.footerText}>
                Lunes a Viernes: de 9:00 a 18:00hs.
            </p>
            <p className={styles.footerText}>
                Sábados: de 9:00 a 14:00hs.
            </p>
        </div>
        <p className={styles.footerCopyright}>© 2024 Lomas Metal. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;
