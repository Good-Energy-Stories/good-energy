import DropdownSubsection from './DropdownSubsection';
import SectionLabelLink from './SectionLabelLink';

const DropdownMenuSerializer = ({ _type, title, slug, contents }) => {
  switch (_type) {
    case 'playbookSubsection':
      return (
        <DropdownSubsection key={title} title={title} contents={contents} />
      );
    default:
      return <SectionLabelLink key={slug} title={title} slug={slug} />;
  }
};

export default DropdownMenuSerializer;
