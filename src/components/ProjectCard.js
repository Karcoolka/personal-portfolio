import Col from "react-bootstrap/Col";
export const ProjectCard= ({title, description, imgUrl, demoUrl, sourceCodeUrl}) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <div className="proj-btn">
                        {demoUrl ? (
                            <a href={demoUrl} target="_blank" rel="noopener noreferrer">Demo</a>
                        ) : (
                            <small>Private Demo</small>
                        )}
                        {sourceCodeUrl ? (
                            <a href={sourceCodeUrl} target="_blank" rel="noopener noreferrer">Source Code</a>
                        ) : (
                            <small>Not Open Source</small>
                        )}
                    </div>
                </div>
            </div>
        </Col>
    )
}