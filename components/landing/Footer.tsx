'use client';

export const Footer = () => {
  return (
    <footer id="footer" className="bg-[#0e0e0e] border-t border-green-800/40">
      <section className="container py-10 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8 text-gray-100">
        <div className="col-span-full xl:col-span-2">
          <div className="flex items-center select-none">
            <img className="size-12 mr-2" src="/Voin.png" alt="logo" />
            <a
              rel="noreferrer noopener"
              href="/"
              className="font-bold text-xl text-gray-100"
            >
              Voin
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg text-gray-100">Redes Sociais</h3>
          <div className="text-gray-100">
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Github
            </a>
          </div>

          <div className="text-gray-100">
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Twitter
            </a>
          </div>

          <div className="text-gray-100">
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Linkedin
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg text-white">Plataformas</h3>
          <div className="text-gray-100">
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Web
            </a>
          </div>

          <div className="text-gray-100">
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Mobile
            </a>
          </div>
        </div>

        <div className="text-gray-100">
          <h3 className="font-bold text-lg">Sobre</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Tecnologias
            </a>
          </div>

          <div className="text-gray-100">
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Preços
            </a>
          </div>

          <div className="text-gray-100">
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              FAQ
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg text-white">Comunidade</h3>
          <div className="text-gray-100">
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Youtube
            </a>
          </div>

          <div className="text-gray-100">
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Discord
            </a>
          </div>

          <div className="text-gray-100">
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Whatsapp
            </a>
          </div>
        </div>
      </section>

      <section className="container text-center text-gray-100 pb-4">
        <h3 className="text-white">
          &copy; 2024 Todos os direitos reservados{' '}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://github.com/Ojefersoncode"
            className="text-green-600 transition-all"
          >
            Voin
          </a>
        </h3>
      </section>
    </footer>
  );
};
