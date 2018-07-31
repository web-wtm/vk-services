import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
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

    it('rendered Friends component', () => {
        const component = renderer.create(<Friends state={store} getUserId={() => {}} />);
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('rendered inputs', () => {
        const redneredSideBar = component.find(SideBar);
        expect(redneredSideBar.find(InputField)).toHaveLength(3)
    });
});