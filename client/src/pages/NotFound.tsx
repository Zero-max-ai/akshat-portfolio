import { Link } from 'react-router-dom';
import Heading from '../components/Heading';

const NotFound = () => {
  return (
    <div className="min-h-[100vh] flex flex-col gap-[32px] items-center justify-center">
      <div className="font-thin flex flex-col gap-3 max-w-[700px]">
        <h1 className="cabinet font-extrabold text-[40px]">You'd been 404'd ≧∇≦</h1>
        <span>
          This page took the wrong turn... just like this cat’s life choices.
        </span>
        <span>
          But don’t worry — you can still bounce back!
        </span>
        <span>
          <Link to={'/'} className="text-[#0084D1] underline underline-offset-4">Take me home</Link>{" "} before the cat stares deeper
        </span>
      </div>
    </div>
  )
}

export default NotFound;
