import logo from "../assets/logo.png";

export default function Header() {
  return (
    <div className="bg-dark text-light min-vh-30 d-flex justify-content-center align-items-center shadow">
      <div className="text-center px-3">

        <img
          src={logo}
          alt="Logo livia"
          width="100"
          height="100"
          className="m-3"
        />

        <h1 className="mb-3">Orientation</h1>

        <p className="lead">
          Clarifier et valider ton projet, identifier tes compétences,
          rechercher une formation ou une alternance.
        </p>

      </div>
    </div>
  );
}

