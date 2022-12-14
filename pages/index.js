import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import React from "react";
import Video from "../components/video";
import { Photos, Photos2 } from "../components/photos";
import PhotosEquals from "../components/photos2";
import { Socials, BottomNameIndex } from "../components/socials";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta
          name="google-site-verification"
          content="54_CR_NP93RWiR-8MzxV7SPI1nF5FCOoLga-AhfmNE0"
        />
      </Head>

      <div className={utilStyles.paddingBottom}>
        <Video
          videourl="https://res.cloudinary.com/ds5o5hlrl/video/upload/v1643098478/3D_Music_Visualizer_Ico_Heal_FH_v1mmgb.mp4"
          thumburl="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1643097443/3D%20Thumbnails/3D_Vis_Thumb_00244_hlxq2h.jpg"
          pagelink="/work/Music-Visualizers-And-3D-Work"
          descr="Music Visualizers And 3D Work"
        />
      </div>

      <div className={utilStyles.paddingBottom}>
        <Video
          videourl="https://res.cloudinary.com/ds5o5hlrl/video/upload/v1642415771/Brunch_OFF_Studios_Aftermovie_dxqklb.mp4"
          thumburl="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642823570/Live%20Thumbs/Brunch_Off_Studios_Aftermovie_glviut.jpg"
          pagelink="/work/Live-Music-Video-Coverage"
          descr="Live Music Video Coverage"
        />
      </div>

      <PhotosEquals
        photo1="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642826512/Concert%20Photography/B_W1-min_vhfjb3.jpg"
        photo2="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642826512/Concert%20Photography/B_W2-min_fgskmb.jpg"
        photo3="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642826522/Concert%20Photography/b_w4-min_nxhx9q.jpg"
        description="Concert Photography"
        url="/work/Concert-Photography"
      ></PhotosEquals>

      <Photos
        photoWide="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642378891/Portrait%20and%20Fashion%20Photography/Moda_1_wyt57z.jpg"
        photoTall="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642326044/Portrait%20and%20Fashion%20Photography/moda_3_l1uu2v.jpg"
        description="Portrait & Fashion Photography"
        url="/work/Portrait-And-Fashion-Photography"
      ></Photos>

      <Photos2
        photoTall="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1660957981/Street%20Photography/Street_3_ewi7eg.jpg"
        photoWide="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1660957982/Street%20Photography/Street_thumb_eexrfi.jpg"
        description="Street Photography"
        url="/work/Street-Photography"
      ></Photos2>

      <Socials />
      <BottomNameIndex />
    </Layout>
  );
}
