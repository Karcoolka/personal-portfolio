import Col from "react-bootstrap/Col";
import PropTypes from 'prop-types';
export const ProjectCard= ({title, description, imgUrl, demoUrl, sourceCodeUrl}) => {
    const handleRedirection = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl}  alt="Project"/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <h5>Tech Stack:</h5>
                    <span>{description}</span>
                    <div className="proj-btn">
                        <div>
                            {demoUrl ? (
                                <button className="view-btn" onClick={() => handleRedirection(demoUrl)}>Demo</button>
                            ) : (
                                <button disabled={!demoUrl} className="view-btn" onClick={() => handleRedirection(demoUrl)}>Private Demo</button>
                            )}
                        </div>
                        <div>
                        {sourceCodeUrl ? (
                            <button className="view-btn" onClick={() => handleRedirection(sourceCodeUrl)}>Source Code</button>
                        ) : (
                            <button disabled={!sourceCodeUrl} className="view-btn" onClick={() => handleRedirection(sourceCodeUrl)}>Not Open Source</button>
                        )}
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    )
}

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    demoUrl: PropTypes.string,
    sourceCodeUrl: PropTypes.string,
};