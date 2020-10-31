import { SvgIcon, SvgIconProps } from '@material-ui/core';
import React from 'react';
import DeleteSVG from '../../assets/icons/delete.svg';

const Delete: React.VFC<SvgIconProps> = (props) => <SvgIcon {...props} component={DeleteSVG} />;

export default Delete;
