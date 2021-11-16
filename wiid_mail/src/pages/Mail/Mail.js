import Split from 'react-split'
import MailMain from '../../components/MailMain';
import MailNavigation from '../../components/MailNavigation';
import './style.css'

const Mail = () => {
  return (
    <Split
      className="split"
      minSize={170}
      gutterAlign="start"
      snapOffset={100}
      dragInterval={5}
    >
      <div className="left-container">
        <MailNavigation />
      </div>
      <div className="right-container">
        <MailMain />
      </div>
    </Split>
  );
};

export default Mail;
