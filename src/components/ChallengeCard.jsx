import { Link } from "react-router-dom";

export default function ChallengeCard({ challenge }) {
  return (
    <div className="card h-100 challenge-card">
      <Link
        to={`/challenges/${challenge.id}`}
        className="text-decoration-none text-dark"
      >
        <div className="card-body text-start">

          <h5 className="card-title">{challenge.title}</h5>

          <span className="badge rounded-pill bg-info text-dark mb-3 d-inline-flex align-items-center">
            <i className="bi bi-clock-fill me-2"></i>
            {challenge.duration}
          </span>

          <div className="progress mb-3">
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "0%" }}
            />
          </div>

          <p className="card-text">{challenge.description}</p>

        </div>
      </Link>
    </div>
  );
}
