import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { challenges } from "../data/challenges";
import logo from "../assets/logo.png";

export default function ChallengeDetail() {
  const { id } = useParams();

  const challenge = useMemo(
    () => challenges.find((c) => c.id === id),
    [id]
  );

  if (!challenge) {
    return (
      <div className="container py-4 h-200 d-flex justify-content-center align-items-center">
        <div className="alert alert-danger">
          Challenge introuvable.
          <div className="mt-3">
            <Link to="/" className="btn btn-outline-dark">Retour</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-7 col-lg-5">
          <div className="card shadow">
            <div className="card-body text-center p-4">
              <div className="small text-muted fw-semibold mb-2">
                Thématique : Orientation
              </div>

              <h1 className="h2 fw-bold mb-3">{challenge.title}</h1>

              <span className="badge rounded-pill bg-info text-dark mb-3 d-inline-flex align-items-center">
                <i className="bi bi-clock-fill me-2"></i>
                {challenge.duration}
              </span>   

              <div className="my-3">
                <img
                  src={logo}
                  alt="Illustration"
                  width="96"
                  height="96"
                  className="rounded-circle"
                />
              </div>

              <hr />

              <div className="text-start">
                <h2 className="h5 fw-bold">Descriptif</h2>
                <p className="text-muted mb-4">{challenge.longDescription}</p>

                <h2 className="h5 fw-bold">Avant de te lancer</h2>
                <p className="text-muted mb-4">
                  Pas besoin de préparation ici, Livia s’occupe de tout
                </p>

                <h2 className="h6 fw-bold">Pré-requis</h2>
                <ul className="text-muted mb-4">
                  {challenge.requirements.map((r, idx) => (
                    <li key={idx}>{r}</li>
                  ))}
                </ul>
              </div>

              <div className="d-grid gap-2">
                <button className="btn btn-primary btn-lg rounded-pill">
                  Parler avec Liv.ia
                </button>
                <Link to="/" className="btn btn-outline-dark rounded-pill">
                  Retour à la liste
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
