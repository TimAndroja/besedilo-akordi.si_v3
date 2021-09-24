import Image from "next/image";
import { useEffect, useState } from "react";

export default function ChordsContentImage({ pdf_file_name, title, author }) {
  const imageUrl =
    pdf_file_name.substr(0, pdf_file_name.lastIndexOf(".")) + ".jpg";

  const [chordSize, setChordsSize] = useState(0);
  const [maxChordSize, setMaxChordsSize] = useState(0);
  const [minChordSize, setMinChordSize] = useState(0);
  const [resizeUnit, setResizeUnit] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // @ts-ignore
      function handleResize() {
        console.log(document.documentElement.clientWidth);
        if (document.documentElement.clientWidth > 1280) {
          //PIXEL OPTIONS
          setChordsSize(document.documentElement.clientWidth / 3);
          setMaxChordsSize(document.documentElement.clientWidth - 700);
          setMinChordSize(400);
          setResizeUnit(50);
        } else {
          //PERCENT OPTIONS
          setChordsSize(100);
          setMaxChordsSize(100);
          setMinChordSize(30);
          setResizeUnit(10);
        }
      }
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div
      style={
        maxChordSize > 100
          ? {
              width: chordSize + "px",

              // width: "calc(" + chordSize + "vh / 1.41428571429)",
            }
          : {
              width: chordSize + "%",
              margin: "auto",
            }
      }
      className="text-lg    shadow-lg relative w-full "
    >
      {" "}
      <nav className="flex-1 flexflex-col-reverse absolute z-10 left-3 top-3  xl:block ">
        <span
          className={
            chordSize >= maxChordSize
              ? "material-icons-outlined text-4xl  text-gray-500  text-opacity-50  select-none"
              : "material-icons-outlined text-4xl  text-purple-500 hover:text-opacity-100 text-opacity-50 cursor-pointer select-none"
          }
          onClick={() => {
            chordSize >= maxChordSize
              ? null
              : setChordsSize(chordSize + resizeUnit);
          }}
        >
          zoom_in
        </span>
        <span
          className={
            chordSize <= minChordSize
              ? "material-icons-outlined text-4xl  text-gray-500  text-opacity-50  select-none"
              : "material-icons-outlined text-4xl  text-purple-500 hover:text-opacity-100 text-opacity-50 cursor-pointer select-none"
          }
          onClick={() => {
            chordSize <= minChordSize
              ? null
              : setChordsSize(chordSize - resizeUnit);
          }}
        >
          zoom_out
        </span>
      </nav>
      <Image
        layout={"intrinsic"}
        src={`${process.env.NEXT_PUBLIC_WEBSERVER}/api/pdf_images/${imageUrl}`}
        alt={`${title} besedilo akordi ${author} chords lyrics text tekst tablature tabs`}
        width={2100}
        height={2970}
      />
    </div>
  );
}
