import ProjectItems from './ProjectItems'

function ProjectsList() {
    return (
        <div className="projects">
            <h1>Projects Worked On</h1>
        <div className="projects__container">
            <div className="projects__wrapper">
                <ul className="projects__items">
                    <h2>Terraform Build</h2>
                    <ProjectItems

                    />
                </ul>
                <ul className='projects__items'>
                    <h2>Temperature Data Stream</h2>
                    <ProjectItems

                    />
                </ul>
            </div>
        </div>
        </div>
    )
}

export default ProjectsList