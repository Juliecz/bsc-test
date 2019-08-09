import React from 'react';
import jest from 'jest-mock';
import { shallow } from 'enzyme';
import Note from '../../components/Note';

describe('Button component', () => {
  const data = {
    id: 1,
    title: 'Title',
  };
  
  it('renders correctly', () => {
    const note = shallow(<Note {...data} />);
    expect(note).toMatchSnapshot();
  });
  
  it('should run onDelete', () => {
    const onDelete = jest.fn();
    const button = shallow(<Note {...data} onDelete={onDelete} />);

    const buttonElement = button.find('.delete');
    buttonElement.simulate('click');

    expect(onDelete).toHaveBeenCalledTimes(1);
  });
});
