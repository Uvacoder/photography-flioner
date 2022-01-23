import Link from "next/link";
import React, { useState } from "react";
import utilStyles from "../styles/utils.module.css";

const Photos = ({ photoTall, photoWide, url, description }) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      className={utilStyles.contContainer}
    >
      <div className={utilStyles.portraitContainer}>
        <div
          className={
            isShown ? utilStyles.portraitMenu : utilStyles.portraitMenu2
          }
        >
          <Link href={url}>{description}</Link>
        </div>
        <a
          href={url}
          className={
            isShown ? utilStyles.portrait6to4_2 : utilStyles.portrait6to4
          }
        >
          <img src={photoTall} />
        </a>

        <a
          href={url}
          className={
            isShown ? utilStyles.portrait4to6_2 : utilStyles.portrait4to6
          }
        >
          <img src={photoWide} />
        </a>
      </div>
    </div>
  );
};

export default Photos;
