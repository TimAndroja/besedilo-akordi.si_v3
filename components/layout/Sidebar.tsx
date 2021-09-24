import Link from "next/link";
export default function Sidebar() {
  return (
    <aside className="py-8 pl-3 ">
      <div>
        <div className="pb-6 pl-1 ">
          <Link href="/">
            <a>
              <i className="px-2 pr-3 h4 text-gray-500 material-icons-outlined align-middle">
                school
              </i>
              <span className="fw-bold font-semibold text-gray-500 align-middle inline-block">
                Poučne Vsebine
              </span>
            </a>
          </Link>
        </div>

        <div className="pb-6 pl-1">
          <Link href="/">
            <a>
              <i className="px-2  pr-3 h4 text-gray-500 material-icons-outlined align-middle">
                person_add
              </i>
              <span className="fw-bold font-semibold text-gray-500 align-middle inline-block">
                Dodaj o avtorju
              </span>
            </a>
          </Link>
        </div>
        <div className="pb-6 pl-1">
          <Link href="/">
            <a>
              <i className="px-2  pr-3 h4 text-gray-500 material-icons-outlined align-middle">
                library_music
              </i>
              <span className="fw-bold font-semibold text-gray-500 align-middle inline-block">
                Dodaj Akorde
              </span>
            </a>
          </Link>
        </div>
      </div>
      <div>
        <div className="pl-2 py-5 font-semibold">Promovirano</div>

        <div className="pb-6 pl-1">
          <Link href="/">
            <a>
              <i className="px-2  pr-3 h4 text-gray-500 material-icons-outlined align-middle">
                grade
              </i>
              <span className="fw-bold font-semibold text-gray-500 align-middle inline-block">
                Generate loop
              </span>
            </a>
          </Link>
        </div>
      </div>
      <div>
        <div className="pl-2 py-5 font-semibold">Moje zbirke prsmi</div>

        <div className="pb-6 pl-1">
          <Link href="/">
            <a>
              <i className="px-2 pr-3 h4 text-gray-500 material-icons-outlined align-middle">
                queue_music
              </i>
              <span className="fw-bold font-semibold text-gray-500 align-middle inline-block">
                Moja zbirka
              </span>
            </a>
          </Link>
        </div>
        <div className="pb-6 pl-1">
          <Link href="/">
            <a>
              <i className="px-2 pr-3 h4 text-gray-500 material-icons-outlined align-middle">
                playlist_add
              </i>
              <span className="fw-bold font-semibold text-gray-500 align-middle inline-block">
                Dodaj zbirko
              </span>
            </a>
          </Link>
        </div>
      </div>
      <div></div>
    </aside>
  );
}
