import { sanity } from '../../lib/sanity';
import { Layout, Meta, StickyNavBar } from '../../components';
import { queries } from '../../data';
import Header from '../../components/About/Header/Header';
import { PartnerSection } from '../../components/Partners';
import { Footer } from '../../components/Footer';
import { imageUrlFor } from '../../utils/imageUrlFor';
import { pressPageQuery } from '../../data/queries/offerings';
import PressPage from '../../components/PressPage/PressPage';

const Press = PressPage;

export const getStaticProps = async () => {
  const pageData = await sanity.fetch(pressPageQuery);

  return {
    props: { pageData },
  };
};

export default Press;
