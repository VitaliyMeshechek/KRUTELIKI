import { NavList, NavItem, Link } from './NavMenu.styled';

const links = [
  { id: 1, href: '/animators', text: 'Аніматори' },
  { id: 2, href: '/holiday', text: 'Свято під ключ' },
  { id: 3, href: '/aboutUs', text: 'Про нас' },
  { id: 4, href: '/ourHeroes', text: 'Наші герої' },
];

export const NavMenu = () => {
  return (
    <nav>
      <NavList>
        {links.map(({ id, href, text }) => (
          <NavItem key={id}>
            <nav>
              <Link to={href}>{text}</Link>
            </nav>
          </NavItem>
        ))}
      </NavList>
    </nav>
  );
};
