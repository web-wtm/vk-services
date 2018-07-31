import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import Authorization from '../../components/Authorization'
import { LogIn, SaveToken } from '../../components/Authorization/styled'

describe('Authorization component', () => {
    const saveFn = jest.fn();
    const component = shallow(<Authorization token={null} onClick={saveFn}/>);

    it('rendered Authorization component', () => {
        const component = renderer.create(<Authorization token={null} onClick={saveFn}/>);
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('rendered login link', () => {
        expect(component.find(LogIn)).toHaveLength(1);
    });

    it('rendered save token button', () => {
        component.setProps({token:'test'});
        expect(component.find(SaveToken)).toHaveLength(1);
    });
    
    it('should call function when click save token', () => {
        component.find(SaveToken).simulate('click');
        expect(saveFn).toHaveBeenCalled();
    });
});