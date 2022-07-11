import { useEffect, useState} from 'react';
import axios from 'axios';

import { Species } from '../interfaces/Species';

const useGetPlantParameters = (plante_id:number) => {
    const [species,setSpecies] = useState<Species>();
    const [loading_species, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
        try {
            const { data: response } = await axios.get('http://127.0.0.1:8000/api/species/'+plante_id+'/');
            setSpecies(response);
        } catch (error) {
            console.error(error)
        }
        setLoading(false);
        };
        fetchPosts();
    }, []);

    return {
        species,
        loading_species,
    };
};

export default useGetPlantParameters;