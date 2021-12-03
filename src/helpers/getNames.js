import PropTypes from 'prop-types'

export const getNames= async(page) => {

  let url;
  if(page>=10) url= `https://randomuser.me/api/?page=10&results=3&seed=abc&inc=name`;
  else url= `https://randomuser.me/api/?page=${page}&results=10&seed=abc&inc=name`;
  const resp= await fetch( url );
  const names = await resp.json();

  return names;
};

getNames.propTypes= {
  page: PropTypes.number.isRequired
}