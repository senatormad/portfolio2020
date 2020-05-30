import React from 'react';
import Projects from '../../components/Projects';
import IdCard from '../../components/IdCard';
import Query from '../../components/Query';
import Nav from '../../components/Nav';
import Skills from '../../components/Skills';
import Tools from '../../components/MyTools';
import Contact from '../../components/Contact';
import HOME_QUERY from '../../queries/home/home';


const Home = () => {
  return (
    <>
      <Nav page="Home" />
      <main className="homeContent">
        <Query query={HOME_QUERY}>
          {({
            data: {
              works, info, socialMenus, mainTeches, tools,
            },
          }) => {
            return (
              <div>
                <IdCard info={info} socialMenus={socialMenus} />
                <Skills skills={mainTeches} />
                <Projects works={works} />
                <Tools tools={tools} />
                <Contact socialMenus={socialMenus} />
              </div>
            );
          }}
        </Query>
      </main>
    </>
  );
};

export default Home;
