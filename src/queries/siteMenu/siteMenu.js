import gql from 'graphql-tag';

const SITE_MENU_QUERY = gql`
  query SiteMenu {
    siteMenus {
      id
      title
      url
    }
    socialMenus {
      id
      title
      url
      logo {
        id
        url
      }
    }
}`;

export default SITE_MENU_QUERY;
