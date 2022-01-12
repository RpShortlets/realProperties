import { createSlice } from "@reduxjs/toolkit";

import LargeOne from "../../image/largeOne.jpg"
import LargeTwo from "../../image/smallOne.jpg"
import LargeThree from "../../image/smallOne.jpg"
import SmallOne from "../../image/4.jpg"
import SmallTwo from "../../image/smallestTwo.jpg"
import SmallThree from "../../image/smallestFour.jpg"


export const PropertyDetails = createSlice({
    name:'propertydetails',
    initialState: {
        propertyDetail: {
            data: [
                {
                    name: '5 Bedroom Luxurious Apartment',
                    street: '1901 Thornridge Cir. Shiloh, Hawaii 81063',
                    bed: '5',
                    bath: '4',
                    rooms: '5',
                    description : 'Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue',
                    descriptionTwo: 'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue',
                    amenities: [
                        {
                            id: 1,
                            name: 'security'
                        }, 
                        {
                            id: 2,
                            name: 'conditioned'
                        },
                        {
                            id: 3,
                            name: 'Parking'
                        },
                        {
                            id: 4,
                            name: 'Bedrooms'
                        },
                        {
                            id: 5,
                            name: 'First Aid'
                        },
                        {
                            id: 6,
                            name: 'Elevator'
                        },
                        {
                            id: 7,
                            name: 'Kitchen'
                        },
                        {
                            id: 8,
                            name: 'Wifi'
                        },
                        {
                            id: 9,
                            name: 'Balcony'
                        },
                        {
                            id:10,
                            name: 'Guest Restroom'
                        },
                        {
                            id: 11,
                            name: 'Cleaning'
                        },
                        {
                            id: 12,
                            name: 'Roku'
                        },
                        {
                            id: 13,
                            name: 'Swimming'
                        },
                        {
                            id: 14,
                            name: 'Lighting'
                        },
                        {
                            id: 15,
                            name: 'Bathroom'
                        },
                        {
                            id: 16,
                            name: 'Oceanview'
                        }
                    ],
                    picOne: LargeOne,
                    picTwo: LargeTwo,
                    picThree: LargeThree,
                    picFour: SmallOne,
                    picFive: SmallTwo,
                    picSix: SmallThree,
                    price: '125',
                    numberofDays: '3',
                    total: '375',
                    adultcount: 2,
                    childrencount: 2,
                    guest: 4,

                }
            ]
        },
        adultcount: 0,
        childrencount: 0,
        guest: 0,
        pending: null,
        error: null,

    },
    reducers: {
        incrementAdultReservation: (state) => {
            state.adultcount++;
        },
    },
    extraReducers: {}
})

export const { incrementAdultReservation, } = PropertyDetails.actions;


export default PropertyDetails.reducer