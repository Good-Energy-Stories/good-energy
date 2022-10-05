import { sanity } from '../../lib/sanity';
import { Layout, Masthead, Meta } from '../../components';
import {
  PlaybookAnimatedSpacer,
  StickyNavBar,
} from '../../components/PlaybookHome';
import { queries } from '../../data';
import {
  PageContent,
  ThreeColumnLayout,
  ThreeColumnLayoutStyle,
} from '../../components/PlaybookHome';
import { Footer } from '../../components/Footer';
import { imageUrlFor } from '../../utils/imageUrlFor';

const Root = ({ pageData }) => {
  const { masthead, content, seo, playbookTableOfContentsInitialState } =
    pageData;

  const clearCookie = async () => {
    await fetch('/api/logout', {
      method: 'post',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    });
    window.location.reload();
  };

  return (
    <>
      <Meta
        title={seo?.title}
        description={seo?.description}
        slug={'playbook'}
        image={seo?.image ? imageUrlFor(seo?.image).width(500).url() : null}
      />
      <Masthead />
      <StickyNavBar
        secondaryMenuInitial={playbookTableOfContentsInitialState}
      />

      <Layout key="playbookHome">
        <ThreeColumnLayout
          data={masthead}
          style={ThreeColumnLayoutStyle.primary}
        />
        {content.map((c, i) => (
          <PageContent key={i} index={i} content={c} />
        ))}
      </Layout>
      <Footer />
    </>
  );
};

export async function getStaticProps({ preview, previewData }) {
  const pageData = await sanity.fetch(queries.playbookHomePageQuery);

  return { props: { pageData } };
}

export default Root;
