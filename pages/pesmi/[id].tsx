import ChordsContentImage from "../../components/chords/ChordsContentImage";
import useSWR from "swr";
import { useEffect, useState } from "react";
import DefaultErrorPage from "next/error";
import Head from "next/head";
import Image from "next/image";

const Diacritics = require("diacritic");

function artistToUrl(string: string) {
  return (
    "/izvajalci/" +
    Diacritics.clean(string)
      .replace(/[^a-z0-9]/gi, "-")
      .toLowerCase() +
    "-pesmi-akordi-besedila-skladbe"
  );
}

function youtubeToEmbed(youtubeUrl) {
  return youtubeUrl.replace("watch?v=", "embed/");
}

function Content({ songData, similarSongs, id, url }) {
  useEffect(() => {
    console.log(songData);
    if (songData) {
      if (localStorage["history"] == null) {
        const historyArray = [[[songData.title], [url]]];
        localStorage.setItem("history", JSON.stringify(historyArray));
      } else {
        const history = localStorage.getItem("history");
        let historyArray = JSON.parse(history);
        const newInput = [[songData.title], [url]];
        historyArray = historyArray.filter((e) => {
          return JSON.stringify(e) !== JSON.stringify(newInput);
        });
        if (historyArray.length > 10) {
          historyArray.pop();
        }
        historyArray.splice(0, 0, newInput);
        localStorage.setItem("history", JSON.stringify(historyArray));
      }
    }
  }, [url]);

  // Render post...
  if (!songData) {
    return (
      <div>
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
        <DefaultErrorPage statusCode={404} />
      </div>
    );
  }

  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_WEBSERVER}/expressapi/main/addview/${id}`,
    fetch
  );

  const metaDescription = `${songData.title.toUpperCase()}Besedilo Akordi za kitaro. Izvajalec pesmi: ${songData.author.toUpperCase()}. Priljubljena besedila (Lyrics, Tekst, text) in Akordi (chords) pesmi. Portal besedilo-akordi.si`;
  const metaKeywords = `besedilo pesmi, akordi za kitaro ukulele klavir harmoniko, ${songData.title}${songData.author}, lyrics, tabs, chords, text, tekst, uččenje kitare e glasbena šola`;

  const responsiveYoutube = (
    <div
      className="video"
      style={{
        position: "relative",
        paddingBottom: "56.25%" /* 16:9 */,
        paddingTop: 25,
        height: 0,
      }}
    >
      <iframe
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        src={youtubeToEmbed(songData.youtube)}
        frameBorder="0"
        allowFullScreen
        title={`${songData.title} besedilo akordi ${songData.author} chords lyrics text tekst tablature tabs`}
      />
    </div>
  );

  return (
    <div className=" my-8 grid grid-cols-1 xl:flex  gap-4  ">
      <section className="  flex-none  m-auto xl:m-0   ">
        <ChordsContentImage
          pdf_file_name={songData.pdf_file_name}
          title={songData.title}
          author={songData.author}
        ></ChordsContentImage>
      </section>
      <nav
        className="bg-purple-200 w-1 rounded hidden xl:block "
        style={{ margin: "10px 50px" }}
      ></nav>
      <div className=" flex-1   order-first xl:order-last ">
        <section>
          <article>
            <header className=" ">
              <h1 className=" text-4xl  font-bold  text-gray-700  mb-1">
                {songData.title}{" "}
                <span className="text-gray-400 text-3xl">
                  akordi besedilo pesmi
                </span>{" "}
                <span className="block text-purple-400 text-3xl mt-1">
                  <span className="cursor-pointer hover:text-purple-600">
                    {" "}
                    {songData.author}
                  </span>
                </span>
              </h1>
              <span className=" text-md text-right mb-4">
                {songData.views} ogledov
              </span>
              <h2 className=" pb-0 text-md font-semibold  ">
                {songData.title} AKORDI BESEDILO (TEXT, TEKST, CHORDS, TABS,
                TABLATURE, LYRICS)
              </h2>{" "}
            </header>
          </article>
        </section>
        <section className="mt-1 ">
          <article className="text-xs ">
            <p>{responsiveYoutube}</p>
            <p>
              {songData.title} | {songData.author} video spot/lekcija
            </p>
          </article>
          <p>{songData.description}</p>
          <nav className="my-3">
            {" "}
            <Image
              src="/img/banner-objem.webp"
              layout="responsive"
              alt="oglas1"
              width={600}
              height={180}
            />{" "}
          </nav>
        </section>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WEBSERVER}/expressapi/main/paths/songs`
  );
  const paths = await res.json();

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const url = params.id;
  const id = params.id.split("-")[params.id.split("-").length - 1];

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WEBSERVER}/expressapi/main/content/${url}`
  );
  let songData = null;
  if ((await res.status) == 400) {
    return { props: { songData, id } };
  }

  const responded = await res.json().catch((err) => console.log(err));

  songData = responded[0][0];
  let similarSongs = responded[1];

  // Pass post data to the page via props
  return { props: { songData, similarSongs, id, url } };
}

export default Content;
