/**
 * @jest-environment jsdom
 */
 import * as React from 'react';

 import {
     fireEvent,
     render
 } from '@testing-library/react';
 import Typography from '../components/Typography';

 describe('Chip component', () => {
     it('should render', () => {
         const {
            getByText
         } = render(<Typography>
             Typography
         </Typography>);

         expect(getByText('Typography')).toBeInTheDocument();
     });

     it('should be body variant by default', () => {
         const {
            container
         } = render(<Typography>
             Typography
         </Typography>);

         expect(container.querySelector('.variant--body')).toBeInTheDocument();
     });

     it('should be body-tertiary variant', () => {
         const {
            container
         } = render(<Typography variant='body-tertiary'>
             Typography
         </Typography>);

         expect(container.querySelector('.modifier--tertiary')).toBeInTheDocument();
     });

     it('should be heading variant', () => {
         const {
            container
         } = render(<Typography variant='heading'>
             Typography
         </Typography>);

         expect(container.querySelector('.variant--heading')).toBeInTheDocument();
     });

     it('should be heading variant', () => {
         const {
            container
         } = render(<Typography variant='sub-heading'>
             Typography
         </Typography>);

         expect(container.querySelector('.variant--sub-heading')).toBeInTheDocument();
     });

     it('should be left align', () => {
         const {
            container
         } = render(<Typography variant='sub-heading' align='left'>
             Typography
         </Typography>);

         expect(container.querySelector('.align--left')).toBeInTheDocument();
     });

     it('should be right align', () => {
         const {
            container
         } = render(<Typography variant='sub-heading' align='right'>
             Typography
         </Typography>);

         expect(container.querySelector('.align--right')).toBeInTheDocument();
     });

     it('should be center align', () => {
         const {
            container
         } = render(<Typography variant='sub-heading' align='center'>
             Typography
         </Typography>);

         expect(container.querySelector('.align--center')).toBeInTheDocument();
     });
 });