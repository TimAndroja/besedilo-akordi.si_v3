import React, { useState, useEffect } from "react";

export default function Categories() {
  const [categoryArray, setCategoryArray] = useState([
    {
      name: "Božične pesmi",
      url: "bozicne-pesmi-bozicna-glasba",
    },
    {
      name: "Hrvaške pesmi",
      url: "hrvaske-dalmatinske-pesmi-hrvaska-dalmatinska-glasba",
    },
    {
      name: "Ljudske pesmi",
      url: "slovenske-ljudske-pesmi-ljudska-glasba",
    },
    {
      name: "Narodno zabavno",
      url: "narodno-zabavna-domaca-glasba",
    },
    {
      name: "Otroške pesmi",
      url: "slovenske-otroske-pesmi-za-otroke",
    },
    {
      name: "Pop rock",
      url: "pop-rock-gasba-ex-yu-yugo",
    },
    {
      name: "Slovenska popevka",
      url: "slovenska-popevka-plesna-glasba",
    },
    {
      name: "Zabavna glasba",
      url: "slovenske-pesmi",
    },
    {
      name: "Tuja glasba",
      url: "ostalo-angleske-disco-pesmi-instrumentalna-klasicna-glasba",
    },
    {
      name: "Kitarske lekcije",
      url: "ucenje-igranje-sola-kitare",
    },
    {
      name: "Akordi za začetnike",
      url: "ucenje-igranje-sola-kitare",
    },
    {
      name: "Srednje težki akordi",
      url: "ucenje-igranje-sola-kitare",
    },
    {
      name: "Težki akordi",
      url: "ucenje-igranje-sola-kitare",
    },
    {
      name: "Note",
      url: "ucenje-igranje-sola-kitare",
    },
  ]);
  const [windowWidth, setWindowWidth] = useState(0);

  const [numOfElements, setNumOfElements] = useState(10);
  const [displayAllElements, setDisplayAllElements] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      // @ts-ignore
      function handleResize() {
        if (window.innerWidth > 2400) {
          setNumOfElements(10);
        } else if (window.innerWidth > 1600) {
          setNumOfElements(8);
        } else if (window.innerWidth > 1500) {
          setNumOfElements(4);
        } else if (window.innerWidth > 700) {
          setNumOfElements(3);
        } else if (window.innerWidth < 700) {
          setNumOfElements(2);
        }
      }
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  function categoriesGridController(displayAllElements: boolean) {
    let buttonClasses =
      "   text-truncate py-2 text-center truncate  font-bold text-gray-600 w-full ";
    let loopLimit;
    displayAllElements
      ? (loopLimit = categoryArray.length)
      : (loopLimit = numOfElements);
    let shownCategories = [];

    for (var i = 0; i < loopLimit; i++) {
      shownCategories.push(
        <div
          className="  bg-purple-300 bg-opacity-70 rounded-md  hover:bg-opacity-100  "
          key={i}
        >
          <button type="button" className={buttonClasses}>
            {categoryArray[i].name}
          </button>
        </div>
      );
    }
    return shownCategories;
  }

  const categoryDisplay = categoriesGridController(displayAllElements).map(
    (element, index) => {
      return element;
    }
  );

  return (
    <nav className="hidden  sm:flex mb-11">
      <div className="w-full ">
        <div
          className=" grid gap-x-2 gap-y-2 "
          style={{ gridTemplateColumns: "1fr ".repeat(numOfElements + 1) }}
        >
          {categoryDisplay}

          <button
            className={
              !displayAllElements
                ? ` bg-purple-300 text-gray-600  bg-opacity-70 rounded-md   hover:bg-opacity-100 h-full   `
                : "bg-purple-300 text-gray-600  bg-opacity-70 rounded-md  hover:bg-opacity-100 h-full"
            }
            onClick={() => {
              setDisplayAllElements(!displayAllElements);
              categoriesGridController(displayAllElements);
            }}
          >
            <i className="material-icons-outlined align-middle text-center my-auto">
              {!displayAllElements ? "last_page" : "first_page"}
            </i>
          </button>
        </div>
      </div>
    </nav>
  );
}
