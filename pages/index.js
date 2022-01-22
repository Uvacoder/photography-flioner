import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import HoverVideoPlayer from 'react-hover-video-player';
import React, { useEffect, useState } from 'react';
import Video from '../components/video2';
import Photos from '../components/photos';
import Socials from '../components/socials';

export default function Home() {
    const [isShown, setIsShown] = useState(false);
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className={utilStyles.paddingBoth}>
                <a href='/work/Music-Visualizers-And-3D-Work'>
                    <Video
                        videourl='https://res.cloudinary.com/ds5o5hlrl/video/upload/v1642414331/3D_Music_Visualizer_ibmnba.mp4'
                        thumburl='https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642468821/3D%20Thumbnails/3D_Visualizer_Thumb_hehg2a.jpg'
                        pagelink='/work/Music-Visualizers-And-3D-Work'
                        descr='Music Visualizers And 3D Work'
                    />
                </a>
            </div>

            <div className={utilStyles.paddingBottom}>
                <a href='/work/Live-Music-Video-Coverage'>
                    <Video
                        videourl='https://res.cloudinary.com/ds5o5hlrl/video/upload/v1642415771/Brunch_OFF_Studios_Aftermovie_dxqklb.mp4'
                        thumburl='https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642823570/Live%20Thumbs/Brunch_Off_Studios_Aftermovie_glviut.jpg'
                        pagelink='/work/Live-Music-Video-Coverage'
                        descr='Live Music Video Coverage'
                    />
                </a>
            </div>

            <div
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
                className={utilStyles.contContainer}
            >
                <div className={utilStyles.portraitContainer}>
                    <div
                        className={
                            isShown
                                ? utilStyles.portraitMenu
                                : utilStyles.portraitMenu2
                        }
                    >
                        <Link href='/work/Portrait-And-Fashion-Photography'>
                            Concert Photography
                        </Link>
                    </div>
                    <a
                        href='/work/Concert-Photography'
                        className={
                            isShown
                                ? utilStyles.portraitEquals
                                : utilStyles.portraitEquals2
                        }
                    >
                        <img src='https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642826512/Concert%20Photography/B_W1-min_vhfjb3.jpg' />
                    </a>

                    <a
                        href='/work/Concert-Photography'
                        className={
                            isShown
                                ? utilStyles.portraitEqualsC
                                : utilStyles.portraitEqualsC2
                        }
                    >
                        <img src='https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642826512/Concert%20Photography/B_W2-min_fgskmb.jpg' />
                    </a>
                    <a
                        href='/work/Concert-Photography'
                        className={
                            isShown
                                ? utilStyles.portraitEquals
                                : utilStyles.portraitEquals2
                        }
                    >
                        <img src='https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642826522/Concert%20Photography/b_w4-min_nxhx9q.jpg' />
                    </a>
                </div>
            </div>

            <Photos></Photos>
            <Socials></Socials>
        </Layout>
    );
}

/*
      <div className={utilStyles.player}>
        <div className={utilStyles.videoMenu}>
          <Link href="/work/Music-Visualizers-And-3D-Work">
            Music Visualizers And 3D Work
          </Link>
        </div>
        <HoverVideoPlayer
          videoSrc="https://res.cloudinary.com/ds5o5hlrl/video/upload/v1642414331/3D_Music_Visualizer_ibmnba.mp4"
          loop={true}
          muted={true}
          volume={0.2}
          pausedOverlay={
            <img
              src="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642468821/3D_Visualizer_Thumb_hehg2a.jpg"
              style={{ width: "100.2%", height: "100.5%", objectFit: "cover" }}
            />
          }
        />
      </div> */

/*           <a
            href="/work/Portrait-And-Fashion-Photography"
            className={utilStyles.portrait6to4}
          >
            <img src="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642326044/moda_3_l1uu2v.jpg" />
          </a>

          <a
            href="/work/Portrait-And-Fashion-Photography"
            className={utilStyles.portrait4to6}
          >
            <img src="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642378891/Moda_1_wyt57z.jpg" />
          </a> */
