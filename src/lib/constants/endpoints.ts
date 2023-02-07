//Base url
const BASE_URL = `${import.meta.env.VITE_BASE_URL}/api/v1/${import.meta.env.VITE_NOTE_ENDPOINT}`;

//CRUD
export const NOTE_CREATE = BASE_URL;
export const NOTE_GETALL = BASE_URL;
export const NOTE_EDIT = (id: string | undefined) => `${BASE_URL}/${id}`;
export const NOTE_DELETE = (id: string) => `${BASE_URL}/${id}`;