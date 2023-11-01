import axios, { AxiosInstance, AxiosResponse } from 'axios';

const URLDatosGobAr = "https://apis.datos.gob.ar/georef/api";

const geoapi:AxiosInstance = axios.create({
  baseURL: URLDatosGobAr,
});

export const getProvinciasFromAPI = async () => {
  try {
    const respuesta:AxiosResponse<any, any> = await geoapi.get('/provincias');
    return respuesta.data;
  } catch (err) {
    throw new Error('Error consultando provincias');
  }
}

export const getMunicipiosFromAPI = async (idProvincia: number) => {
  try {
    const params = {
      provincia: idProvincia,
    }
    const respuesta:AxiosResponse<any, any> = await geoapi.get('/municipios', { params });
    return respuesta.data;
  } catch (err) {
    throw new Error('Error consultando provincias');
  }
}
