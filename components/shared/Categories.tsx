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
  const [slidePage, setSlidePage] = useState(0);
  const [numOfElements, setNumOfElements] = useState(10);
  useEffect(() => {
    if (typeof window !== "undefined") {
      // @ts-ignore
      function handleResize() {
         
          if(window.innerWidth > 2400){
            setNumOfElements(10);
          }
          else if (window.innerWidth > 1600){
            setNumOfElements(6);
          }
          else if (window.innerWidth > 1500){
            setNumOfElements(4);
        }   
            else if (window.innerWidth > 600){
                setNumOfElements(3);
            }
            else if (window.innerWidth < 600){
                setNumOfElements(2);
            }
        

      }
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  function categoriesGridController() {
    let buttonClasses = 'btn btn-primary text-white fw-bold   d-inline-block text-truncate fs-6 p-sm-2 px-sm-3 btn-sm    w-100 ';

    let shownCategories = [];
    //set arrow back?

    //set arrow next?
    let offset = 0;
    if (slidePage * numOfElements + numOfElements > categoryArray.length) {
      offset = slidePage * numOfElements + numOfElements - categoryArray.length;
      
    }
  

    for (var i = 0; i < numOfElements; i++) {
      shownCategories.push(
        <div className="w-100 shadow"  key={i}>
        <button
        type="button"
       
        className={buttonClasses}
      >
        {categoryArray[i - offset + slidePage * numOfElements].name}
      </button>
        </div>
    );

 

 
        
    
    }
    return shownCategories;
  }

  const categoryDisplay = categoriesGridController().map((element, index) => {return element})


  return <nav className="d-flex ">
       <button
            type="button"
            className={`btn btn-primary shadow-sm text-white fw-bold px-0  btn-sm  ${slidePage == 0 ? "disabled" : ""}`}
            onClick={()=>slidePage > 0 ? setSlidePage(slidePage - 1) : void 0}
          >
            <i className="material-icons-outlined align-middle">chevron_left</i>
          </button>
      <div className="w-100 "><div className="categoryGrid" style={{"gridTemplateColumns" : "1fr ".repeat(numOfElements)}}>{categoryDisplay}</div></div>
      <button
          type="button"
          className={`btn shadow-sm btn-primary btn-sm text-white fw-bold px-0 ${ slidePage * numOfElements + numOfElements +  1< categoryArray.length ? "" : "disabled"}`}
          onClick={()=> slidePage * numOfElements + numOfElements +  1 < categoryArray.length ? setSlidePage(slidePage + 1): void 0}
        >
              <i className="material-icons-outlined align-middle">chevron_right</i>
        </button>
      </nav>;
}
