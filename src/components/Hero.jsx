import React from "react";
import { ArrowDown, Globe, Mail, ExternalLink, Download } from "lucide-react";
import GitHubIcon from "./GitHubIcon";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-gradient-to-b from-indigo-50/30 via-slate-50 to-slate-50 dark:from-indigo-950/20 dark:via-slate-950 dark:to-slate-950"
    >
      {/* Decorative background blobs */}
      <div className="absolute top-20 left-1/10 w-72 h-72 bg-indigo-400/20 dark:bg-indigo-600/15 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-20 right-1/10 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/15 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Info */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Foto de perfil */}
            <div className="w-36 h-36 sm:w-44 sm:h-44 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
              <img
                src="/foto-alejo.jpg"
                alt="Foto de Alejandro Muñoz"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'flex';
                }}
              />
              <span className="hidden w-full h-full items-center justify-center text-slate-400 text-sm font-medium">
                Tu foto
              </span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200/50 dark:border-indigo-800/50 text-indigo-600 dark:text-indigo-400 font-semibold text-sm animate-fade-in">
              <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-ping"></span>
              <span>Disponible para nuevos proyectos</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Hola, soy{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">
                Alejandro Muñoz
              </span>
            </h1>

            <h2 className="text-2xl sm:text-3xl font-bold text-slate-700 dark:text-slate-300">
              Desarrollador de Software
            </h2>

            <p className="max-w-xl text-lg text-slate-600 dark:text-slate-450 leading-relaxed">
              Técnico en Desarrollo de software en CESDE con una base sólida en
              lógica de programación, Java, JavaScript, base de datos SQL, manejo
              intermedio de la IA como herramienta de codificación, además de
              contar con habilidades blandas como el trabajo en equipo, el
              pensamiento crítico y la resolución de problemas a través de
              soluciones efectivas.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#proyectos"
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-lg shadow-indigo-600/30 dark:shadow-indigo-900/30 hover:shadow-indigo-600/40 transition-all duration-300 transform hover:-translate-y-0.5 group"
              >
                <span>Ver Mis Proyectos</span>
                <ExternalLink className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="mailto:Alejandromg94@outlook.com"
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-550 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-50 dark:hover:bg-slate-900 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Contáctame
              </a>
              <a
                href="/hoja_de_vida_alejandro_munoz.pdf"
                download
                className="inline-flex items-center justify-center px-6 py-4 rounded-2xl border border-indigo-300 dark:border-indigo-700 hover:border-indigo-500 dark:hover:border-indigo-500 text-indigo-600 dark:text-indigo-400 font-semibold hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 mr-2" />
                <span>Descargar CV</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com/alejo-software-lab"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-850 hover:border-indigo-500 dark:hover:border-indigo-400 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 shadow-sm hover:shadow-md transition-all duration-300"
                aria-label="GitHub"
              >
                <GitHubIcon className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/daniel-alejandro-muñoz-godoy-8830b3395"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-850 hover:border-indigo-500 dark:hover:border-indigo-400 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 shadow-sm hover:shadow-md transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Globe className="w-6 h-6" />
              </a>
              <a
                href="mailto:Alejandromg94@outlook.com"
                className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-850 hover:border-indigo-500 dark:hover:border-indigo-400 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 shadow-sm hover:shadow-md transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right Column - Visual Terminal */}
          <div className="lg:col-span-5 relative w-full flex justify-center animate-slide-up">
            <div className="w-full max-w-lg bg-slate-900 dark:bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden font-mono text-sm leading-relaxed text-slate-350">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-850 border-b border-slate-800">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                </div>
                <div className="text-xs text-slate-500">
                  developer.json — alejandro-munoz
                </div>
                <div className="w-10"></div>
              </div>

              {/* Terminal Content */}
              <div className="p-6 space-y-4 text-slate-300 select-all">
                <div>
                  <span className="text-pink-400">const</span>{" "}
                  <span className="text-sky-400">programador</span> = {"{"}
                </div>
                <div className="pl-6">
                  <span className="text-slate-400">nombre:</span>{" "}
                  <span className="text-emerald-300">"Alejandro Muñoz Godoy"</span>,
                </div>
                <div className="pl-6">
                  <span className="text-slate-400">rol:</span>{" "}
                  <span className="text-emerald-300">
                    "Desarrollador de Software"
                  </span>
                  ,
                </div>
                <div className="pl-6">
                  <span className="text-slate-400">tecnologiasFavoritas:</span>{" "}
                  <span className="text-cyan-400">
                    ['Java', 'Spring Boot', 'JavaScript', 'SQL', 'React']
                  </span>
                  ,
                </div>
                <div className="pl-6">
                  <span className="text-slate-400">enfoque:</span>{" "}
                  <span className="text-emerald-300">
                    "Logica de negocio y codigo limpio"
                  </span>
                  ,
                </div>
                <div className="pl-6">
                  <span className="text-slate-400">activo:</span>{" "}
                  <span className="text-amber-400">true</span>,
                </div>
                <div className="pl-6">
                  <span className="text-slate-400">disponibilidad:</span>{" "}
                  <span className="text-amber-400">"Inmediata"</span>
                </div>
                <div>{"};"}</div>
                <div className="pt-4 border-t border-slate-800 text-slate-500 text-xs flex items-center justify-between">
                  <span>// Comando ejecutado: npm start</span>
                  <span className="text-emerald-400">✔ Ready in 400ms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-slate-450 text-sm">
        <span className="text-xs font-semibold tracking-widest uppercase opacity-70">
          Desplazar
        </span>
        <ArrowDown className="w-4 h-4 animate-bounce text-indigo-500" />
      </div>
    </section>
  );
};

export default Hero;
