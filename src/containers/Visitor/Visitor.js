import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import FilterBar from '../../components/FilterBar/FilterBar';
import Cards from './Cards/Cards';

class Visitor extends Component {
    state = {
        places: [],
    };
    componentDidMount = () => {
        this.setState({
            places: [
                {
                    _id: '5f0f4d1b7ac46e601a8ccb5d',
                    placeName: 'Stevens',
                    description: 'A famous school in New Jersey',
                    placeAddress: '1 Castle Point Terrace, Hoboken',
                    placeZipCode: '07310',
                    placePrice: 100,
                    category: ['University', 'Quiet'],
                    displayTime: '2020-05-15',
                    remainNum: 200,
                    images: [
                        'Stevens_Institute_Of_Technology_1.jpg',
                        'Stevens_Institute_Of_Technology_2.jpg',
                        'Stevens_Institute_Of_Technology_3.png',
                    ],
                    placeUserComments: [
                        '5f0f4d1b7ac46e601a8ccb6b',
                        '5f0f4d1b7ac46e601a8ccb6c',
                        '5f0f4d1b7ac46e601a8ccb6d',
                    ],
                },
                {
                    _id: '5f0f4d1b7ac46e601a8ccb5e',
                    placeName: 'Kennedy Space Center',
                    description:
                        'To discover and expand knowledge for the benefit of humanity.',
                    placeAddress: 'Titusville, Florida',
                    placeZipCode: '32899',
                    placePrice: 50,
                    category: ['Building', 'Science', 'Museum'],
                    displayTime: '2021-02-18',
                    remainNum: 200,
                    images: ['NASA_1.jpg', 'NASA_2.jpg'],
                    placeUserComments: [
                        '5f0f4d1b7ac46e601a8ccb6e',
                        '5f0f4d1b7ac46e601a8ccb6f',
                    ],
                },
                {
                    _id: '5f0f4d1b7ac46e601a8ccb5f',
                    placeName: 'Statue of Liberty',
                    description:
                        'Iconic National Monument opened in 1886, offering guided tours, a museum & city views.',
                    placeAddress:
                        'Liberty Island Manhattan, New York City, New York,',
                    placeZipCode: '10004',
                    placePrice: 59,
                    category: ['Historical landmark', 'Quiet', 'Shopping'],
                    displayTime: '2020-06-15',
                    remainNum: 100,
                    images: [
                        'Statue_Of_Liberty_1.jpg',
                        'Statue_Of_Liberty_2.jpg',
                    ],
                    placeUserComments: ['5f0f4d1b7ac46e601a8ccb70'],
                },
                {
                    _id: '5f0f4d1b7ac46e601a8ccb60',
                    placeName: 'Universal Studio',
                    description:
                        'Famous, sprawling amusement park featuring movie-themed rides, attractions & entertainment.',
                    placeAddress: '6000 Universal Blvd, Orlando, FL',
                    placeZipCode: '32819',
                    placePrice: 189,
                    category: ['Theme park', 'Happy', 'Adventure'],
                    displayTime: '2020-09-17',
                    remainNum: 50,
                    images: [
                        'Universal_Studio_1.jpg',
                        'Universal_Studio_2.jpg',
                        'Universal_Studio_3.jpg',
                    ],
                    placeUserComments: [
                        '5f0f4d1b7ac46e601a8ccb71',
                        '5f0f4d1b7ac46e601a8ccb72',
                    ],
                },
                {
                    _id: '5f0f4d1b7ac46e601a8ccb61',
                    placeName: 'Empire State Building',
                    description:
                        'Iconic, art deco office tower from 1931 with exhibits & observatories on the 86th & 102nd floors',
                    placeAddress: '20 W 34th St, New York, NY',
                    placeZipCode: '10001',
                    placePrice: 20,
                    category: ['Historical landmark', 'Quiet', 'Building'],
                    displayTime: '2022-04-27',
                    remainNum: 1000,
                    images: [
                        'Empire_State_Building_1.jpg',
                        'Empire_State_Building_2.jpg',
                    ],
                    placeUserComments: [
                        '5f0f4d1b7ac46e601a8ccb73',
                        '5f0f4d1b7ac46e601a8ccb74',
                        '5f0f4d1b7ac46e601a8ccb75',
                    ],
                },
            ],
        });
    };
    render() {
        return (
            <React.Fragment>
                <Header isVisitor />
                <FilterBar />
                <Cards places={this.state.places} />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Visitor;
