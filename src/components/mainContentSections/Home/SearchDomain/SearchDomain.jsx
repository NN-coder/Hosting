import React from 'react';
import Svg from '../../../Svg';
import StandardSectionTitle from '../../../StandardSectionTitle/StandardSectionTitle';
import StandradBtn from '../../../StandardBtn/StandardBtn';
import './SearchDomain.scss';

const image = (
  <Svg width="25px" height="25px" viewBox="0 0 475 475" fill="#fb6b45">
    <g>
      <path
        d="M464.524,412.846l-97.929-97.925c23.6-34.068,35.406-72.047,35.406-113.917c0-27.218-5.284-53.249-15.852-78.087
		    c-10.561-24.842-24.838-46.254-42.825-64.241c-17.987-17.987-39.396-32.264-64.233-42.826
		    C254.246,5.285,228.217,0.003,200.999,0.003c-27.216,0-53.247,5.282-78.085,15.847C98.072,26.412,76.66,40.689,58.673,58.676
		    c-17.989,17.987-32.264,39.403-42.827,64.241C5.282,147.758,0,173.786,0,201.004c0,27.216,5.282,53.238,15.846,78.083
		    c10.562,24.838,24.838,46.247,42.827,64.234c17.987,17.993,39.403,32.264,64.241,42.832c24.841,10.563,50.869,15.844,78.085,15.844
		    c41.879,0,79.852-11.807,113.922-35.405l97.929,97.641c6.852,7.231,15.406,10.849,25.693,10.849
		    c9.897,0,18.467-3.617,25.694-10.849c7.23-7.23,10.848-15.796,10.848-25.693C475.088,428.458,471.567,419.889,464.524,412.846z
		     M291.363,291.358c-25.029,25.033-55.148,37.549-90.364,37.549c-35.21,0-65.329-12.519-90.36-37.549
		    c-25.031-25.029-37.546-55.144-37.546-90.36c0-35.21,12.518-65.334,37.546-90.36c25.026-25.032,55.15-37.546,90.36-37.546
		    c35.212,0,65.331,12.519,90.364,37.546c25.033,25.026,37.548,55.15,37.548,90.36C328.911,236.214,316.392,266.329,291.363,291.358z"
      />
    </g>
  </Svg>
);

const SearchDomain = () => (
  <div className="search-domain">
    <div className="wrapper search-domain-wrapper">
      <StandardSectionTitle rowOne="Search your" rowTwo="Domain" beforeImg={image} />

      <form action="" className="search-domain-form" method="post">
        <input
          name="name"
          className="search-domain-form__item search-domain-form__input"
          type="text"
          placeholder="Enter your domain name"
        />

        <select name="years" className="search-domain-form__item search-domain-form__select">
          <option value="" disabled selected hidden>
            Years (0-1 year)
          </option>
          <option value="0">0 years</option>
          <option value="1">1 year</option>
        </select>

        <select name="domain" className="search-domain-form__item search-domain-form__select">
          <option value="com">.com</option>
          <option value="net">.net</option>
          <option value="org">.org</option>
        </select>

        <StandradBtn className="search-domain-form__submit" type="submit">
          Search
        </StandradBtn>
      </form>
    </div>
  </div>
);

export default SearchDomain;
