import Image from "./images/dic.jpg";

export default function Header() {
  return (
    <header className="d-flex justify-content-center align-items-center">
      <img
        src={Image}
        alt="dictionary"
        className="w-25 me-3
         d-none d-md-inline rounded-pill"
      />
      <span className="align-middle f-xxl text-center text-primary text-opacity-75">
        Nifty Dictionary
      </span>
    </header>
  );
}
