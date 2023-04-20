import ProgressBar from 'react-bootstrap/ProgressBar';

function Progress() {
  const now = 100;
  return(
    <div style={{position: 'absolute', right: '0'}}>
   <ProgressBar now={now} label={`${now}%`} className="progressBar" />;
   </div>
  );
}

export default Progress;
