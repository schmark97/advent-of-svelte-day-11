import { PUBLIC_API_URL } from '$env/static/public';


export async function load({ fetch }) {
    try {
        const response = await fetch(`${PUBLIC_API_URL}`);
        const names = await response.json();
        return {
            names
        }

    } catch (e) {
        return {
            names: {
                firstNames: [],
                lastNames: []
            }

        }
    }

}