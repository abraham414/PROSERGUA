"use client";

import { useMemo, useState } from "react";
import { company } from "@/data/company";
import { services } from "@/data/services";

const inputClasses =
  "w-full rounded-button border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-colors focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/15";

const labelClasses = "text-sm font-semibold text-gray-700";

export default function QuoteForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [details, setDetails] = useState("");

  const isValid = name.trim().length > 0 && phone.trim().length > 0;

  const message = useMemo(() => {
    return [
      "Hola PROSERGUA, quisiera solicitar una cotización.",
      "",
      `Nombre: ${name.trim() || "-"}`,
      `Teléfono: ${phone.trim() || "-"}`,
      `Correo: ${email.trim() || "No indicado"}`,
      `Servicio de interés: ${service || "No especificado"}`,
      `Detalles: ${details.trim() || "Sin detalles adicionales"}`,
    ].join("\n");
  }, [name, phone, email, service, details]);

  const whatsappHref = `https://wa.me/${company.contact.whatsapp}?text=${encodeURIComponent(message)}`;
  const mailHref = `mailto:${company.contact.email}?subject=${encodeURIComponent(
    `Solicitud de cotización - ${name.trim() || "Sitio web"}`,
  )}&body=${encodeURIComponent(message.replace(/\n/g, "\r\n"))}`;

  return (
    <div className="flex flex-col gap-6 rounded-card border border-gray-100 bg-white p-6 shadow-card sm:p-8">
      <div className="flex flex-col gap-1">
        <h3 className="font-heading text-xl font-bold text-neutral-900">
          Solicita tu cotización
        </h3>
        <p className="text-sm text-gray-500">
          Completa tus datos y te los enviamos por WhatsApp o correo en un solo paso.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className={labelClasses}>Nombre completo *</span>
          <input
            type="text"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Tu nombre"
            className={inputClasses}
          />
        </label>

        <label className="flex flex-col gap-1.5">
          <span className={labelClasses}>Teléfono *</span>
          <input
            type="tel"
            required
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="Ej. 5555 5555"
            className={inputClasses}
          />
        </label>

        <label className="flex flex-col gap-1.5">
          <span className={labelClasses}>Correo electrónico</span>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="tucorreo@ejemplo.com"
            className={inputClasses}
          />
        </label>

        <label className="flex flex-col gap-1.5">
          <span className={labelClasses}>Servicio de interés</span>
          <select
            value={service}
            onChange={(event) => setService(event.target.value)}
            className={inputClasses}
          >
            <option value="">Selecciona un servicio</option>
            {services.map((item) => (
              <option key={item.slug} value={item.name}>
                {item.name}
              </option>
            ))}
            <option value="Otro">Otro / no estoy seguro</option>
          </select>
        </label>

        <label className="flex flex-col gap-1.5 sm:col-span-2">
          <span className={labelClasses}>Cuéntanos qué necesitas</span>
          <textarea
            value={details}
            onChange={(event) => setDetails(event.target.value)}
            placeholder="Describe brevemente tu proyecto o necesidad..."
            rows={4}
            className={`${inputClasses} resize-none`}
          />
        </label>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <a
          href={isValid ? whatsappHref : undefined}
          target="_blank"
          rel="noopener noreferrer"
          aria-disabled={!isValid}
          onClick={(event) => {
            if (!isValid) event.preventDefault();
          }}
          className={`inline-flex flex-1 items-center justify-center gap-2 rounded-button px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
            isValid
              ? "bg-primary text-neutral-900 hover:bg-primary-dark focus-visible:outline-primary-dark"
              : "cursor-not-allowed bg-gray-100 text-gray-400"
          }`}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5" aria-hidden="true">
            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Enviar por WhatsApp
        </a>

        <a
          href={isValid ? mailHref : undefined}
          aria-disabled={!isValid}
          onClick={(event) => {
            if (!isValid) event.preventDefault();
          }}
          className={`inline-flex flex-1 items-center justify-center gap-2 rounded-button border px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
            isValid
              ? "border-secondary text-secondary hover:bg-secondary hover:text-white focus-visible:outline-secondary"
              : "cursor-not-allowed border-gray-200 text-gray-400"
          }`}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5" aria-hidden="true">
            <path d="M3 6l9 6 9-6M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Enviar por correo
        </a>
      </div>

      <p className="text-xs text-gray-400">
        {isValid
          ? "Se abrirá WhatsApp o tu app de correo con el mensaje ya redactado — solo confirma el envío desde ahí."
          : "Completa tu nombre y teléfono para habilitar el envío."}
      </p>
    </div>
  );
}
