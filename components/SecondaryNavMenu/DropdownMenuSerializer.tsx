import DropdownSubsection from './DropdownSubsection';
import SectionLabelLink from './SectionLabelLink';

const DropdownMenuSerializer = ({ _type, title, slug, contents }) => {
  switch (_type) {
    case 'playbookSubsection':
      return <DropdownSubsection title={title} contents={contents} />;
    default:
      return <SectionLabelLink title={title} slug={slug} />;
  }
};

export default DropdownMenuSerializer;
