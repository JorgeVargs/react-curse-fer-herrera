import { getImagen } from "../../src/base-pruebas/11-async-await";

describe("Pruebas en 11-async-await", () => {

    test('getImagen debe de retornar un URL de la imagén ', async() => {
        const url = await getImagen();
        console.log(url);
    });
});