
import LayoutMain from "../components/layout/LayoutMain";

import { useEffect } from 'react';
import DarkmodeContext from "../context/DarkmodeContext";


import {parseCookies} from '../lib/parseCookies';
export default function Home({isDarkMode}) {
  console.log(isDarkMode);

  return (
    <DarkmodeContext.Provider value={isDarkMode}>
    <LayoutMain>

test
<span className="material-icons" >
delete
</span>
<button className="btn btn-primary" > test </button>

    </LayoutMain>
    </DarkmodeContext.Provider>
  )
}

export async function getServerSideProps({ req} ) {
  const cookies = parseCookies(req);

  // And then get element from cookie by name
  
  return { 
     props: {
       isDarkMode: cookies.isDarkmode === 'true'? true : false,
     } 
  }
}
