import { LogoLink, LogoImg } from './Logo.styled';
import logoDesktop1x from '../../../images/logo/logo-desk@1x.png';
import logoDesktop2x from '../../../images/logo/logo-desk@2x.png';
import logoTablet1x from '../../../images/logo/logo-tab@1x.png';
import logoTablet2x from '../../../images/logo/logo-tab@2x.png';
import logoMobile1x from '../../../images/logo/logo-mob@1x.png';
import logoMobile2x from '../../../images/logo/logo-mob@2x.png';

export const Logo = ({ close }) => {
  return (
    <LogoLink to="/main" onClick={close}>
      <picture>
        <source
          srcSet={`${logoDesktop1x} 1x, ${logoDesktop2x} 2x`}
          media="(min-width: 1280px)"
        />
        <source
          srcSet={`${logoTablet1x} 1x, ${logoTablet2x} 2x`}
          media="(min-width: 768px)"
        />
        <source
          srcSet={`${logoMobile1x} 1x, ${logoMobile2x} 2x`}
          media="(min-width: 320px)"
        />
        <LogoImg src={logoDesktop1x} alt="Logo" />
      </picture>
    </LogoLink>
  );
};
