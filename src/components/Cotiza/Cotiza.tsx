import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
export default function Calendly() {
  const handleOpen = () => {
    const form = document.getElementById("leadForm") as HTMLFormElement;
    const data = new FormData(form);
    const api = "https://licenciasadobe.com/php/mail2.php";
    const options = {
      method: "POST",
      body: data,
    };
    fetch(api, options)
      .then((response) => response.json())
      .then((data) => {})
      .catch((err) => {})
      .finally(() => {
        toast.success("Datos enviados, pronto nos pondremos en contacto", {
          duration: 4000,
          position: "bottom-right",
        });
      });
  };

  return (
    <>
      <Toaster />
      <div>
        <h2>Agenda una demo gratis</h2>
        <p>
          Selecciona en el calendario las fechas y horarios disponibles para
          agendar una demo, donde resolveremos tus inquietudes y te entregaremos
          una oferta comercial.
        </p>
      </div>
      <div className="w-full">
        <form id="leadForm">
          <div className="inputs2 sm:gap-0 w-full lg:gap-2">
            <label className="input input-bordered flex items-center gap-2 w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"></path>
              </svg>
              <input
                type="text"
                name="nombre"
                className="grow"
                placeholder="Nombres"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"></path>
              </svg>
              <input
                type="text"
                name="apellido"
                className="grow"
                placeholder="Apellidos"
              />
            </label>
          </div>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"></path>
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"></path>
            </svg>
            <input
              type="email"
              name="email"
              className="grow"
              placeholder="Email"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <img
              className="w-4 h-4 opacity-70"
              src="/iconos/company.svg"
              alt="company"
            />
            <input
              type="text"
              name="empresa"
              className="grow"
              placeholder="Empresa"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-4 h-4 opacity-70"
              fill="currentColor"
            >
              <path
                d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z"
                fill="currentColor"
              ></path>
            </svg>
            <input
              type="tel"
              name="telefono"
              className="grow"
              placeholder="Teléfono"
            />
          </label>

          <select className="select select-bordered w-full ">
            <option disabled selected>
              Selecciona tipo de programa
            </option>
            <option value="">Selecciona tipo de programa *</option>

            <option value="Adobe Creative Cloud">Adobe Creative Cloud</option>
            <option value="Adobe Document Cloud">Adobe Document Cloud</option>
            <option value="Adobe Substance 3D y Metaverso">
              Adobe Substance 3D y Metaverso
            </option>
            <option value="Adobe Magento">Adobe Commerce</option>
            <option value="Adobe Acrobat Sign">Adobe Acrobat Sign</option>
            <option value="Adobe Acrobat">Adobe Acrobat</option>
            <option value="Formación Adobe">Entrenamiento Oficial Adobe</option>
            <option value="Soporte Técnico">Soporte Técnico Adobe</option>
            <option value="Otro">Otro</option>
          </select>
          <button
            type="submit"
            onClick={() => {
              handleOpen();
            }}
            className="boton mt-3"
          >
            Cotizar
          </button>
        </form>
      </div>
    </>
  );
}
