import React from 'react';
import DashboardContainer from '../../components/DashboardContainer';
import TopSearchedCountries from '../../components/HomeComponents/TopSearchedCountries';
import ExploreCard from '../../components/HomeComponents/ExploreCard';
import ReviewSavesCard from '../../components/HomeComponents/ReviewSavesCard';
import MySaves from '../../components/HomeComponents/MySaves';

const Home = () => {
    return (
        <>
            <DashboardContainer>
                <TopSearchedCountries/>
                <ExploreCard/>
                <ReviewSavesCard/>
                <MySaves/>
            </DashboardContainer>
        </>
    )
}

export default Home;