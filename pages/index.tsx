import type { NextPage } from "next";
import { PageCardSmall } from "@components/ui";
import React, { useEffect, useState } from "react";
import { useWindowScroll, useWindowSize } from "react-use";

const Home: NextPage = () => {
  const { width, height } = useWindowSize();
  const { x, y } = useWindowScroll();
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    if (Math.round(y / height) !== currentPage) {
      setCurrentPage(Math.round(y / height));
    }
  }, [y, height, currentPage]);

  useEffect(() => {
    console.log(currentPage);
  }, [currentPage]);

  return (
    <>
      <header className="IndexHeader">
        <div className="IndexHeader_Title">
          <div className="IndexHeader_TitleText">
            <p>Hi there👋</p>
            <h1>
              <span>I&apos;m</span>Yahiro NAKAMOTO.
            </h1>
            <p>
              デザインとテクノロジーを使って、
              <br />
              プロダクトをよりよくするお手伝いをさせていただいています。
            </p>
          </div>
          <div className="IndexHeader_TitleImage"></div>
        </div>

        <div className="IndexHeader_Background"></div>
      </header>

      <section className="AboutmeDesign">
        <div className="container">
          <div className="AboutmeDesign_Grid">
            <div className="AboutmeDesign_Content">
              <div className="AboutmeDesign_ContentTitle">
                <p>😎 About me</p>
                <h1>Design with Technology.</h1>
              </div>
              <p>
                コードの書けるデザイナーとして、新しいプロダクトを育てるお手伝いをしています。
                <br />
                ユーザーが求めるものはなんなのか。
                一緒に考え、作り上げていきたいと考えています。
              </p>
              <PageCardSmall
                title="株式会社カミナシ"
                description="2021年7月 -"
                imageUrl="/assets/logo/kaminashi.png"
              />
            </div>
            <div className="AboutmeDesign_Image"></div>
          </div>
        </div>
      </section>

      <section className="AboutmeProfile">
        <div className="container">
          <div className="AboutmeProfile_Grid">
            <div className="AboutmeProfile_Yahiro"></div>
            <div className="AboutmeProfile_Content">
              <div className="AboutmeProfile_Content_Profile">
                <h2 lang="ja">中本 八尋</h2>
                <p lang="en">Yahiro NAKAMOTO</p>
                <p>
                  2002年、富山県生まれ。武蔵野美術大学造形構想学部在学中。ものづくりへの興味をきっかけに、デザインやプログラミングに興味をもち、独学で習得。コミュニティ作りや動画制作などにも取り組む。
                </p>
              </div>
              <div className="AboutmeProfile_Content_Career">
                <h3>経歴</h3>
              </div>
              <div className="AboutmeProfile_Content_Award">
                <h3>受賞歴</h3>
                <div className="AboutmeProfile_Content_AwardGrid">
                  <PageCardSmall
                    title="最優秀賞(N高等学校部門)"
                    description="N予備校WEBアプリコンテスト2020冬"
                    imageUrl="/assets/logo/n-yobiko.png"
                  />
                  <PageCardSmall
                    title="協賛賞(NSD株式会社)"
                    description="PCNこどもプロコン 2017冬"
                    imageUrl="/assets/logo/pcn.png"
                  />
                </div>
              </div>
              <div className="AboutmeProfile_Content_Contact">
                <h3>興味がありますか？</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .AboutmeProfile {
          padding-top: 50px;
          padding-bottom: 50px;
          &_Grid {
            align-items: initial !important;
            @extend .AboutmeDesign_Grid;
          }
          &_Yahiro {
            width: 100%;
            aspect-ratio: 1/1;
            background: url("/assets/images/yahiro.png");
            background-size: cover;
            border-radius: 75px 150px 75px 75px;
            box-shadow: inset 0px 2px 1px -1px rgba(255, 255, 255, 0.8);
            filter: drop-shadow(-50px 50px 0px rgba(32, 188, 255, 0.1))
              drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.05));
          }
          &_Content {
            order: 2;
            margin-top: 50px;
            @extend .AboutmeDesign_Content;
            h2 {
              font-size: 32px;
              margin-bottom: 20px;
            }
            h3 {
              font-size: 24px;
              margin-bottom: 20px;
            }
            &_Profile {
              h2 {
                margin-bottom: 0px;
              }
              p[lang="en"] {
                font-size: 18px;
                margin-bottom: 32px;
                opacity: 0.5;
                font-family: "Inter";
              }
            }
            &_Career {
            }
            &_Award {
              &Grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                grid-gap: 20px;
              }
            }
          }
        }
        .AboutmeDesign {
          height: 100vh;
          padding-top: 50px;
          padding-bottom: 50px;

          &_Grid {
            height: calc(100vh - 100px);
            display: grid;
            grid-template-columns: 360px 1fr;
            gap: var(--mainNormalPaddingSize);

            align-items: end;
          }
          &_Content {
            height: fit-content;
            display: grid;
            gap: 50px;
            margin-bottom: 50px;

            &Title {
            }
          }
          &_Image {
            height: calc(100vh - 100px);
            background: linear-gradient(
              199.59deg,
              #20bcff 13.12%,
              #77d5fd 89.73%
            );
            box-shadow: 0px 10px 20px rgb(0 0 0 / 5%),
              inset 0px 2px 1px -1px rgb(255 255 255 / 80%);
            border-radius: 15vh 30vh 15vh 15vh;
          }
        }
        .container {
          padding-left: var(--mainNormalPaddingSize);
          padding-right: var(--mainNormalPaddingSize);
        }
        .IndexHeader {
          height: 100vh;
          position: relative;
          &::after {
            content: "";
            position: absolute;
            bottom: 40px;
            left: 50%;
            transform: translateX(-50%);
            width: 20vw;
            height: 4px;
            background: #fff;
            border-radius: 2px;
          }
          &_Background {
            content: "";
            height: 100vh;
            background: linear-gradient(180deg, #20bcff 67.79%, #60cfff 100%);
            border-radius: 0px 0px 100px 100px;
          }
          &_Title {
            width: 100%;
            position: absolute;
            bottom: 100px;
            padding: 0 var(--mainNormalPaddingSize);

            display: grid;
            grid-template-columns: 1fr 300px;
            gap: 24px;
            align-items: end;
          }
          &_TitleText {
            height: fit-content;
            display: grid;
            gap: 10px;

            color: white;
            filter: drop-shadow(0px 20px 20px rgba(0, 0, 0, 0.3));
          }
          &_TitleImage {
            width: 300px;
            height: 300px;
            background: linear-gradient(
              199.59deg,
              #ffffff 13.12%,
              rgba(255, 255, 255, 0.8) 89.73%
            );
            box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05),
              inset 0px 2px 1px -1px rgba(255, 255, 255, 0.8);
            border-radius: 75px 150px 75px 75px;
          }
        }
      `}</style>
      <style jsx global>{`
        p {
          font-size: 18px;
          margin: 0;
          line-height: 2;
          font-feature-settings: "palt";
          letter-spacing: 0.07em;
        }
        h1,
        h2,
        h3,
        h4 {
          font-weight: 400;
          margin: 0;
        }
        h1 {
          font-size: 60px;
          font-family: "Inter";
          span {
            font-size: 66%;
            padding-right: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default Home;
