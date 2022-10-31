import Header from './Header/Header';
import PageContent from './PageContent';
import Controls from './Controls/Controls';

const TwoWorldsPage = ({ data }: { data: any }) => {
  return (
    <>
      <Header title={data?.title} smallTitle={data?.smallTitle} />
      {data?.content?.map((c, i) => {
        return <PageContent key={i} content={c} />;
      })}
      <Controls />
    </>
  );
};

export default TwoWorldsPage;
