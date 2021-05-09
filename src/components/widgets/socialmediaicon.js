import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faWhatsapp,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function SocialMediaIcons() {
  return (
        <div className="container">
            <div className="conntainer-heading">
                <p>Find us on Social Media!</p>
            </div>
            <div className="social-container">
                <a
                    href="https://www.facebook.com/"
                    className="facebook social"
                >
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a
                    href="https://www.youtube.com/"
                    className="youtube social"
                >
                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
                <a
                    href="https://www.instagram.com/"
                    className="instagram social"
                >
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a 
                    href="https://www.whatsapp.com/?lang=en" 
                    className="whatsapp social"
                >
                    <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                </a>
            </div>
    </div>
  );
}
