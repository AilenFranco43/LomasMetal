import React from "react";
import styles from "./Footer.module.css";

//icons
import { FaInstagram } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer id="contacto" className={styles.footerContainer}>
      <div className={styles.containerSections}>
        <div className={`${styles.footerSection} ${styles.sectionLinks}`}>
          <ul>
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#catalogo">Productos</a>
            </li>
            <li>
              <a href="#contactos">Contacto</a>
            </li>
          </ul>
        </div>

        <div className={styles.contactoVisitanos}>
          <div className={`${styles.footerSection} ${styles.sectionContacto}`}>
            <h3 className={styles.sectionTitle}>Contacto</h3>
            <div className={styles.contactInfo}>
              <div className={styles.iconDescription}>
                <FiPhone className={styles.icon} />
                <p>42443830</p>
              </div>
              <div className={styles.iconDescription}>
                <FaWhatsapp className={styles.icon} />
                <p>1138187030</p>
              </div>
            </div>
          </div>

          <div className={`${styles.footerSection} ${styles.sectionVisitanos}`}>
            <h3 className={styles.sectionTitle}>Visitanos</h3>
            <div className={styles.containerSocialM}>
              <a
                href="https://www.instagram.com/lomas.metal?igsh=MTYzdm4zdDU5eXZ3NA=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className={styles.socialIcon} />
              </a>
              <a
                href="https://www.facebook.com/lomasmetal?ref=xav_profile_banners_global_v2_page_control&wtsid=rdr_00yWR0ODPLVFJB7kwt"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GrFacebookOption className={styles.socialIcon} />
              </a>
            </div>

            <div className={styles.containerUbication}>
              <div className={styles.iconDescription}>
                <FiMapPin className={styles.icon} />
                <p>Avenida alsina 2020, Lomas de Zamora, Buenos Aires 1832</p>
              </div>
            </div>
          </div>
        </div>

        {/* container de horarios de atencion */}
        <div className={`${styles.footerSection} ${styles.sectionHorarios}`}>
          <h3 className={styles.sectionTitle}>Horarios de atención</h3>
          <p>Lunes a Viernes: de 9:00 a 18:00hs.</p>
          <p>Sábados: de 9:00 a 14:00hs.</p>
        </div>
      </div>

      <p className={styles.footerCopyright}>
        © 2024 Lomas Metal. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
