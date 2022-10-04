import { sanity } from '../../lib/sanity';
import { Layout, Meta, StickyNavBar } from '../../components';
import { queries } from '../../data';
import Header from '../../components/About/Header/Header';
import { PartnerSection } from '../../components/Partners';
import { Footer } from '../../components/Footer';
import { Card } from '../../components/Cards';
import { useEffect, useState } from 'react';
import { Row } from '../../components/FeaturedVoices';
import { useStore } from '../../stores/store';
import { observer } from 'mobx-react-lite';
import { imageUrlFor } from '../../utils/imageUrlFor';
import chunks from '../../utils/chunks';

const FeaturedVoices = ({ pageData }: { pageData: any }) => {
  const { title, description, featuredVoices, seo } = pageData;
  const featuredVoicesRows = chunks(featuredVoices, 4);

  return (
    <>
      <Meta
        title={seo?.title}
        description={seo?.description}
        slug={'about/featured-voices'}
        image={seo?.image ? imageUrlFor(seo?.image).width(500).url() : null}
      />
      <StickyNavBar />
      <Layout key="featured-voices" paddingHorizontal={'7.5rem'}>
        <Header title={title} description={description} />
        <div className="results">
          {featuredVoicesRows.map((r, i) => {
            return <Row featuredVoices={r} key={i} />;
          })}
          <style jsx>{`
            .featured-voices-row {
              grid-column: 1/-1;
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
              grid-column: 1/-1;
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
};

export const getStaticProps = async () => {
  const pageData = await sanity.fetch(
    `
    *[_type == "featuredVoicesPage" ] {
      "id": _id,
      seo {
        ${queries.pageSeo}
      },
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
