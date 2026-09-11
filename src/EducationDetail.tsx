type EducationDetailProps = {
    src: string;
    alt: string;
    city: string;
    institution: string;
    qualification: string;
    duration: string;
    details: string[];
}

export default function EducationDetail({ src, alt, city, institution, qualification, duration, details}: EducationDetailProps) {

    return (
        <div className="image-item">
            <span>{city}</span>
            <img
                src={src}
                alt={alt}
                width="200px"
                height="auto"
            />
            <span>{institution}</span>
            <span>{qualification}</span>
            <span>{details}</span>
            <span>{duration}</span>
        </div>
    )
}