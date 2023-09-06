interface IImageProps {
    image: any,
    width?: string,
    height?: string,
    styling?: string
}

const Image: React.FC<IImageProps> = ({ image, width, height, styling }) => {
    return (
        <div className={`flex justify-center ${styling}`}>
            <img src={image} className={`object-contain ${width} ${height}`} />
        </div>
    )
}

export default Image