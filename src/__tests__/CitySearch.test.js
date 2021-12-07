// src/__tests__/CitySearch.test.js

import React from 'react';
import { shallow } from 'enzyme';
import CitySearch from '../CitySearch';
import { mockData } from '../mock-data';
import { extractLocations } from '../api';

describe('<CitySearch /> component', () => {
  let locations, CitySearchWrapper;
  beforeAll(() => {
    locations = extractLocations(mockData);
    CitySearchWrapper = shallow(<CitySearch locations={locations} />);
  });

test('suggestion list match the query when changed', () => {
  CitySearchWrapper.setState({ query: '', suggestions: [] });
  CitySearchWrapper.find(".city").simulate("change", {
    target: { value: "Berlin" },
  });
  const query = CitySearchWrapper.state("query");
  const filteredLocations = locations.filter((location) => {
    return location.toUpperCase().indexOf(query.toUpperCase()) > -1;
  });
  expect(CitySearchWrapper.state("suggestions")).toEqual(filteredLocations);
});
test("selecting a suggestion should change query state", () => {
  CitySearchWrapper.setState({
    query: 'Berlin'  });
  const suggestions = CitySearchWrapper.state('suggestions');
  CitySearchWrapper.find('.suggestions li').at(0).simulate('click');
  expect(CitySearchWrapper.state("query")).toBe(suggestions[0]);
// });
// test("selecting a suggestion should hide the suggestions list", () => {
//    CitySearchWrapper.setState({
//      query: 'Berlin',
//      showSuggestions: undefined
//    });
//    CitySearchWrapper.find('.suggestions li').at(0).simulate('click');
//    expect(CitySearchWrapper.state('showSuggestions')).toBe(false);
//    expect(CitySearchWrapper.find('.suggestions').prop('style')).toEqual({ display: 'none' });
 });








});
