import React from 'react';

import { LoaderContainer, LoaderImage, LoaderTypography } from './styles';

const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderImage src="https://www.yanogo.de/static/favicon.ico" alt="" />
      <LoaderTypography>Loadding...</LoaderTypography>
    </LoaderContainer>
  );
};

Loader.propTypes = {};

export default Loader;
