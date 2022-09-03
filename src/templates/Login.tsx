import { useRouter } from 'next/router';
import type { ReactNode } from 'react';

type ILoginProps = {
  meta: ReactNode;
  children: ReactNode;
};

const LoginLayout = (props: ILoginProps) => {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col bg-[#584475] bg-gradient-to-l from-[#3394e12e] to-transparent text-white">
      {props.meta}
      <header className="bg-brand-gradient flex h-16 px-4 py-2 text-sm shadow-lg">
        <div className="mx-auto flex w-full max-w-4xl justify-between px-4 py-6 sm:p-6 lg:max-w-7xl lg:px-8">
          <div className="flex items-center">
            <button type="button" className="flex items-center gap-2">
              <img
                alt="Logo"
                src={`${router.basePath}/assets/logos/logo.png`}
              />{' '}
              SmartAdmin WebApp
            </button>
          </div>
          <div className="flex items-center">Create account</div>
        </div>
      </header>
      <main className="bg-login flex-1 items-center">
        {props.children}
        <footer className="absolute bottom-0 flex h-20 w-full items-center justify-center p-4 text-sm">
          Copyright &copy; 2022 by kuonglv@gmail.com
        </footer>
      </main>
    </div>
  );
};

export { LoginLayout };
