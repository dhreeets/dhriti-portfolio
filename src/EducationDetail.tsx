type EducationDetailProps = {
    src: string;
    alt: string;
    city: string;
    institution: string;
    qualification: string;
    duration: string;
    subjects: string;
    details: string[];
}

export default function EducationDetail({ src, alt, city, institution, qualification, duration, subjects, details}: EducationDetailProps) {
    return (
        <div className="image-item">
            <span>{city}</span>
            <img
                src={src}
                alt={alt}
                width="170px"
                height="auto"
            />
            <span>{institution}</span>
            <span>{qualification}</span>
            <span>{subjects}</span>
            <span>{duration}</span>
            <ul>{details.map((point, i) => (<li key={i}>{point}</li>))}</ul>
        </div>
    )
}