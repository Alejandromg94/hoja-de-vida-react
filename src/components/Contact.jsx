import React from "react";
import { Mail, MapPin, MessageSquare, Globe, Code2, CheckCircle2, Phone } from "lucide-react";
import { ScrollReveal } from "../hooks/useAnimate";

const Contact = () => {
  const contactItems = [
    { icon: <Mail className="w-5 h-5" />, label: "Envíame un correo", value: "alejosoftwarelabs@gmail.com", href: "mailto:alejosoftwarelabs@gmail.com", color: "indigo", hoverBorder: "hover:border-indigo-500" },
    { icon: <MapPin className="w-5 h-5" />, label: "Ubicación", value: "Colombia (Soporte Remoto)", color: "purple", hoverBorder: "" },
    { icon: <Phone className="w-5 h-5" />, label: "Llámame", value: "+57 350 777 9458", href: "tel:+573507779458", color: "emerald", hoverBorder: "hover:border-emerald-500" },
  ];

  return (
    <section id="contacto" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/55 text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-3">
              <MessageSquare className="w-4 h-4" /><span>Contacto</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">¿Tienes un proyecto en mente? ¡Hablemos!</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-3">Contáctame directamente a través de mi correo, teléfono o redes sociales.</p>
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-550 to-purple-550 mx-auto mt-4 rounded-full"></div>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto space-y-8">
          <ScrollReveal delay={200}>
            <p className="text-center text-slate-650 dark:text-slate-400 leading-relaxed text-base max-w-2xl mx-auto">
              Estoy disponible para roles a tiempo completo, proyectos freelance y colaboraciones de código abierto. Cuéntame sobre tus metas y cómo puedo ayudarte a alcanzarlas.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactItems.map((item, idx) => (
              <ScrollReveal key={idx} delay={300 + idx * 100} direction="up">
                <a href={item.href || "#"} target={item.href ? undefined : "_blank"} rel="noreferrer"
                  className={`flex items-center gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-850 ${item.hoverBorder} hover:shadow-lg transition-all duration-300 group ${!item.href ? 'pointer-events-none' : ''}`}>
                  <div className={`w-12 h-12 rounded-xl bg-${item.color}-100 dark:bg-${item.color}-950/55 text-${item.color}-600 dark:text-${item.color}-450 flex items-center justify-center group-hover:bg-${item.color}-600 group-hover:text-white group-hover:scale-110 transition-all duration-300`}>{item.icon}</div>
                  <div><span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">{item.label}</span><span className="text-sm font-bold text-slate-750 dark:text-white">{item.value}</span></div>
                </a>
              </ScrollReveal>
            ))}

            <ScrollReveal delay={600} direction="up">
              <a href="https://wa.me/573507779458" target="_blank" rel="noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-850 hover:border-emerald-500 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950/55 text-emerald-600 dark:text-emerald-450 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.744-6.27C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z"/></svg>
                </div>
                <div><span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Escríbeme</span><span className="text-sm font-bold text-slate-750 dark:text-white">WhatsApp</span></div>
              </a>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={700}>
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform duration-300">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
              <p className="text-sm font-semibold leading-relaxed">Respuesta rápida: Normalmente respondo a correos en menos de 24 horas laborables.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={800}>
            <div className="text-center pt-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4">Sígueme o búscame</span>
              <div className="flex justify-center gap-4">
                <a href="https://www.linkedin.com/in/daniel-alejandro-muñoz-godoy-8830b3395" target="_blank" rel="noreferrer" className="flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-850 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:shadow-lg transition-all duration-300">
                  <Globe className="w-5 h-5" />
                </a>
                <a href="https://github.com/alejo-software-lab" target="_blank" rel="noreferrer" className="flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-850 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:shadow-lg transition-all duration-300">
                  <Code2 className="w-5 h-5" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
