import { sanity } from '../../lib/sanity';
import { Layout, Meta, StickyNavBar } from '../../components';
import { queries } from '../../data';
import { Header } from '../../components/About';
import { PartnerSection } from '../../components/Partners';
import { Footer } from '../../components/Footer';
import { Card } from '../../components/Cards';
import { useEffect, useState } from 'react';
import { Row } from '../../components/FeaturedVoices';
import { useStore } from '../../stores/store';
import { observer } from 'mobx-react-lite';

function chunks(array: any[], n: number): any[] {
  const chunkedArray = [];
  for (let i = 0; i < array.length; i += n) {
    const chunk = array.slice(i, i + n);
    chunkedArray.push(chunk);
  }
  return chunkedArray;
}

const FeaturedVoices = observer(({ pageData }: { pageData: any }) => {
  const store = useStore();
  const {
    uiStore: { windowWidth },
  } = store;
  const [activeQuotes, setActiveQuotes] = useState(null);
  const { title, description, featuredVoices } = pageData;
  const featuredVoicesRows = [
    ...chunks(featuredVoices, windowWidth < 1080 ? 3 : 4),
  ];

  useEffect(() => {
    console.log(windowWidth);
  }, [windowWidth]);

  return (
    <>
      <Meta />
      <StickyNavBar />
      <Layout key="featured-voices" paddingHorizontal={'7.5rem'}>
        <Header title={title} description={description} />
        <div className="results">
          {featuredVoicesRows.map((r, i) => {
            return <Row featuredVoices={r} key={i} />;
          })}
          <style jsx>{`
            .featured-voices-row {
              grid-column: 1/5;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;

              margin-bottom: 2.5rem;
            }
            .featured-voices-cards {
              width: 100%;
              display: flex;
              border-bottom: 1px solid var(--blueThree);
              justify-content: space-around;
            }
            .featured-voices-active-quote {
              width: 100%;
            }
            .results {
              grid-column: 1/5;
              display: grid;
              grid-template-columns: repeat(4, minmax(0, 1fr));
            }
            @media only screen and (min-width: 1440px) {
              .results {
                grid-template-columns: repeat(4, minmax(0, 1fr));
              }
            }
            @media only screen and (max-width: 1080px) {
              .results {
                grid-template-columns: repeat(3, minmax(0, 1fr));
              }
            }

            @media only screen and (max-width: 928px) {
              .results {
                grid-template-columns: repeat(1, minmax(0, 1fr));
                padding: 0 1.25rem;
                margin-bottom: 2.5rem;
              }
            }
          `}</style>
        </div>
      </Layout>
      <Footer />
    </>
  );
});

export const getStaticProps = async () => {
  const pageData = await sanity.fetch(
    `
    *[_type == "featuredVoicesPage" ] {
      "id": _id,
      title,
      description,
      featuredVoices[]-> {
        ${queries.featuredVoice}
      }
    }[0]
  `,
  );

  return {
    props: { pageData },
  };
};

export default FeaturedVoices;
