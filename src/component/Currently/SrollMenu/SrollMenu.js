import React from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './styles.css';

// list of items
const list = [
  { name: '1 Pm' },
  { name: '2 Pm' },
  { name: '3 Pm' },
  { name: '4 Pm' },
  { name: '5 Pm' },
  { name: '6 Pm' },
  { name: '7 Pm' },
  { name: '8 Pm' },
  { name: '8 Pm' }
];

// One item component
// selected prop will be passed
const MenuItem = ({ text, selected }) => {
  return (
    <div
      className="menu-item"
    >
      {text}
    </div>
  );
};

// All items component
// Important! add unique key
const Menu = (list) => list.map(el => {
  const { name } = el;

  return (
    <MenuItem
      text={name}
      key={name}
    />
  );
});


const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
  );
};


const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

const ScrollMenuHourly = () => {
  
  const [thisState, setThisState] = React.useState(0);
  
  const onSelect = key => {
    this.setState({ selected: key });
  }

  
    const { selected } = thisState;
    // Create menu from items
    const menu = Menu(list, selected);

    return (
      <div className="App text-white">
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={onSelect}
        />
      </div>
    );
}

export default ScrollMenuHourly;