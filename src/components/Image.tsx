import * as React from 'react';
import PropTypes from 'prop-types';

export interface ImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'alt' | 'src' | 'srcSet'> {
    alt: string;
    src: string;
    srcSet?: string;
}

const Image: React.FC<ImageProps> = ({
    alt,
    src,
    srcSet
}) => {
    return <figure>
        <img
            src={src}
            srcSet={srcSet}
            alt={alt}
        />

        <figcaption>
            { alt }
        </figcaption>
    </figure>;
};

Image.displayName = 'Image';

Image.propTypes = {
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    srcSet: PropTypes.string,
}

export default Image;
