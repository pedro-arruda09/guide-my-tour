import React from 'react';
import Chart from 'react-apexcharts';

class PopulationChart extends React.Component {
  constructor(props) {
    super(props);

    // const currentCountry = props.population.find(c => c['Country'] === props.country.name.common)
    // console.log(currentCountry, 'current');
    // const countryPopulation = new Intl.NumberFormat().format(currentCountry['Population']);

    // let populationForChartFormatted = null;

    // if (countryPopulation.length >= 9) {
    //   const populationForChart = countryPopulation.split('.')[0];

    //   if(countryPopulation.length >= 13) {
        
    //   }

    //   populationForChartFormatted = `${populationForChart}m`;
    // }

    // const countryPositionPopulationsRank = currentCountry['Rank'];

    // if (countryPositionPopulationsRank <= 8) {

    // }

    // let biggestSevenCountriesInPopulation = [];
    // for (let i = 0; i < 8; i++) {
    //   biggestSevenCountriesInPopulation.push(props.population[i]);
    // }

    // let countryChartIndex = 0;
    // biggestSevenCountriesInPopulation.forEach(country => {
    //   if (country['Country']  === props.country.name.common) {
    //     countryChartIndex = country['Rank'];
    //     return;
    //   }
    // });

    // countryChartIndex = countryChartIndex - 1;

    this.state = {
      options: {
        chart: {
          id: 'basic-bar'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [
        {
          name: 'series-1',
          data: [30, 40, 45, 50, 49, 60, 70, 80]
        }
      ]
    };

    // this.state.options.xaxis.categories[countryChartIndex] = props.country.name.common;
  }

  render() {
    return (
      <div className='app'>
    <h1>Population (in millions)</h1>
        <div className='row'>
          <div className='mixed-chart'>
            <Chart
              options={this.state.options}
              series={this.state.series}
              type='bar'
              width='500'
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PopulationChart;