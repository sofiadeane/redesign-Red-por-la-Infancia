/**
 * Acceso a los datos de las personas, incluido el equipo de la fundación.
 */
import { personas } from "./personas.js";

const team = {
  id: "equipo",
  name: "Equipo RxI",
  role: "Equipo de comunicación de Red por la Infancia",
};

export const findPersona = (id) => personas.find((persona) => persona.id === id);

export const personaName = (id) => (id === team.id ? team.name : (findPersona(id)?.name ?? id));

export const personaRole = (id) => (id === team.id ? team.role : (findPersona(id)?.role ?? ""));

/** Todos los ids, en el orden en que aparecen en el sitio. */
export const allPeopleIds = [...personas.map((persona) => persona.id), team.id];
