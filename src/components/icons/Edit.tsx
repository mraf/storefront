import { SvgIcon, SvgIconProps } from '@material-ui/core';
import React from 'react';
import EditSVG from '../../assets/icons/edit.svg';

const Edit: React.VFC<SvgIconProps> = (props) => <SvgIcon {...props} component={EditSVG} />;

export default Edit;
