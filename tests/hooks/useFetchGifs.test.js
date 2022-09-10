import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Pruebas en el Hook useFetchGifs', () => {
    test('debe de regresar el estado inicial', () => {

        const { result } = renderHook(() => useFetchGifs('One Puch'));
        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    })

    test('debe de retornar un arreglo de imagenes y el isLoading en false', async() => {

        const { result } = renderHook(() => useFetchGifs('One Puch'));
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        )
        const { images, isLoading } = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
        
    })
})