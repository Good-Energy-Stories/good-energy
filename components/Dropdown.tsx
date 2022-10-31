import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const variants = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const GoodEnergyDropdown = ({
  options,
  placeholder,
  onChange,
  value,
}: {
  options: any[];
  placeholder: string;
  onChange: (any) => void;
  value: any;
}) => {
  return (
    <div>
      <Dropdown
        className="good-energy-dropdown"
        controlClassName="good-energy-control"
        placeholderClassName="good-energy-placeholder"
        menuClassName="good-energy-menu"
        arrowClassName="good-energy-arrow"
        options={options}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />

      <style global jsx>{`
        .good-energy-dropdown {
          background-color: var(--blueFive);
          width: 200px;
        }
        .good-energy-control {
          font-family: var(--flexa-mono);
          border-radius: 0;
          border: 1px solid var(--black);
          background-color: var(--blueFive);
        }
        .good-energy-placeholder {
          background-color: var(--blueFive);
        }
        .good-energy-menu {
          border: 1px solid var(--black);
          background-color: var(--blueFive);
        }
        .good-energy-arrow {
          border-color: var(--black) transparent transparent;
        }

        .is-open .Dropdown-arrow {
          border-color: transparent transparent var(--black) !important;
        }
        .Dropdown-option {
          color: var(--blueThree);
          font-family: var(--flexa);
        }
      `}</style>
    </div>
  );
};

export default GoodEnergyDropdown;
