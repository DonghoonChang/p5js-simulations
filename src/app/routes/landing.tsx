import { useNavigate } from 'react-router';

import logo from '@/assets/logo.svg';
import { Head } from '@/components/seo';
import { Button } from '@/components/ui/button';
import { paths } from '@/config/paths';
import { useUser } from '@/lib/auth';

const LandingRoute = () => {
  const navigate = useNavigate();
  const user = useUser();

  const handleStart = () => {
    if (user.data) {
      navigate(paths.app.dashboard.getHref());
    } else {
      navigate(paths.auth.login.getHref());
    }
  };

  return (
    <div className="container mx-auto bg-gray-950 px-4 font-mono">
      <Head description="Welcome to bulletproof react" />
      <div className="flex h-screen flex-wrap gap-2 bg-indigo-300 *:rounded-xl *:text-center *:shadow-md [&_*]:rounded">
        <div className="flex w-full gap-2 *:border-stone-500 *:bg-indigo-500">
          <div className="flex w-1/2 items-center justify-center">
            <div className="border-1 border-gray-700 px-2">w-1/2</div>
          </div>
          <div className="w-1/2">w-1/2</div>
        </div>
        <div className="flex w-full gap-2 *:bg-indigo-500">
          <div className="w-2/5">w-2/5</div> <div className="w-3/5">w-3/5</div>
        </div>
        <div className="flex w-full gap-2 *:bg-indigo-500">
          <div className="w-1/3">w-1/3</div>
          <div className="w-2/3">w-2/3</div>
        </div>
        <div className="flex w-full gap-2 *:bg-indigo-500">
          <div className="w-1/4">w-1/4</div>
          <div className="w-3/4">w-3/4</div>
        </div>
        <div className="flex w-full gap-2 *:bg-indigo-500">
          <div className="w-1/5">w-1/5</div>
          <div className="w-4/5">w-4/5</div>
        </div>
        <div className="flex w-full gap-2 *:bg-indigo-500">
          <div className="w-1/6">w-1/6</div>
          <div className="w-5/6">w-5/6</div>
        </div>
        <div className="flex w-full gap-2 *:bg-indigo-500">
          <div className="w-full">w-full</div>
        </div>
      </div>
    </div>
  );
};

export default LandingRoute;
