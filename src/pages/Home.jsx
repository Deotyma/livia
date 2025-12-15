import { challenges } from "../data/challenges";
import ChallengeCard from "../components/ChallengeCard";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Header/>
      <div className="container mt-4">

      <div className="row g-3">
        {challenges.map((c) => (
          <div className="col-md-12" key={c.id}>
            <ChallengeCard challenge={c} />
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
