import React from 'react'
import { shallow } from 'enzyme'

import { Friends } from './index'
import SideBar from '../../components/SideBar'
import InputField from '../../components/InputField'

describe('Friends component', () => {
    const store = {
        friends: {
            mutualFriendsId: []
        }
    };

    const component = shallow(<Friends state={store} getUserId={() => {}} />);

    it('render inputs', () => {

        const redneredSideBar = component.find(SideBar);
        expect(redneredSideBar.find(InputField)).toHaveLength(3)
    });
});