import {createSlice} from '@reduxjs/toolkit';
import One from "../../image/small/picOne.jpeg"
import Two from "../../image/small/picTwo.jpeg"
import Three from "../../image/small/picThree.jpeg"
import Four from "../../image/small/picFour.jpeg"
import Five from "../../image/small/picSix.jpeg"
import Six from "../../image/small/picSeven.jpeg"
import Seven from "../../image/small/picFive.jpeg"

import LargeOne from "../../image/largeScreen/picOne.jpeg"
import LargeTwo from "../../image/largeScreen/picTwo.jpeg"
import LargeThree from "../../image/largeScreen/picThree.jpeg"
import LargeFour from "../../image/largeScreen/picFour.jpeg"
import LargeFive from "../../image/largeScreen/picSix.jpeg"
import LargeSix from "../../image/largeScreen/picSeven.jpeg"
import LargeSeven from "../../image/largeScreen/picFive.jpeg"



export const  GallarySlice = createSlice({
    name: 'gallary',
    initialState: {
        gallary: [],
        loading: false,
        error: null,
        largeA4Image: [
            {
                id: 1,
                src:  LargeFour,
                loading: 'lazy',
            },
            {
                id: 2,
                src: LargeTwo,
                loading: 'lazy',
            },
            {
                id: 3,
                src: LargeThree,
                loading: 'lazy',
            },
            {
                id: 4,
                src: LargeOne,
                loading: 'lazy',
            },
            {
                id: 5,
                src: LargeFive,
                loading: 'lazy',
            },
            {
                id: 6,
                src: LargeSix,
                loading: 'lazy',
            },
            {
                id: 7,
                src: LargeSeven,
                loading: 'lazy',
            },
        ]
    },
    reducers: {
        fetchGallaryStart: (state) => {
            state.loading = true;
            state.error = null;
        }
        ,
        fetchGallarySuccess: (state, action) => {
            state.loading = false;
            state.gallary = [
                    {
                            id: 1,
                            src: One,
                            loading: 'lazy',
                        },
                        {
                            id: 2,
                            src: Two,
                            loading: 'lazy',
                        },
                        {
                            id: 3,
                            src: Three,
                            loading: 'lazy',
                        },
                        {
                            id: 4,
                            src: Four,
                            loading: 'lazy',
                        },
                        {
                            id: 5,
                            src: Five,
                            loading: 'lazy',
                        },
                        {
                            id: 6,
                            src: Six,
                            loading: 'lazy',
                        },
                        {
                            id: 7,
                            src: Seven,
                            loading: 'lazy',
                        },
                        // {
                        //     id: 8,
                        //     image: Eight
                        // },
                        // {
                        //     id: 9,
                        //     image: Nine
                        // },
                        // {
                        //     id: 10,
                        //     image: Ten
                        // },
                        // {
                        //     id: 11,
                        //     image: Eleven
                        // },
                        // {
                        //     id: 12,
                        //     image: Twelve
                        // },
                        // {
                        //     id: 13,
                        //     image: Thirteen
                        // }, 
                        // {
                        //     id: 14,
                        //     image: Fourteen
                        // },
                        // {
                        //     id:15,
                        //     image: Fifteen
                        // },
                        // {
                        //     id: 16,
                        //     image: Sixteen
                        // },
                        // {
                        //     id: 17,
                        //     image: Seventeen
                        // },
                        // {
                        //     id: 18,
                        //     image: Eighteen
                        // },
                        // {
                        //     id: 19,
                        //     image: Nineteen
                        // },
                        // {
                        //     id: 20,
                        //     image: Twenty
                        // },
                        // {
                        //     id: 21,
                        //     image: TwentyOne
                        // },
                        // {
                        //     id: 22,
                        //     image: TwentyTwo
                        // }
            ];
        }
        ,
        fetchGallaryFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});


export const {
    fetchGallaryStart,
    fetchGallarySuccess,
    fetchGallaryFailure
} = GallarySlice.actions;

export default GallarySlice.reducer;