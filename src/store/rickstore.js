import { create } from 'zustand';
import api from '../services/api';

export const rickStore = create((set) => ({
    personajes: [],

    getPersonajes: async () => {
        const respuesta = await api.get('/character/');
        set({ personajes: respuesta.data.results });
    },

}));