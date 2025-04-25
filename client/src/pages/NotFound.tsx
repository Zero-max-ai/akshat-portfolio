import { Link } from 'react-router-dom';
import Heading from '../components/Heading';

const NotFound = () => {
  return (
    <div className="bg-[#f7f7f7] dark:bg-[#191C1F] dark:text-white min-h-[100vh] flex flex-col items-center justify-center">
      <div className="w-11/12 mx-auto flex items-center justify-center gap-[32px]">
        <div className="font-thin flex flex-col gap-3 max-w-[700px]">
          <Heading head={"You'd been 404'd ≧∇≦"} />
          <span>
            Looks like this page disappeared faster than a cat when you say “bath time.”
          </span>
          <span>
            But don’t worry — you can still bounce back!
          </span>
          <span>
            <Link to={'/'} className="text-[#0084D1] hover:text-[#005A99] underline underline-offset-4">Take me home</Link>{" "} before the cat stares deeper
          </span>
        </div>
      </div>
    </div>
  )
}

export default NotFound;
