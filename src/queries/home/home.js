import gql from 'graphql-tag';

const HOME_QUERY = gql`
  query Home {
    info {
      firstName
      lastName
      profilePic {
        url
      }
      jobTitle
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
    mainTeches {
      id
      name
    }
    works(sort: "created_at:DESC") {
      id
      slug
      siteName
      url
      main_teches {
        id
        name
      }
      other_teches {
        id
        name
      }
      logo {
        id
        url
      }
      screenshot {
        id
        url
      }
    }
    tools {
      id
      name
      url
      tool {
        id
        name
        url
      }
    }
  }
`;

export default HOME_QUERY;
