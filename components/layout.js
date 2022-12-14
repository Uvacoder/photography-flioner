import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import NavBar from "./navbar";
import VolumeSlider from "./volumeslider";

const name = "Fabian Lioner";
export const siteTitle = "Fabian Lioner";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link
          rel="icon"
          href="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1643859382/Icons/LNR_uiyfym.ico"
        />
        <meta
          name="Online Portfolio"
          content="My Personal Photography & 3D Work Portfolio - Music visualizers, animated music videos, lyric videos, concert photography, music festival aftermovies, recording live sessions, fahsion photography, portrait photography and more!"
        />
      </Head>

      {home && (
        <>
          <header className={styles.header}>
            <h1 className={utilStyles.headingLg}>{name}</h1>
          </header>

          <NavBar
            // Button 1
            btn1="Work"
            // Dropdown Option 1
            drop1="Music Visualizers And 3D Work"
            dropurl1="/work/Music-Visualizers-And-3D-Work"
            // Dropdown Option 2
            drop2="Live Music Video Coverage"
            dropurl2="/work/Live-Music-Video-Coverage"
            // Dropdown Option 3
            drop3="Concert Photography"
            dropurl3="/work/Concert-Photography"
            // Dropdown Option 4
            drop4="Portrait & Fashion Photography"
            dropurl4="/work/Portrait-And-Fashion-Photography"
            //
            // Dropdown Option 4
            drop5="Street Photography"
            dropurl5="/work/Street-Photography"
            //
            // Button 1
            btn2="About Me"
            url2="about-me"
            // Button 3
            btn3="Contact"
            url3="contact"
          />

          <VolumeSlider />
        </>
      )}

      <main>{children}</main>
      {!home && <VolumeSlider />}
    </div>
  );
}
