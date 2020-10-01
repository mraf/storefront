import {
  AppBar,
  Box,
  Collapse,
  Hidden,
  IconButton,
  makeStyles,
  SvgIcon,
  Toolbar,
} from '@material-ui/core';
import React, { useContext } from 'react';
import { useToggle } from 'react-use';
import MenuSvg from '../../assets/icons/menu.svg';
import { MenuLocationEnum, useMenuQuery } from '../../graphql';
import HeaderCartButton from './header-cart-button';
import HeaderLogo from './header-logo';
import HeaderMenu from './header-menu';
import Link from './link';
import { SettingsContext } from './settings-provider';

const useStyles = makeStyles(
  ({ breakpoints }) => ({
    toolbar: {
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: breakpoints.values.lg,
      minHeight: 60,
      width: '100%',

      [breakpoints.up('md')]: {
        minHeight: 110,
      },
    },

    logo: {
      '& > svg': {
        height: 44,
        width: 'auto',

        [breakpoints.up('md')]: {
          height: 62,
        },
      },
    },
  }),
  { name: 'Header' },
);

const Header: React.VFC = () => {
  const styles = useStyles();
  const settings = useContext(SettingsContext);
  const [open, toggleOpen] = useToggle(false);

  const { data: menu } = useMenuQuery({
    variables: { location: MenuLocationEnum.PRIMARY_NAVIGATION },
  });

  return (
    <AppBar color="default" position="relative">
      <Toolbar className={styles.toolbar}>
        <Hidden mdUp>
          <Box flexGrow={1}>
            <IconButton aria-label="Menu" onClick={toggleOpen}>
              <SvgIcon component={MenuSvg} />
            </IconButton>
          </Box>
        </Hidden>
        <Link className={styles.logo} href="/" underline="none">
          <HeaderLogo titleAccess={settings.title} />
        </Link>
        <Box
          display="flex"
          alignItems="center"
          alignSelf="stretch"
          flexGrow={1}
          justifyContent="flex-end"
        >
          <Hidden mdDown>
            <HeaderMenu menu={menu} />
          </Hidden>
          <HeaderCartButton />
        </Box>
      </Toolbar>
      <Collapse unmountOnExit in={open} timeout="auto">
        <HeaderMenu menu={menu} />
      </Collapse>
    </AppBar>
  );
};

export default Header;
