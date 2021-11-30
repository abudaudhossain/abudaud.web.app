import { useEffect, useState } from 'react';

const useFeckData = () => {

    const useProjects = () => {
        const [myProjects, serMyProjects] = useState([]);

        useEffect(() => {
            fetch('/projects.json')
                .then(res => res.json())
                .then(data => {
                    serMyProjects(data);
                }).catch(err => {
                    console.log(err.message);
                })
        }, [])

        return myProjects;
    }
    return useProjects;

}

export default useFeckData;