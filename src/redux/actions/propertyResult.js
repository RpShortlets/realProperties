import { createSlice } from "@reduxjs/toolkit";
import Pic from "../../image/resize.jpg"
import PicSmall from "../../image/resizeSmall.jpg"

export const PropertyResultSlice = createSlice({
    name: "propertyResult",
    initialState: {
        propertyResult: {
            'searchlocation': 'Lagos shortlets',
            'propertiesFound': '73',
            'data': [

                {
                    propertyId: 1,
                    propertyTitle: '5 Bedroom Luxurious Apartment',
                    propertyLocation: 'Lekki Phase 1, Lagos State',
                    propertyPrice: '300',
                    beds: '5',
                    baths: '3',
                    amenity: 'Washer',
                    rooms: '5',
                    propertyType: 'Apartment',
                    guest: '4',
                    image: Pic,
                    imageSmall: PicSmall,
                },
                {
                    propertyId: 2,
                    propertyTitle: '5 Bedroom Luxurious Apartment',
                    propertyLocation: 'Lekki Phase 1, Lagos State',
                    propertyPrice: '500',
                    beds: '5',
                    baths: '3',
                    amenity: 'Washer',
                    rooms: '5',
                    propertyType: 'Apartment',
                    guest: '4',
                    image: Pic,
                    imageSmall: PicSmall,
                }, {
                    propertyId: 3,
                    propertyTitle: '5 Bedroom Luxurious Apartment',
                    propertyLocation: 'Lekki Phase 1, Lagos State',
                    propertyPrice: '1000',
                    beds: '5',
                    baths: '3',
                    amenity: 'Washer',
                    rooms: '5',
                    propertyType: 'Apartment',
                    guest: '4',
                    image: Pic,
                    imageSmall: PicSmall,
                }
            ]
        },
        propertyResultCount: 0,
        propertyResultPage: 1,
        propertyResultPageSize: 10,
        loading: false,
        error: null,
    },
    reducers: {}
});

// const { } = PropertyResultSlice.actions

export default PropertyResultSlice.reducer;