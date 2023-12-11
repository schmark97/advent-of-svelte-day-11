
export async function load({ fetch }) {
    try {
        const response = await fetch(`https://advent.sveltesociety.dev/data/2023/day-eleven.json`);
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