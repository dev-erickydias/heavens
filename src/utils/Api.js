


export default async function Api(){
    const url = 'https://api.zappysoftware.com/1/agentes/getsingle.json?page=1&id=343025&via_app=1&lang=en-US&professionalMode=false';

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        return data.getsingle?.[0].estabelecimentos?.[0].servicos;
    } catch (error) {
        console.error('Error fetching agent data:', error.message);
        return null;
    }

}



