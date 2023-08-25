import Project1 from '../assets/project-1.png';
import Project2 from '../assets/project-2.jpeg';
import Project3 from '../assets/project-3.png';
import Project4 from '../assets/project-4.jpeg';


export type ProjectDataType = {
    imgUrl: string
    title: string
    text: string
    view: string
    source: string
}

export const projectData:ProjectDataType[] = [
 {
    imgUrl: Project1,
    title: 'Project 1',
    text: 'This is a description of the Project 1. The MERN tech stack is used here.',
    view: 'http://localhost:3000',
    source: 'http://localhost:3000'
 },
 {
    imgUrl: Project2,
    title: 'Project 2',
    text: 'This is a description of the Project 2. The MERN tech stack is used here.',
    view: 'http://localhost:3000',
    source: 'http://localhost:3000'
 },
 {
    imgUrl: Project3,
    title: 'Project 3',
    text: 'This is a description of the Project 3. The MERN tech stack is used here.',
    view: 'http://localhost:3000',
    source: 'http://localhost:3000'
 },
 {
    imgUrl: Project4,
    title: 'Project 4',
    text: 'This is a description of the Project 4. The MERN tech stack is used here.',
    view: 'http://localhost:3000',
    source: 'http://localhost:3000'
 }
]
