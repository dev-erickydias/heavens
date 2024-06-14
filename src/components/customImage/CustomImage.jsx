
export default function CustomImage({ src, alt, ...props }) {
    return (
        <img
            src={src}
            alt={alt}
            {...props}
        />
    );
}