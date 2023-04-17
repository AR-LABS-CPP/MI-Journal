interface IImageProps {
    image: any,
    width?: string,
    height?: string
}

const Image: React.FC<IImageProps> = ({ image, width, height }) => {
    return (
        <div className="flex justify-center">
            <img src={image} className={`object-contain ${width} ${height}`} />
        </div>
    )
}

export default Image