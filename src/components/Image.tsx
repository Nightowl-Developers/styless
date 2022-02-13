import * as React from 'react';
import PropTypes from 'prop-types';

export interface ImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'alt'> {
    alt: string;
};

const Image: React.FC<ImageProps> = (props) => {
    return <figure>
        <img
            {...props}
        />

        <figcaption>
            { props.alt }
        </figcaption>
    </figure>;
};

Image.displayName = 'Image';

export default Image;