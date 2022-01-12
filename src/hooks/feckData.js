import { useEffect, useState } from 'react';

const useFeckData = () => {

    const useProjects = () => {
        const [myProjects, setMyProjects] = useState([]);

        useEffect(() => {
            fetch('/projects.json')
                .then(res => res.json())
                .then(data => {
                    setMyProjects(data);
                }).catch(err => {
                    console.log(err.message);
                })
        }, [])

        return myProjects;
    }

    
    const useBestProjects = () => {
        const [myBestProjects, setMyBestProjects] = useState([]);

        useEffect(() => {
            fetch('/BestProjects.json')
                .then(res => res.json())
                .then(data => {
                    setMyBestProjects(data);
                }).catch(err => {
                    console.log(err.message);
                })
        }, [])

        return myBestProjects;
    }


    return {useProjects, useBestProjects};

}

export default useFeckData;