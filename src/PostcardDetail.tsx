import { useState } from 'react';

type PostcardDetailProps = {
    src: string;
    alt: string;
    role: string;
    duration: string;
    details: string[];
};

export default function PostcardDetail({ src, alt, role, duration, details }: PostcardDetailProps) {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className="image-item">
            <img
                src={src}
                alt={alt}
                width="200px"
                height="auto"
                onClick={() => setShowDetails(!showDetails)}
            />
            <span>{role}</span>
            <span>{duration}</span>
            {showDetails && (
                <ul>{details.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}
                </ul>
                )}
        </div>
    );
}