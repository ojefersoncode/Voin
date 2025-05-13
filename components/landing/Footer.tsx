'use client';

export const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-background border-t rounded-xl border-border"
    >
      <section className="container py-10 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8 text-gray-100">
        <div className="col-span-full xl:col-span-2">
          <div className="flex items-center select-none">
            <img className="size-12 mr-1" src="/Nexbattle.png" alt="logo" />
            <a
              rel="noreferrer noopener"
              href="/"
              className="font-titan text-xl text-gray-100"
            >
              Nex Battle
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-inter text-lg text-btn">Redes Sociais</h3>
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
          <h3 className="font-inter text-lg text-btn">Plataformas</h3>
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

        <div className="text-gray-btn">
          <h3 className="font-inter text-btn text-lg">Sobre</h3>
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
          <h3 className="font-inter text-lg text-btn">Comunidade</h3>
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

      <section className="container text-center  text-gray-100 pb-4">
        <h3 className="text-white font-sans">
          &copy; 2024 Todos os direitos reservados{' '}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://github.com/Ojefersoncode"
            className="text-border font-inter transition-all"
          >
            Nex Battle
          </a>
        </h3>
      </section>
    </footer>
  );
};
