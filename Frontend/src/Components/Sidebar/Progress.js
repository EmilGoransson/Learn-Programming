import ProgressBar from 'react-bootstrap/ProgressBar';

function Progress() {
  const now = 100;
  return <ProgressBar now={now} label={`${now}%`} className="progressBar" />;
}

export default Progress;
