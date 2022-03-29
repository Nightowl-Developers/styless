import * as React from 'react';
import PropTypes from 'prop-types';

export interface ImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'alt'> {
    alt: string;
};

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

export default Image;
