import React from 'react'
import { shallow } from 'enzyme'

import Authorization from '../../components/Authorization'
import { LogIn, SaveToken } from '../../components/Authorization/styled'

describe('Authorization component', () => {
    const saveFn = jest.fn();
    const component = shallow(<Authorization token={null} onClick={saveFn}/>);

    it('Render login link', () => {
        expect(component.find(LogIn)).toHaveLength(1);
    });

    it('Render save token button', () => {
        component.setProps({token:'test'});
        expect(component.find(SaveToken)).toHaveLength(1);
    });
    
    it('Should call function when click save token', () => {
        component.find(SaveToken).simulate('click');
        expect(saveFn).toHaveBeenCalled();
    });
});